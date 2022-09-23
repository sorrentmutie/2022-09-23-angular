export interface Product {
  id: number,
  name: string,
  available: boolean,
  date: Date,
  price: number
}


export class ProductClass {
  constructor(id:number, name: string, available:boolean, date: Date){
  }
}
