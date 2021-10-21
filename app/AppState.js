import { Good } from "./Models/Good.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  goods = [
    new Good({ prodName: 'Football', price: 30, imgUrl: 'https://pngimg.com/uploads/american_football/american_football_PNG38.png' }),
    new Good({ prodName: 'FishingPole', price: 75, imgUrl: 'https://purepng.com/public/uploads/large/purepng.com-fishing-rodfishing-polefishingpolefishing-rodrod-1701528136466molnp.png' }),
    new Good({ prodName: 'FishingPole', price: 75, imgUrl: 'https://purepng.com/public/uploads/large/purepng.com-fishing-rodfishing-polefishingpolefishing-rodrod-1701528136466molnp.png' })

  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
