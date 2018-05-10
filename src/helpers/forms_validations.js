export const checkPassword = string => {
  let regex = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$");
  return regex.test(string);
};

export const checkEmail = string => {
  const regex = new RegExp("/[A-Za-z0-9._-]+@[A-Za-z0-9._-]+.[A-Za-z]");
  return regex.test(string);
};

export const textAreaLineBreaks = string => {
  return string.replace(/\r?\n/g, "<br />");
};
