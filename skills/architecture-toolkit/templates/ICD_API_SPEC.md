# 🔌 ICD (Interface Control Document): [API Name]

> **Purpose:** Defines the contract (inputs/outputs) between Systems.
> **Owner:** /architect (or Backend Lead)

## 1. Interface Overview
*   **System A (Provider):** [e.g. Payment Service]
*   **System B (Consumer):** [e.g. Checkout Frontend]
*   **Protocol:** [REST / GraphQL / gRPC]
*   **Auth Method:** [OAuth2 / API Key / JWT]

## 2. API Endpoints

### `[GET/POST] /path/to/resource`
**Description:** [What does this do?]

**Request Headers:**
```json
{
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
}
```

**Request Body (Schema):**
```json
{
  "field_name": "string (required)",
  "optional_field": "integer"
}
```

**Response (200 OK):**
```json
{
  "data": {
    "id": "123",
    "status": "success"
  }
}
```

**Error Codes:**
| Code | Meaning | Resolution |
| :--- | :--- | :--- |
| 400 | Bad Request | Check schema usage |
| 401 | Unauthorized | Refresh token |

## 3. SLAs & Throttling
*   **Rate Limit:** [e.g. 100 req/min]
*   **Latency SLA:** [< 200ms p95]
*   **Availability:** [99.9%]

## 4. Change Log
| Version | Date | Changes | Author |
| :--- | :--- | :--- | :--- |
| v1.0 | [Date] | Initial Draft | Arch |
