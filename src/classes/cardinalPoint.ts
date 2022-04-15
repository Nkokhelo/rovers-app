import { Direction } from "../enum/directions";

/**
 * This class is responsible of getting and setting direction of a rover using both char and number
 * 
 */
export class CardinalPoint {
  private static directionsMap =  new Map<string, Direction>([
    [ 'N', Direction.NORTH ],
    [ 'E', Direction.EAST ],
    [ 'S', Direction.SOUTH ],
    [ 'W', Direction.WEST ]
  ]);

  private static directionsMapNum =  new Map<number, Direction>([
    [  1 , Direction.NORTH ],
    [  2 , Direction.EAST ],
    [  3 , Direction.SOUTH ],
    [  4 , Direction.WEST ]
  ]);

  public static getIndex(value: Direction): number {
    const map = CardinalPoint.directionsMapNum;
    return [...map.entries()].find(e => e[1] == value)[0];
  }

  public static getStringKey(value: Direction): string {
    const map = CardinalPoint.directionsMap;
    return [...map.entries()].find(e => e[1] == value)[0];
  }
  public static parse(key: string| number): Direction {
    return typeof key === 'number' ? CardinalPoint.directionsMapNum.get(key) : CardinalPoint.directionsMap.get(key);
  }

  public static get EAST() {
    return Direction.EAST;
  }

  public static get WEST() {
    return Direction.WEST;
  }

  public static get SOUTH() {
    return Direction.SOUTH;
  }

  public static get NORTH() {
    return Direction.NORTH;
  }

}