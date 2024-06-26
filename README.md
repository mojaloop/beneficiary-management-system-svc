````markdown
# Beneficiary Management System

Welcome to the Beneficiary Management System! This application is designed to facilitate the registration process for beneficiaries.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- Make sure the beneficiary registration portal is running on port 3007. if not, clone it below and follow the instructions in the README.md to get it running.

```bash
git clone https://github.com/mojaloop/beneficiary-registration-portal.git
```
````

````

### Cloning the Repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/mojaloop/beneficiary-management-system-svc.git
```
````

### Frontend (React)

#### Installation

Navigate to the frontend directory:

```bash
cd beneficiary-management-system-svc
```

Install dependencies:

```bash
npm install
```

#### Building and Running

Build the app for production:

```bash
npm run build
```

Start the app:

```bash
npm run start
```

#### Running the project using docker-compose

Navigate to the root directory:

```bash
cd beneficiary-management-system-svc/
```

Start the projects in docker by running this command:

```bash
docker-compose build

docker-compose up
```

To tear it down, run:

```bash
docker-compose down

```

## Usage

- Frontend: Access the portal by navigating to http://localhost:3006 in your web browser.
