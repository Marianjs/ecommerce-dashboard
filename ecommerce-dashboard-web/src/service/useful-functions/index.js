/**
 * Function used to validate an email from an input filed
 * Receives the email as parameter
 */
export const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);