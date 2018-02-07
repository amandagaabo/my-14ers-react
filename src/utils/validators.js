import moment from 'moment';

export const required = value => (
  value ? undefined : 'Required'
);

export const nonEmpty = value => (
  value.trim() !== '' ? undefined : 'Cannot be empty'
);

// check for valid email
export const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
);

// no whitespace in passwords
export const isTrimmed = value => (
  value.trim() === value ? undefined : 'Cannot start or end with whitespace'
);

// min password length
const minLength = min => value => (
  value && value < min ? `Must be at least ${min} characters long` : undefined
);
export const minLength10 = minLength(10);

// max password length
const maxLength = max => value => (
  value && value.length > max ? `Must be ${max} characters or less` : undefined
);
export const maxLength72 = maxLength(72);
export const maxLength250 = maxLength(10);

// password and password confrim must match
export const matches = field => (value, allValues) => (
  field in allValues && value.trim() === allValues[field].trim()
    ? undefined
    : 'Does not match'
);

// date is today or earlier for add peak form
export const validDate = (value) => {
  const today = moment(new Date()).toISOString();
  const minusHundredYears = moment(today).subtract(100, 'years');

  if (!moment(value).isBetween(minusHundredYears, today, null, '[]')) {
    return 'Date must be today or earlier.';
  }

  return undefined;
};

// max textarea length
const maxChar = max => value => (
  value && value.length === max ? `Cannot be more than ${max} characters` : undefined
);

export const maxChar250 = maxChar(250);
