const checkKeyCode = (code) => {
  const findKey = unnecessaryCodes.find((item) => item === code)
  return findKey ? false : true
}

const unnecessaryCodes = [
  112,
  113,
  114,
  115,
  116,
  117,
  118,
  119,
  120,
  121,
  122,
  123,
  27,
  8,
  9,
  20,
  16,
  17,
  91,
  93,
  18,
  13,
  93,
  44,
  145,
  19,
  45,
  36,
  33,
  46,
  35,
  34,
  144,
  37,
  38,
  40,
  39,
]

export default checkKeyCode
