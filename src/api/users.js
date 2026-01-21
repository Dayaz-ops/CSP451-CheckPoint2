// src/api/users.js

/**
 * Mock API layer used to represent how user-related
 * endpoints would be structured in an application.
 * No real HTTP requests are made in this project.
 */

export function fetchUsers() {
  return [
    { userId: 1, username: "sampleUser1" },
    { userId: 2, username: "sampleUser2" }
  ];
}

export function addUser(newUser) {
  return {
    userId: Date.now(),
    ...newUser,
    createdAt: new Date().toISOString()
  };
}
~

