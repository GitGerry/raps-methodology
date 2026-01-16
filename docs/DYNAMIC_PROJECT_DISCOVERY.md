# Dynamic Project Discovery

## Overview
The RAPS Mission Control Dashboard now features **Dynamic Project Discovery**. Instead of maintaining a static `projects.json` file, the dashboard automatically scans your workspace to discover and register RAPS projects.

## How It Works
The discovery mechanism is implemented as a custom **Vite middleware** in `vite.config.js`.

1.  **Intercepts Requests**: The middleware intercepts standard HTTP requests to `/projects.json`.
2.  **Scans Workspace**: It looks at the grandparent directory of the dashboard (the `RAPS` root folder).
3.  **Identifies Projects**: It lists all non-hidden subdirectories as potential projects.
4.  **Enriches Data**: It checks for a `package.json` in each project folder to auto-populate metadata like:
    - `fullName` (from `package.json` description)
5.  **Generates Response**: It serves a fresh JSON response compatible with the dashboard's expected schema.

## Adding a New Project
Simply create a new folder in your RAPS workspace (sibling to `raps-methodology`).
- Ideally, include a `package.json` with a `description` field for better display.
- Refresh the Mission Control Dashboard, and the new project will appear automatically in the project selector.

## Configuration
The scanner is configured in `dashboard/vite.config.js`. You can customize the `workspaceRoot` resolution logic if your directory structure changes.

```javascript
const workspaceRoot = path.resolve(dashboardRoot, '../../');
```
