export enum Color {
  White = "white",
  Black = "black",
}

export const ConsoleBGColor = {
  [Color.White]: "107",
  [Color.Black]: "40",
}

export const ConsoleFGColor = {
  [Color.White]: "97",
  [Color.Black]: "30",
}

export enum PieceType {
  Rook = "♜",
  Knight = "♞",
  Bishop = "♝",
  Queen = "♛",
  King = "♚",
  Pawn = "♟︎",
}

export const PieceStr: Record<Color, Record<PieceType, string>> = {
  [Color.White]: {
    [PieceType.Rook]: "♖",
    [PieceType.Knight]: "♘",
    [PieceType.Bishop]: "♗",
    [PieceType.Queen]: "♕",
    [PieceType.King]: "♔",
    [PieceType.Pawn]: "♙",
  },
  [Color.Black]: {
    [PieceType.Rook]: "♜",
    [PieceType.Knight]: "♞",
    [PieceType.Bishop]: "♝",
    [PieceType.Queen]: "♛",
    [PieceType.King]: "♚",
    [PieceType.Pawn]: "♟︎",
  },
}

export enum File {
  a = "a",
  b = "b",
  c = "c",
  d = "d",
  e = "e",
  f = "f",
  g = "g",
  h = "h",
}

export const files: File[] = [
  File.a,
  File.b,
  File.c,
  File.d,
  File.e,
  File.f,
  File.g,
  File.h,
]

export enum Rank {
  _1 = 1,
  _2 = 2,
  _3 = 3,
  _4 = 4,
  _5 = 5,
  _6 = 6,
  _7 = 7,
  _8 = 8,
}

export const ranks: Rank[] = [1, 2, 3, 4, 5, 6, 7, 8]
export const reverseRanks = ranks.reverse()

export const defaultBoardFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"

export const fenChars: Record<PieceType, string> = {
  [PieceType.Rook]: "r",
  [PieceType.Knight]: "n",
  [PieceType.Bishop]: "b",
  [PieceType.Queen]: "q",
  [PieceType.King]: "k",
  [PieceType.Pawn]: "p",
}

export const fenPiecetypes: Record<string, PieceType> = Object.keys(
  fenChars
).reduce(
  (swapped, pieceType) => ({
    ...swapped,
    [fenChars[pieceType as PieceType]]: pieceType,
  }),
  {}
)
