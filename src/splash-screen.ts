export class SplashScreen {
  public loadingPercentage: number = 0
  public minimumLoadingTime: number = 0
  public currentlyLoadingMsg: string = 'Starting up the game.'
  constructor() {
    this.draw()
  }
  public draw(): void {
    console.log('Drawing splash screen.')
    const loadingScreen: HTMLDivElement = document.createElement('div')
    loadingScreen.style.width = '100px'
    loadingScreen.style.height = '100px'
    loadingScreen.style.background = 'red'
    loadingScreen.style.color = 'white'
    loadingScreen.innerHTML = 'Hello'
    document.body.appendChild(loadingScreen)
  }
  public dismiss(): void {
    console.log('Dismissing splash screen.')
  }
}

exports.SplashScreen = SplashScreen
