export class Coordinate {
    public row: number;
    public col: number;

    constructor(cordinates ={ row:0,col:0}){
        this.row = cordinates.row;
        this.col = cordinates.col;
    }

    public equals(other: Coordinate): boolean {
        return (this.row == other.row) && (this.col == other.col);
    }

    public getBoardCoordinateRepresentation() {
        const rowLabel = 8 - this.row;
        const colLabel =  String.fromCharCode('a'.charCodeAt(0) + this.col);
        return `(${rowLabel + ',' + colLabel})`;
    }

    public getCordinate(): string {
        return `(${this.row},${this.col})`;
    }
}