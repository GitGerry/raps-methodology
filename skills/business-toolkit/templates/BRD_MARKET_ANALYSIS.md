# 📊 Market Analysis & Competitive Intelligence
> **Usage:** Defines the "Wedge" strategy and provides critical data for Design (Visuals) and Architecture (Scale).

## 1. Market Sizing (For Architect)
> **Goal:** Estimate system load based on Total Addressable Market (TAM).

| Metric | Estimate | Source | Implications for Engineering |
| :--- | :--- | :--- | :--- |
| **TAM** (Total Market) | [e.g. 5M Users] | [Cit. 1] | |
| **SOM** (Serviceable Market) | [e.g. 50k Users] | [Cit. 2] | Max Concurrent Users ~5k |
| **Transaction Vol** | [e.g. High Freq] | [Internal] | Needs High-Throughput DB |

## 2. Competitive Benchmarking (For Product)
| Competitor | URL | Pricing Model | Killer Feature | Their Weakness (Our Wedge) |
| :--- | :--- | :--- | :--- | :--- |
| **Comp A** | `example.com` | $50/mo | One-click Integrations | Slow/Laggy UI |
| **Comp B** | | Freemium | Mobile App | No Analytics |

## 3. Visual Intelligence (For Design)
> **Instructions:** Paste links to screenshots/video of competitor UIs.

### A. Design Aesthetic Trends
*   **Dominant Style:** [e.g. Dark Mode, Glassmorphism, Brutalist]
*   **Navigation Pattern:** [e.g. Sidebar vs Top Nav]

### B. Competitor Screenshots
*   **Login Flow:** `[Link to Image]` - *Note: Smooth animation.*
*   **Dashboard:** `[Link to Image]` - *Note: Cluttered, we can do better.*

## 4. Voice of Customer (For Analyst)
> **Source:** Reddit, G2, App Store Reviews.

*   "I hate [Comp A] because it forces me to speak to sales." → **Req:** Self-serve onboarding.
*   "I wish [Comp B] had dark mode." → **Req:** Day/Night theme switch.

## 5. Strategic SWOT
- **Strengths:** [Internal Capability]
- **Weaknesses:** [Gap]
- **Opportunities:** [Market Shift]
- **Threats:** [Competitor Move]
