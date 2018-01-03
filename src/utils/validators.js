import moment from 'moment';

export const required = value => (value ? undefined : 'Required');

export const nonEmpty = value => (
  value.trim() !== '' ? undefined : 'Cannot be empty'
);

// date is today or earlier
export const validDate = (value) => {
  const today = moment(new Date()).toISOString();
  const minusHundredYears = moment(today).subtract(100, 'years');

  if (!moment(value).isBetween(minusHundredYears, today, null, '[]')) {
    return 'Date must be today or earlier.';
  }

  return undefined;
};

export const isTrimmed = value => (
  value.trim() === value ? undefined : 'Cannot start or end with whitespace'
);

export const length = length => (value) => {
  if (length.min && value.length < length.min) {
    return `Must be at least ${length.min} characters long`;
  }
  if (length.max && value.length > length.max) {
    return `Must be at most ${length.max} characters long`;
  }
  return undefined;
};

export const matches = field => (value, allValues) => (
  field in allValues && value.trim() === allValues[field].trim()
    ? undefined
    : 'Does not match'
);
