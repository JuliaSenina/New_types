import Buyalbe from "./buyable";

export default class Book implements Buyalbe {
  constructor (
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number,
    readonly pages: number,
  ) {}
}