export const regex = {
  mobile: /^(\+\d{1,3}[- ]?)?\d{10}$/,
}
export const inputRegexType = {
  TEXT_ONLY: 'TEXT_ONLY',
}

export const textInputRegex = {
  [inputRegexType.TEXT_ONLY]: /^[a-zA-Z]+/g,
}
