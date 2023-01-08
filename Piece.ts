import { Color, PieceStr, PieceType } from "./constants"

class Piece {
  type: PieceType
  color: Color

  constructor(type: PieceType, color: Color) {
    this.type = type
    this.color = color
  }

  get char() {
    return PieceStr[this.color][this.type]
  }
}

export default Piece
