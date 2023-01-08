import { Color, ConsoleBGColor, ConsoleFGColor, File, Rank } from "./constants"
import Piece from "./Piece"

class Square {
  color: Color
  piece?: Piece
  coordinates: [File, Rank]

  constructor(color: Color, coordinates: [File, Rank], piece?: Piece) {
    this.color = color
    this.coordinates = coordinates
    if (piece) {
      this.piece = piece
    }
  }

  get prettyString() {
    const fgColor =
      ConsoleFGColor[this.color === Color.White ? Color.Black : Color.White]
    const bgColor = ConsoleBGColor[this.color]
    return `\x1b[${fgColor}m\x1b[${bgColor}m ${
      this.piece ? this.piece.char : " "
    } \x1b[0m`
  }
}

export default Square
