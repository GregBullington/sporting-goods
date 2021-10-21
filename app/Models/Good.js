import { generateId } from "../Utils/generateId.js"





export class Good {

  constructor(data) {
    this.id = generateId()
    this.prodName = data.prodName
    this.price = data.price
    this.imgUrl = data.imgUrl

  }

  get Template() {
    return `
    <div class="col-md-4">
    <div class="p-2 elevation-3 card bg-secondary my-3 mx-3" style="width: 18rem;">
    <div class="text-center">
      <img src="${this.imgUrl}" class="card-img-top img-contain bg-grey" alt="${this.prodName}">
      </div>
      <div class="my-4 mx-3">
        <h5 class="card-title">${this.prodName}</h5>
        <p><b>Price: $${this.price}</b></p>
        </div>
        <div class="d-flex align-items-end justify-content-end">
        <button class=" btn btn-dark btn-round" title="add to cart mdi mdi-cart">Add to cart </button>
        </div>
    </div>
  </div>`
  }

}