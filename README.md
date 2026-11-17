# Salesforce Leave Management System

A beginner-friendly Leave Management System built using Salesforce, Apex, and Lightning Web Components (LWC). This project allows employees to submit leave requests and view submitted applications.

## Project Overview

The Leave Management System is a Salesforce mini-project developed to practice Salesforce administration and development concepts, including custom objects, validation rules, Apex programming, SOQL, and Lightning Web Components.

## Features

- **Leave Application Form:** Employees can submit leave requests through a custom LWC form.
- **Leave Request List:** Displays submitted leave requests in a table.
- **Apex Controller:** Handles submitting and retrieving leave request records.
- **Form Validation:** Ensures required fields are completed.
- **Date Validation:** Prevents an end date from being earlier than the start date.
- **Success Notification:** Displays a confirmation message after successful submission.
- **Salesforce Record Storage:** Stores leave request information in a custom Salesforce object.

## Technologies Used

- Salesforce Platform
- Apex
- Lightning Web Components (LWC)
- JavaScript
- HTML
- SOQL
- Visual Studio Code
- Salesforce CLI
- Git & GitHub

## Salesforce Components

### Custom Object

**Object Name:** Leave Request (`Leave_Request__c`)

Fields include:

| Field | API Name | Type |
|---|---|---|
| Employee Name | `Employee_Name__c` | Text |
| Employee Email | `Employee_Email__c` | Email |
| Start Date | `Start_Date__c` | Date |
| End Date | `End_Date__c` | Date |
| Leave Type | `Leave_Type__c` | Picklist |
| Reason | `Reason__c` | Text Area |
| Status | `Status__c` | Picklist |

### Apex Class

**Class Name:** `LeaveRequestController`

Methods:

- `getLeaveRequests()` – Retrieves leave request records using SOQL.
- `submitLeaveRequest()` – Creates and saves a new leave request.

### Lightning Web Components

**1. leaveRequestForm**
- Collects employee information.
- Accepts leave details.
- Validates required fields.
- Calls Apex to submit the leave request.
- Displays a success or error notification.

**2. leaveRequestList**
- Retrieves leave requests from Apex.
- Displays request number, employee name, leave type, start date, end date, and status in a data table.

## Project Structure

```text
LeaveManagementSystem/
│
├── force-app/
│   └── main/
│       └── default/
│           ├── classes/
│           │   └── LeaveRequestController.cls
│           │
│           └── lwc/
│               ├── leaveRequestForm/
│               │   ├── leaveRequestForm.html
│               │   ├── leaveRequestForm.js
│               │   └── leaveRequestForm.js-meta.xml
│               │
│               └── leaveRequestList/
│                   ├── leaveRequestList.html
│                   ├── leaveRequestList.js
│                   └── leaveRequestList.js-meta.xml
│
├── config/
├── scripts/
├── .gitignore
├── package.json
└── sfdx-project.json
```

## Setup and Installation

### Prerequisites

- Salesforce Developer Org
- Visual Studio Code
- Salesforce CLI
- Salesforce Extension Pack for VS Code
- Git

### Steps

**1. Clone the repository**

```bash
git clone https://github.com/Omer-Farooq978/Salesforce-Leave-Management-System.git
```

**2. Open the project**

```bash
cd Salesforce-Leave-Management-System
```

**3. Authorize your Salesforce org**

```bash
sf org login web --alias LeaveOrg --set-default
```

**4. Deploy the project**

```bash
sf project deploy start --source-dir force-app/main/default
```

**5. Configure Salesforce**

Create the Leave Request custom object, fields, and validation rule in your Salesforce org if they are not already configured.

Add the deployed LWC components to a Salesforce Lightning Home Page using Lightning App Builder.

## Learning Outcomes

Through this project, I gained practical experience in:

- Salesforce administration and configuration.
- Creating custom objects and fields.
- Writing Apex classes and SOQL queries.
- Developing Lightning Web Components.
- Connecting LWC with Apex methods.
- Working with Salesforce CLI and VS Code.
- Using Git and GitHub for version control.

## Author

**Omer Farooq**

GitHub: https://github.com/Omer-Farooq978

---

⭐ If you find this project useful, feel free to explore the repository!
