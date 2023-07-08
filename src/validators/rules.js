const requiredValue = "REQUIRED_VALUE";
const minValue = "MIN_VAlUE";
const maxValue = "MAX_VAlUE";
const emailValue = "EMAIL_VALUE";

export const requiredValidator = () => {
  value: requiredValue;
};

export const minValidator = (min) => {
  value: minValue, min;
};

export const maxValidator = (max) => {
  value: maxValue, max;
};

export const emailValidator = () => {
  value: emailValue;
};
