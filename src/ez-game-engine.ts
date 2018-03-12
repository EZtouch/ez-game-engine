// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { Engine } from './engine'
export default class EZGameEngine {
  constructor() {
    const engine = new Engine()
    console.log('It works!')
    console.log(engine.startTime)
  }
}
