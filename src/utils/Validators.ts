// checks if a string is of minimum length 12
const isLengthValid = (text: string, number: number): boolean =>
  text?.length >= number;

// checks if a string has both upper or lower case letters
const isCaseValid = (text: string): boolean => {
  const regex = /(?=[A-Z\s]*[a-z])(?=[a-z\s]*[A-Z])[\sA-Za-z]*(?:\(ecg\))?/;
  return regex.test(text);
};

// check if a string contains a number
const isNumberValid = (text: string): boolean => {
  const regex = /\d/;
  return regex.test(text);
};

// Checks if a string has a special character
const isSpecialCharValid = (text: string): boolean => {
  const regex = /[^&\\;<>]*[^a-zA-Z0-9&\\;<>][^&\\;<>]*/;
  return regex.test(text);
};

// Checks if a string is a valid email
const isValidEmail = (text: string): boolean => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/;
  return regex.test(text);
};

// Checks if a string has only numbers
const isNumbersOnly = (text: string): boolean => {
  const regex = /^\d+$/;
  return regex.test(text);
};

// Checks if a string has only numbers
const isCurrency = (text: string): boolean => {
  const regex = /^\d+(.\d{1,2})?$/;
  return regex.test(text);
};

// Checks if a string has only numbers
const isCurrencyWithSign = (text: string): boolean => {
  const regex = /^\d+(.\d{1,2})?(.*)$/;
  return regex.test(text);
};

// Checks if a string is a valid German tax id
const isVATValid = (text: string): boolean => {
  const regex = /^(DE)?[0-9]{9}$/;
  return regex.test(text);
};

const isPostalCode = (text: string): boolean => {
  const regex = /^\d{5}$/;
  return regex.test(text);
};

const isIBANValid = (text: string): boolean => {
  const regex =
    /^(?:(?:IT|SM)\d{2}[A-Z]\d{22}|CY\d{2}[A-Z]\d{23}|NL\d{2}[A-Z]{4}\d{10}|LV\d{2}[A-Z]{4}\d{13}|(?:BG|BH|GB|IE)\d{2}[A-Z]{4}\d{14}|GI\d{2}[A-Z]{4}\d{15}|RO\d{2}[A-Z]{4}\d{16}|KW\d{2}[A-Z]{4}\d{22}|MT\d{2}[A-Z]{4}\d{23}|NO\d{13}|(?:DK|FI|GL|FO)\d{16}|MK\d{17}|(?:AT|EE|KZ|LU|XK)\d{18}|(?:BA|HR|LI|CH|CR)\d{19}|(?:GE|DE|LT|ME|RS)\d{20}|IL\d{21}|(?:AD|CZ|ES|MD|SA)\d{22}|PT\d{23}|(?:BE|IS)\d{24}|(?:FR|MR|MC)\d{25}|(?:AL|DO|LB|PL)\d{26}|(?:AZ|HU)\d{27}|(?:GR|MU)\d{28})$/;
  return regex.test(text?.split(' ').join(''));
};

const isPrice = (text: string): boolean => {
  const regex = /^([0-9]{0,2}((.)[0-9]{0,2}))$/;
  return regex.test(text);
};

export {
  isLengthValid,
  isCaseValid,
  isNumberValid,
  isSpecialCharValid,
  isValidEmail,
  isNumbersOnly,
  isCurrency,
  isVATValid,
  isPostalCode,
  isCurrencyWithSign,
  isIBANValid,
  isPrice,
};
