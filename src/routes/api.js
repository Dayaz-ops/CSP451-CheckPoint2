const express = require("express");
const router = express.Router();

const { getUsers, createUser } = require("../controllers/usersController");

/**
 * API Routes (feature/api-endpoints)
 */

// GET /api/health
router.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// GET /api/users
router.get("/users", getUsers);

// POST /api/users
router.post("/users", createUser);

module.exports = { router };
test
