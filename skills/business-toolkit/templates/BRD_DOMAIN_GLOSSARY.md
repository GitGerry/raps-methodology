# 📖 Domain Glossary & Ubiquitous Language

> **Purpose:** Define the precise "Business Language" to be used in Code, DB Schema, and Specs.
> **Rule:** Code entities MUST match these terms. Do not use "User" if business says "Member".

## 1. Core Entities
| Term | Definition | Synonyms (Do Not Use) |
| :--- | :--- | :--- |
| **Member** | A customer with an active subscription. | User, Client, Customer |
| **Cart** | A temporary holding state for items before purchase. | Basket, Order (Pending) |
| **Order** | A completed, paid transaction. | Purchase, Receipt |

## 2. Business Concepts
| Concept | Explanation | Example |
| :--- | :--- | :--- |
| **Cool-down** | The 24h period after a refund where a Member cannot buy again. | "User is in cool-down" |
| **Grandfathering**| Keeping a Member on an old Price Tier after a price hike. | "Legacy Pro Plan" |

## 3. Acronyms
| Acronym | Full Form | Context |
| :--- | :--- | :--- |
| **AOV** | Average Order Value | Analytics |
| **KYC** | Know Your Customer | Compliance |
