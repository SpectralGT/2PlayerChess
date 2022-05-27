export default class Piece {
    player:number;
    backgroundImage:string;
    isSelected = false;
    constructor(player:number, imageURL:string){
      this.player = player;
      this.backgroundImage = `url(${imageURL})`;
    }
  }