import { ProxyState } from "../AppState.js";
import { goodsService } from "../Services/GoodsService.js";


function _drawGoods() {
  const goods = ProxyState.goods
  let template = ''
  goods.forEach(good => template += good.Template)
  document.getElementById('goods').innerHTML = template
  console.log('you have drawn');
}


console.log('controller is online');

export class GoodsController {


  constructor() {
    ProxyState.on('goods', _drawGoods)
    _drawGoods()

  }


}