const isValidRegex = (text: string) => {
  let isValid = true

  try {
    new RegExp(text)
  } catch (error) {
    isValid = false
  }

  return isValid
}

export default isValidRegex
