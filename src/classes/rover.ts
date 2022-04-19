import { Direction } from "../enum/directions";
import { CardinalPoint } from "./cardinalPoint";
import Plateau from "./plateau";

export default class Rover {
  private _direction: Direction;
  private directionIndex : number;
  constructor(private x: number, private y: number, private d: string) {
    this._direction = CardinalPoint.parse(d);
    this.directionIndex = CardinalPoint.getIndex(this._direction);
    console.log(`\nRover landed at : ${this.getPostion()}`);
  }

  public navigate(navigationCmd: string) {
    console.log(`Navigation commands :  ${navigationCmd}`);
    navigationCmd.split("").forEach((cmd) => {
      this.updatePosition(cmd.toLocaleUpperCase());
    });
    console.log(`Rover at : ${this.getPostion()}\n\n`);
  }

  private updatePosition(cmd: string) {
    switch (cmd) {
      case "R":
        this.turnRight();
        break;
      case "L":
        this.turnLeft();
        break;
      case "M":
        this.move();
        break;
      default:
        console.log(`Invalid command ${cmd} skipping`);
        break;
    }
  }
  private turnRight() {
    this.directionIndex = ((this.directionIndex + 1) == 5 ) ? 1 : this.directionIndex + 1;
    this._direction = CardinalPoint.parse(this.directionIndex);
  }

  private turnLeft() {
    this.directionIndex = ((this.directionIndex - 1) == 0) ? 4 : this.directionIndex - 1;
    this._direction = CardinalPoint.parse(this.directionIndex);
  }

  private move() {
    // validate the next position before updating
    let fromPosition: string = this.getPostion();
    switch (this._direction) {
      case Direction.NORTH:
        this.y = Plateau.isValidY(this.y + 1) ? this.y + 1 : this.y;
        break;
      case Direction.EAST:
        this.x = Plateau.isValidX(this.x + 1) ? this.x + 1 : this.x;
        break;
      case Direction.SOUTH:
        this.y = Plateau.isValidY(this.y - 1) ? this.y - 1 : this.y;
        break;
      case Direction.WEST:
        this.x = Plateau.isValidX(this.x - 1) ? this.x - 1 : this.x;
        break;
    }
  }

  private getPostion() {
    return `${this.x} ${this.y} ${CardinalPoint.getStringKey(this._direction)}`;
  }
}
