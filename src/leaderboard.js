import Score from "./score.js";

export default class Leaderboard {
  constructor() {
    this.scores = [];
    this.apiID = 'YSmKf49VhTV7O6dOzK8F';
    this.baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
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

  async refreshAllScores() {
    const newScores = await this.getAllScores();
    this.scores = newScores;
  }

  async addNewScoreToList(name, score) {
    const response = await this.setNewScore(name, score);

    if(response.result === 'Leaderboard score created correctly.'){
      this.refreshAllScores();
    }
  }
}