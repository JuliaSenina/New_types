import Buyalbe from "./buyable";

export default class MusicAlbom implements Buyalbe {
  constructor (
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number,
    readonly tracks: number,
  ) {}
}