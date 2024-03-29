const path = require("path");
const fs = require("fs");

const data = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split("\n")
  .map((line) =>
    line.split(" -> ").map((coord) => coord.split(",").map((n) => Number(n)))
  )
  .filter(([[x1, y1], [x2, y2]]) => x1 === x2 || y1 === y2);

// count how often each coordinate is hit
const coordinateOccurencesDict = {};
for (const lineSegment of data) {
  getVentCoordinates(lineSegment).forEach((coord) => {
    if (coordinateOccurencesDict[coord]) {
      coordinateOccurencesDict[coord] += 1;
    } else {
      coordinateOccurencesDict[coord] = 1;
    }
  });
}

const overlaps = Object.keys(coordinateOccurencesDict).filter(
  (k) => coordinateOccurencesDict[k] > 1
);

console.log(overlaps.length);

function getVentCoordinates([[x1, y1], [x2, y2]]) {
  if (x1 === x2) {
    const start = y1 < y2 ? y1 : y2;
    const length = Math.abs(y1 - y2) + 1;
    return Array.from({ length }, (_, i) => `${x1},${start + i}`);
  } else {
    const start = x1 < x2 ? x1 : x2;
    const length = Math.abs(x1 - x2) + 1;
    return Array.from({ length }, (_, i) => `${start + i},${y1}`);
  }
}
