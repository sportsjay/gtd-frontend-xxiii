class validation {
  // usernames
  username(input) {
    try {
      if (input.length === 0) {
        throw new Error("Input must not be empty!");
      }
      return {
        message: "Input valid",
      };
    } catch (error) {
      console.log(error);
      return {
        message: "Input Error",
        error: error,
      };
    }
  }
  // passwords
  password(input) {
    try {
      if (input.length === 0) {
        throw new Error("Input must not be empty!");
      }
      return {
        message: "Input valid",
      };
    } catch (error) {
      return {
        message: "Input Error",
        error: error,
      };
    }
  }
}

export const validator = new validation();
