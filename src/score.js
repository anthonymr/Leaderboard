export default class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  draw() {
    const parentUIElement = document.createElement('li');
    const nameUIElement = document.createElement('span');
    const scoreUIElement = document.createElement('span');

    nameUIElement.innerHTML = this.name;
    scoreUIElement.innerHTML = this.score;

    parentUIElement.appendChild(nameUIElement);
    parentUIElement.appendChild(scoreUIElement);

    return parentUIElement;
  }
}