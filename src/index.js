const fs = require('fs');

const allSolvers = require('./allSolvers');
const Puzzle = require('./Puzzle');
let Strategy = require('./Strategy');

if (require.main === module) {
  console.error('Do not run index.js. Try running cli.js instead');
  process.exit(1);
}

module.exports = input => {
  let puzzleData
  if(typeof input === 'string') puzzleData = fs.readFileSync(input, 'utf-8');
  else puzzleData = input
  let puzzle = new Puzzle(puzzleData);
  let strategy = new Strategy(allSolvers);
  strategy.solve(puzzle);
  let status = 0;
  if (puzzle.isFinished) {
    status = puzzle.isSolved ? 1 : -1;
  }
  return {status, puzzle};
};
