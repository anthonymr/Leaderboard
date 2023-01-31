import Score from "./score.js";

export default class Leaderboard {
  constructor() {
    this.scores = [];
    this.apiID = 'YSmKf49VhTV7O6dOzK8F';
    this.baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
  }

  getAllScores() {
    return fetch(`${this.baseURL}/games/${this.apiID}/scores/`)
    .then(response => response.json())
    .then(json => json);
  }

  async refreshAllScores() {
    const newScores = await this.getAllScores();
    this.scores = newScores;
  }
}