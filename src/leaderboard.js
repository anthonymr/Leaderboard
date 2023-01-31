import Score from "./score.js";

export default class Leaderboard {
  constructor() {
    this.scores = [];
    this.apiID = 'YSmKf49VhTV7O6dOzK8F';
    this.baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
  }
}