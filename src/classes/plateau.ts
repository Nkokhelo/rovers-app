export default class Plateau {
  private static _initX = 0;
  private static _initY = 0;
  private static _x: number;
  private static _y: number;
  
  constructor(x: number, y: number) {
    Plateau._x = x;
    Plateau._y = y;
    console.log(`Plateau discovered : {${Plateau._x} , ${Plateau._y}}`);
  }

  public static isValidPosition(roverX:number, roverY: number) : boolean {
    return this.isValidX(roverX) && this.isValidY(roverY);
  }

  public static isValidY(roverY: number) :boolean {
    const valid = ((roverY >= this._initY) && (roverY <= this._y));
    (!valid) && console.log(`Invalid y position at ${roverY} skipping`);
    return valid;
  }

  public static isValidX(roverX:number) :boolean {
    const valid = ((roverX >= this._initX) && (roverX <= this._x));
    (!valid) && console.log(`Invalid x position at ${roverX} skipping`);
    return valid;
  }
}