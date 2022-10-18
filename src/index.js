const allSolvers = require('./allSolvers');
const Puzzle = require('./Puzzle');
let Strategy = require('./Strategy');

module.exports = puzzleData => {
  let puzzle = new Puzzle(puzzleData);
  let strategy = new Strategy(allSolvers);
  strategy.solve(puzzle);
  let status = 0;
  if (puzzle.isFinished) {
    status = puzzle.isSolved ? 1 : -1;
  }
  return {status, puzzle};
};
