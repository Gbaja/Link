export const checkPassword = string => {
  let regex = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$");
  return regex.test(string);
};

export const checkEmail = string => {
  const regex = new RegExp("[A-Za-z0-9._-]+@[A-Za-z0-9._-]+.[A-Za-z]");
  return regex.test(string);
};

export const textareaLineBreaks = string => {
  return string.replace(/\r?\n/g, "<br />");
};

export const textareaWordCountCheck = string => {
  string = string || "";
  const wordCount = string.trim().split(/\s+/).length;
  console.log("WORD COUNT: ", wordCount);
  return wordCount > 2
    ? "The word count in a text area must not be greater that 250."
    : "";
};
