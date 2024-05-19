const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length;

let myWatchedSeriesSentence = "black mirror, money heist, and the big bang theory";

console.log("I watch " + myWatchedSeriesLength + " shows: " + myWatchedSeriesSentence);

let friends = myWatchedSeries[2];

myWatchedSeries.push("suits");

myWatchedSeries.splice(0,0,"blacklist");

myWatchedSeries.splice(1,1);

console.log(myWatchedSeries[myWatchedSeries.indexOf("money heist")][2]);

console.log(myWatchedSeries);