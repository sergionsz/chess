import {
  Color,
  defaultBoardFEN,
  File,
  files,
  Rank,
  reverseRanks,
} from "./constants"
import Piece from "./Piece"
import Square from "./Square"
import { getTypeColorFromFENChar, isNumber } from "./utils"

class Board {
  squares: Record<Rank, Record<File, Square>>

  constructor(fen: string = defaultBoardFEN) {
    let charCounter = 0
    let currentBgColor = Color.White
    let currentStep: number = -1

    this.squares = reverseRanks.reduce((rankFiles, rank) => {
      rankFiles[rank] = files.reduce((fileSquares, file) => {
        let currentFENChar = fen[charCounter]
        if (currentStep === 0) {
          currentStep = -1
          charCounter += 1
          currentFENChar = fen[charCounter]
        }
        if (currentFENChar === "/") {
          charCounter += 1
          currentFENChar = fen[charCounter]
          currentBgColor =
            currentBgColor === Color.White ? Color.Black : Color.White
        }

        let square: Square
        if (currentStep < 1 && isNumber(currentFENChar)) {
          currentStep = Number(currentFENChar)
        }
        if (currentStep > 0) {
          square = new Square(currentBgColor, [file, rank])
          currentStep -= 1
        } else {
          try {
            const { type, color } = getTypeColorFromFENChar(currentFENChar)
            const piece = new Piece(type, color)
            square = new Square(currentBgColor, [file, rank], piece)
            charCounter += 1
          } catch (error) {
            const message = error instanceof Error ? error.message : ""
            throw new Error(`Error parsing FEN: ${message}`)
          }
        }
        currentBgColor =
          currentBgColor === Color.White ? Color.Black : Color.White

        fileSquares[file] = square

        return fileSquares
      }, {} as Record<File, Square>)

      return rankFiles
    }, {} as Record<Rank, Record<File, Square>>)
  }

  get prettyString() {
    let str = ""
    reverseRanks.forEach((rank) => {
      str = `${str}${rank} `
      files.forEach((file) => {
        str = `${str}${this.squares[rank][file].prettyString}`
      })
      str = `${str}\n`
    })
    str = `${str}   ${files.join("  ")}`

    return str
  }
}

export default Board
