import Leaderboard from './leaderboard.js';
import './style.css';

const leaderboard = new Leaderboard();

const refreshAllScoresBtn = document.getElementById('refresh-all-scores');
refreshAllScoresBtn.addEventListener('click', () => leaderboard.refreshAllScores());

const newScoreName = document.getElementById('new-score-name');
const newScoreScore = document.getElementById('new-score-score');
const newScoreSubmitBtn = document.getElementById('new-score-submit');

newScoreSubmitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  leaderboard.addNewScoreToList(newScoreName.value, newScoreScore.value);
});