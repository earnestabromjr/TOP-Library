export function validateInput(input) {
  if (input.validity.valueMissing) {
    return "This field is required.";
  }
  if (input.validity.typeMismatch) {
    return "Please enter a valid value.";
  }
  if (input.validity.patternMismatch) {
    return "The value does not match the required pattern.";
  }
  if (input.validity.tooShort) {
    return `The value is too short. Minimum length is ${input.minLength}.`;
  }
  if (input.validity.tooLong) {
    return `The value is too long. Maximum length is ${input.maxLength}.`;
  }
  if (input.validity.rangeUnderflow) {
    return `The value is too low. Minimum value is ${input.min}.`;
  }
  if (input.validity.rangeOverflow) {
    return `The value is too high. Maximum value is ${input.max}.`;
  }
  if (input.validity.stepMismatch) {
    return "The value is not in the correct step.";
  }
  return "";
}

export function validateInputCase(input) {
  switch (input.validity) {
    case "valueMissing":
      return "This field is required.";
    case "typeMismatch":
      return "Please enter a valid value.";
    case "patternMismatch":
      return "The value does not match the required pattern.";
    case "tooShort":
      return `The value is too short. Minimum length is ${input.minLength}.`;
    case "tooLong":
      return `The value is too long. Maximum length is ${input.maxLength}.`;
    case "rangeUnderflow":
      return `The value is too low. Minimum value is ${input.min}.`;
    case "rangeOverflow":
      return `The value is too high. Maximum value is ${input.max}.`;
    case "stepMismatch":
      return "The value is not in the correct step.";
    default:
      return "";
  }
}

