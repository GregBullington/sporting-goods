import { ValuesController } from "./Controllers/ValuesController.js";
import { GoodsController } from "./Controllers/GoodsController.js"
class App {
  // valuesController = new ValuesController();
  goodsController = new GoodsController()
}

window["app"] = new App();
