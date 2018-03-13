export class Engine {
  public startTime: number
  constructor() {
    this.startTime = Date.now()
  }
}

exports.Engine = Engine
