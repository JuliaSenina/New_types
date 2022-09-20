import Buyable from "./buyable";

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly country: string,
    readonly price: number,
    readonly years: number,
    readonly slogan: string,
    readonly genre: string[],
    readonly time: string | number,
  ) {}
}