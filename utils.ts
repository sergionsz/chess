import { Color, fenPiecetypes } from "./constants"

export const isNumber = (char: string) => {
  return !Number.isNaN(Number(char))
}

export const getTypeColorFromFENChar = (fenChar: string) => {
  const lowerCaseChar = fenChar.toLowerCase()
  const color = lowerCaseChar === fenChar ? Color.Black : Color.White
  const type = fenPiecetypes[lowerCaseChar]
  if (color && type) {
    return { type, color }
  } else {
    throw new Error(`Wrong FEN character ${fenChar}`)
  }
}
