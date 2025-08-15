// Key names for localStorage
const USER_KEY = "todo_user";
const TOKEN_KEY = "todo_token";

// Fake token generator
const generateToken = () => Math.random().toString(36).substr(2);

export const signup = (email, password) => {
  const user = { email, password };
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  return true;
};

export const login = (email, password) => {
  const savedUser = JSON.parse(localStorage.getItem(USER_KEY));
  if (!savedUser) return false;

  if (savedUser.email === email && savedUser.password === password) {
    const token = generateToken();
    localStorage.setItem(TOKEN_KEY, token);
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};
