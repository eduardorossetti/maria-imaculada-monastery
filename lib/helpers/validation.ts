function isRepeatingChars(str: string): boolean {
  return str.split("").every((char) => char === str.charAt(0))
}

function getValidationDigit(
  digits: number[],
  multiplier: number,
  type: "cpf" | "cnpj" = "cpf"
): number {
  let mult = multiplier
  let result: number

  if (type === "cpf") {
    result = digits.reduce((acc, num) => {
      const calc = acc + num * mult
      mult -= 1
      return calc
    }, 0)
  } else {
    result = digits.reduce((acc, num) => {
      mult = mult === 1 ? 9 : mult
      const calc = acc + num * mult
      mult -= 1
      return calc
    }, 0)
  }

  const num = result % 11
  return num > 1 ? 11 - num : 0
}

export function isCpf(cpfTxt: string): boolean {
  const cpf = cpfTxt.replace(/\D/g, "")

  if (cpf.length !== 11 || isRepeatingChars(cpf)) {
    return false
  }

  const digits = cpf.substring(0, 9).split("").map(Number)
  const checker = cpf.substring(9)
  const firstDigit = getValidationDigit(digits, 10)
  const secondDigit = getValidationDigit([...digits, firstDigit], 11)

  return checker === `${firstDigit}${secondDigit}`
}

export function isCnpj(cnpjTxt: string): boolean {
  const cnpj = cnpjTxt.replace(/\D/g, "")

  if (cnpj.length !== 14 || isRepeatingChars(cnpj)) {
    return false
  }

  const digits = cnpj.substring(0, 12).split("").map(Number)
  const checker = cnpj.substring(12)
  const firstDigit = getValidationDigit(digits, 5, "cnpj")
  const secondDigit = getValidationDigit([...digits, firstDigit], 6, "cnpj")

  return checker === `${firstDigit}${secondDigit}`
}

export function isEmail(emailTxt: string): boolean {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    emailTxt
  )
}

export function isOnlyNumbers(value: string): boolean {
  return /^\d+$/.test(value)
}
