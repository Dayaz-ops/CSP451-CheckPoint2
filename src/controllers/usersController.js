/**
 * Users controller (feature/api-endpoints)
 * WHY: keeps route files small and readable and makes testing easier.
 */

function getUsers(req, res) {
  // Starter stub data (no database required for this assignment)
  const users = [
    { id: 1, name: "Test User", email: "test@example.com" },
    { id: 2, name: "Rajvir", email: "rajvir@example.com" },
  ];
  return res.json({ users });
}

function createUser(req, res) {
  const { name, email } = req.body || {};

  // Basic validation
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({ error: "Name is required (min 2 characters)." });
  }

  const emailOk =
    typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  if (!emailOk) {
    return res.status(400).json({ error: "Valid email is required." });
  }

  // Simulated created user record
  const created = {
    id: Date.now(),
    name: name.trim(),
    email: email.trim(),
  };

  return res.status(201).json({ user: created });
}

module.exports = { getUsers, createUser };
