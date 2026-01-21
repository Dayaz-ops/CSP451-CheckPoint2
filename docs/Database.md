# Database Connection (feature/database-connection)

This project includes a simple database connection module located at:

- `src/db/connection.js`

## Environment Variables

Set one of the following:

- `DB_URL` (preferred)
- `DATABASE_URL` (fallback)

Example:

- MongoDB: `mongodb://user:pass@localhost:27017/mydb`
- Postgres: `postgres://user:pass@localhost:5432/mydb`

## Behavior

- If `DB_URL` is missing, the app runs in **mock mode** and prints a warning.
- If `DB_URL` exists, the module performs a **simulated** async connection and logs a masked URL.

This design keeps routes/controllers clean and centralizes connection logic.
