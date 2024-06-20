// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
for (let m = 0; m < scores.length; m++) {
    if (m === 0) {
        minScore = scores[m];
    } else if ( minScore > scores[m]) {
        minScore = scores[m]
    }
};

console.log(minScore);
