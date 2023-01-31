import Leaderboard from './leaderboard.js';
import './style.css';

const refreshAllScoresBtn = document.getElementById('refresh-all-scores');
const newScoreName = document.getElementById('new-score-name');
const newScoreScore = document.getElementById('new-score-score');
const newScoreSubmitBtn = document.getElementById('new-score-submit');
const scoreList = document.getElementById('score-list');

const leaderboard = new Leaderboard(scoreList);

refreshAllScoresBtn.addEventListener('click', () => leaderboard.refreshAllScores());

newScoreSubmitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  leaderboard.addNewScoreToList(newScoreName.value, newScoreScore.value);
  newScoreName.value = '';
  newScoreScore.value = '';
});