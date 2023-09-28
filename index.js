// code your solution here
function superbowlWin(record) {
  // Iterate through each game in the record
  for (const game of record) {
    if (game.team === 'Denver Broncos' && game.result === 'W') {
      // If the Denver Broncos won ('W'), return the year 2015
      return 2015;
    }
  }

  // If no winning Super Bowl was found for the Denver Broncos, return undefined
  return undefined;
}