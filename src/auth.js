/**
 * Validates login input before submission.
 * This helps prevent empty requests and improves user experience.
 */
export function validateLogin(username, password) {
  if (!username || !password) {
    return {
      success: false,
      message: "Username and password are required"
    };
  }

  return {
    success: true,
    message: "Login data is valid"
  };
}
