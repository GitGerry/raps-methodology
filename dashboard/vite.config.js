import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

const rapsProjectScanner = () => {
    return {
        name: 'raps-project-scanner',
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                if (req.url === '/projects.json') {
                    try {
                        const dashboardRoot = process.cwd();
                        const rapsRoot = path.resolve(dashboardRoot, '../'); // Assuming dashboard is inside raps-methodology inside RAPS root, actually raps-methodology is a sibling to projects usually, but here dashboard is INSIDE raps-methodology. 
                        // Wait, list_dir of raps-methodology showed dashboard is inside it. 
                        // projects.json showed path: "C:/Users/gerry/OneDrive/Desktop/LLM/TAPAS"
                        // raps-methodology path: "c:\Users\gerry\OneDrive\Desktop\LLM\RAPS\raps-methodology"
                        // So RAPS root is "c:\Users\gerry\OneDrive\Desktop\LLM\RAPS" (grandparent of dashboard)

                        const workspaceRoot = path.resolve(dashboardRoot, '../../');

                        const directories = fs.readdirSync(workspaceRoot, { withFileTypes: true })
                            .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.') && dirent.name !== 'node_modules')
                            .map(dirent => dirent.name);

                        const projects = directories.map(dirName => {
                            const fullPath = path.join(workspaceRoot, dirName);
                            let projectInfo = {
                                id: dirName.toLowerCase(),
                                name: dirName,
                                fullName: dirName,
                                path: fullPath.split(path.sep).join('/'), // Normalize slashes
                                status: 'active',
                                currentPhase: 'Planning',
                                sprintProgress: 0,
                                createdAt: new Date().toISOString().split('T')[0]
                            };

                            // Try to enrich with package.json
                            try {
                                const packageJsonPath = path.join(fullPath, 'package.json');
                                if (fs.existsSync(packageJsonPath)) {
                                    const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
                                    if (pkg.description) projectInfo.fullName = pkg.description;
                                    // if (pkg.name) projectInfo.name = pkg.name; // Keep folder name as display name often better for recognition? Or maybe title case the folder name.
                                }
                            } catch (e) {
                                // ignore
                            }
                            return projectInfo;
                        });

                        // Ensure TAPAS is present? No, scanner finds it if it exists.
                        // Ensure raps-methodology itself is included? Yes, it will be found.

                        const responseData = {
                            projects: projects,
                            settings: {
                                defaultProject: projects.find(p => p.id === 'tapas') ? 'tapas' : projects[0]?.id
                            }
                        };

                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(responseData, null, 2));
                        return;
                    } catch (e) {
                        console.error('Error scanning projects:', e);
                        next();
                    }
                } else {
                    next();
                }
            });
        }
    };
};

export default defineConfig({
    plugins: [rapsProjectScanner()],
    server: {
        port: 5173,
        strictPort: true
    }
});
