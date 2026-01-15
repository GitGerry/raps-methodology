// TAPAS Dashboard - Mermaid Diagram Definitions
// All embedded diagram data extracted from dashboard.html

export const diagramData = {
    use_cases: `
flowchart LR
    subgraph System["🖥️ TAPAS System"]
         UC1["UCSE0000001: Create Lead"]
        UC2["UCSE0000002: Qualify Lead"]
        UC3["UCSE0000003: Convert Lead to Opportunity"]
        UC4["UCSE0000004: Manage Opportunity Stages"]
        UC5["UCSE0000005: Review Acceptance Check"]
        UC6["UCSE0000006: Create Project"]
        UC7["UCSE0000007: Assign Task"]
        UC8["UCSE0000008: Log Time Entry"]
        UC9["UCSE0000009: Submit Timesheet"]
        UC10["UCSE0000010: Approve Timesheet"]
        UC11["UCSE0000011: Export Payroll Data"]
        UC12["UCSE0000012: Monitor Acceptance Expiration"]
    end

    SalesRep["👤 Sales Rep"]
    PM["👤 Project Manager"]
    Emp["👤 Employee"]
    Compliance["👤 Compliance Officer"]
    Finance["👤 Finance"]
    Scheduler["🔗 Scheduler Service"]

    SalesRep --> UC1
    SalesRep --> UC2
    SalesRep --> UC3
    SalesRep --> UC4
    
    Compliance --> UC5
    
    PM --> UC6
    PM --> UC7
    PM --> UC10
    
    Emp --> UC8
    Emp --> UC9
    
    Finance --> UC11
    
    Scheduler --> UC12

    UC3 -.->|«include»| UC5
    UC4 -.->|«include»| UC5
    UC6 -.->|«extend»| UC4
    UC12 -.->|«extend»| UC6
`,
    activation: `
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#3b82f6', 'primaryTextColor': '#fff', 'primaryBorderColor': '#1e40af', 'lineColor': '#64748b', 'secondaryColor': '#f1f5f9', 'tertiaryColor': '#e2e8f0'}}}%%
flowchart TD
    subgraph ProjectActivation["🚀 Project Activation Workflow (PJM/PJP Approval)"]
        P1[Opportunity Won] --> P2[Project Created]
        P2 --> P3["Status: Pending Activation"]
        
        P3 --> P4[Assign PJM - Project Manager]
        P4 --> P5[Assign PJP - Project Partner]
        
        P5 --> P6{Both PJM & PJP assigned?}
        P6 -->|No| P6b[Cannot proceed - missing assignments]
        P6 -->|Yes| P7[Notify PJM & PJP]
        
        P7 --> P8[PJM Reviews Project Scope]
        P7 --> P9[PJP Reviews Project Scope]
        
        P8 -->|Approved| P8a[PJM Approval Recorded]
        P8 -->|Rejected| P8r[Return to Sales for Review]
        
        P9 -->|Approved| P9a[PJP Approval Recorded]
        P9 -->|Rejected| P9r[Return to Sales for Review]
        
        P8a --> P10{Both approved?}
        P9a --> P10
        
        P10 -->|"Only PJM approved"| WAIT1[⏳ Waiting for PJP]
        P10 -->|"Only PJP approved"| WAIT2[⏳ Waiting for PJM]
        P10 -->|"Both PJM & PJP approved"| P11[✅ Project Activated]
        
        P11 --> P12["Status: Active"]
        P12 --> P13[Tasks can be created]
        P12 --> P14[Timesheets can be logged]
    end

    style P11 fill:#22c55e,stroke:#15803d,color:#fff
    style P3 fill:#f59e0b,stroke:#d97706,color:#fff
    style WAIT1 fill:#64748b,stroke:#475569,color:#fff
    style WAIT2 fill:#64748b,stroke:#475569,color:#fff
`,
    acceptance: `
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#3b82f6', 'primaryTextColor': '#fff', 'primaryBorderColor': '#1e40af', 'lineColor': '#64748b', 'secondaryColor': '#f1f5f9', 'tertiaryColor': '#e2e8f0'}}}%%
flowchart TD
    subgraph AcceptanceApproval["🔐 Acceptance Approval Workflow"]
        A1[Opportunity Created] --> A2{Valid AAC exists?}
        A2 -->|No| A3[Trigger AAC]
        A2 -->|Yes - Check Regulation| A2b{Regulated Opportunity?}
        A2b -->|Yes & Only Non-Reg AAC| A3
        A2b -->|Yes & Reg AAC exists| A4[Reuse AAC]
        A2b -->|No| A4
        
        A3 --> A5[Compliance Officer performs KYC]
        A5 --> A5b{KYC Result}
        A5b -->|"Sanctions/Fugitive Match"| REJECT[❌ Automatic Rejection]
        A5b -->|"PEP Detected"| A5c[Elevate Risk Level]
        A5b -->|"Clear"| A6[Complete Questionnaire]
        A5c --> A6
        
        A6 --> A7[Calculate Risk Level]
        A7 --> A8[ACM Reviews & Approves]
        A8 -->|Rejected| A8r[Return for Review]
        A8 -->|Approved| A9[ACP Reviews & Approves]
        A9 -->|Rejected| A9r[Return for Review]
        A9 -->|Approved| A10[Risk Partner Final Review]
        A10 -->|Rejected| REJECT
        A10 -->|Approved| A11[Set Validity Period by Risk]
        
        A11 --> A12{Risk Level}
        A12 -->|Low| V24[24 months validity]
        A12 -->|Medium| V12[12 months validity]
        A12 -->|High| V6[6 months validity]
        A12 -->|Critical| V3[3 months validity]
        
        V24 --> APPROVED[✅ Acceptance Approved]
        V12 --> APPROVED
        V6 --> APPROVED
        V3 --> APPROVED
    end

    style APPROVED fill:#22c55e,stroke:#15803d,color:#fff
    style REJECT fill:#ef4444,stroke:#b91c1c,color:#fff
    style A7 fill:#f59e0b,stroke:#d97706,color:#fff
`,
    draft: `
stateDiagram-v2
    [*] --> Draft : Import / Quick Create
    Draft --> Draft : Update (Relaxed Validation)
    Draft --> Active : Promote (Strict Validation)
    Active --> [*]
    Active --> Draft : Demote (Admin only)
`
};

// Diagram titles for the modal
export const diagramTitles = {
    use_cases: 'Use Case Diagram',
    activation: 'Project Activation Workflow',
    acceptance: 'Acceptance Approval Workflow',
    draft: 'Draft Mode State Machine'
};
