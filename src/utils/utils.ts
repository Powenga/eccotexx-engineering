export const checkLocalStorage = () => {
  const data = 'test';
  try {
    localStorage.setItem(data, data);
    localStorage.removeItem(data);
    return true;
  } catch (errors) {
    return false;
  }
};
