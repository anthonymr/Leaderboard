import Score from "./score.js";

export default class Leaderboard {
  constructor(scoreListUI) {
    this.scores = [];
    this.apiID = 'YSmKf49VhTV7O6dOzK8F';
    this.baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
    this.scoreListUI = scoreListUI;

    this.refreshAllScores();
  }

  getAllScores() {
    return fetch(`${this.baseURL}/games/${this.apiID}/scores/`)
      .then(response => response.json());
  }

  setNewScore(name, score) {
    if (!name || !score) {
      return;
    }

    return fetch(`${this.baseURL}/games/${this.apiID}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score: score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  }

  populateScoresArray(scoreList) {
    this.scores = [];

    scoreList.forEach(score => {
      const newScore = new Score(score.user, score.score);
      this.scores.push(newScore);
    });
  }

  drawScoreListUI() {
    this.scoreListUI.innerHTML = '';

    this.scores.forEach((score) => {
      const scoreUI = score.draw();
      this.scoreListUI.appendChild(scoreUI);
    });
  }

  async refreshAllScores() {
    const scoreList = await this.getAllScores();
    this.populateScoresArray(scoreList.result);
    this.drawScoreListUI();
  }

  async addNewScoreToList(name, score) {
    const response = await this.setNewScore(name, score);

    if(!response) {
      return;
    }

    if (response.result === 'Leaderboard score created correctly.') {
      this.refreshAllScores();
    }
  }
}