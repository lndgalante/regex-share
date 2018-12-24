const isValidRegex = (pattern: string) => {
  try {
    ''.match(new RegExp(pattern))
    return true
  } catch (err) {
    return false
  }
}

export default isValidRegex
