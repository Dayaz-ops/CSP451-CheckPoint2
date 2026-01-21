## Conflict Demo

This line was added in main branch.
This line was added in feature/merge-conflict branch.


# CSP451 Web Starter — Week 2 Checkpoint 2

This repository is a **starter template** for practicing:
- Git branching strategies (GitHub Flow / Git Flow-lite)
- Pull Requests + review workflow
- Intentional merge conflicts + manual resolution
- Clean history using **Squash and merge**

## Quick Start

```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Structure

- `src/app.js` — Express server entry
- `src/routes/` — route modules
- `src/controllers/` — controller functions
- `src/services/` — reusable services (auth helpers, etc.)
- `src/db/` — database module (starts as a stub)
- `public/` — static UI (includes `/login`)
- `docs/` — reports + screenshots checklist

## Required Branches
Create these branches exactly:
- `feature/user-authentication`
- `feature/database-connection`
- `feature/api-endpoints`

## Suggested Conflict Targets
To intentionally create a merge conflict, edit the same lines in one of:
- `README.md`
- `src/app.js`
- `src/routes/api.js`

## How to Run Tests (lightweight)
```bash
npm test
npm run lint
```
<<<<<<< HEAD
<<<<<<< HEAD

## Feature: API Endpoints (feature/api-endpoints)

Base path:
- `/api`

Endpoints:
- `GET /api/health` → returns `{ status, timestamp }`
- `GET /api/users` → returns a list of users (stub data)
- `POST /api/users` → creates a user (simulated)

POST body example:
```json
{
  "name": "Alice",
  "email": "alice@example.com"
}



## Feature: API Endpoints (feature/api-endpoints)

Base path:
- `/api`

Endpoints:
- `GET /api/health` → returns `{ status, timestamp }`
- `GET /api/users` → returns a list of users (stub data)
- `POST /api/users` → creates a user (simulated)

POST body example:
```json
{
  "name": "Alice",
  "email": "alice@example.com"
}


Yes — it’s **three backticks**.

### So the final lines you should type while you see `>` are:
```text

HEAD
CONFLICT_LINE: version from conflict/one
CONFLICT_LINE: version from conflict/two
conflict/two
=======
=======
## User Authentication Feature
- Login route is handled in `src/routes/views.js`
- Basic validation checks are implemented for email and password
- This work was completed in the `feature/user-authentication` branch
## Database Connection Feature
- Database logic is implemented in `src/db/index.js`
- Uses a stub connection for CheckPoint2
- Added helper function to check database status
- Implemented using a feature branch workflow
- >>>>>>> parent of b22ba63 (fix(merge): resolve conflict in README.md)
>>>>>>> 1107ff4e3692300cc6725600a86382ec78072f7c
