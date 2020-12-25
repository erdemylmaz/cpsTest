class Game {
  clickCount = 0;

  lastClickTs = 0;
  lastClickRate = 0;
  lastClickCount = 0;

  onClick = () => {
    this.clickCount++;
  };

  update = () => {
    if (Date.now() - this.lastClickTs >= 1000) {
      this.lastClickTs = Date.now();
      this.lastClickRate = Math.floor(this.clickCount - this.lastClickCount);
      this.lastClickCount = this.clickCount;
    }
  };
}

export default Game;
