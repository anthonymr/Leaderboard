export default class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  draw = () => {
    const parentUIElement = document.createElement('li');
    const nameUIElement = document.createElement('div');
    const scoreUIElement = document.createElement('div');

    nameUIElement.innerHTML = this.name;
    scoreUIElement.innerHTML = this.score;

    parentUIElement.appendChild(nameUIElement);
    parentUIElement.appendChild(scoreUIElement);

    parentUIElement.classList.add('new-score');

    return parentUIElement;
  }
}