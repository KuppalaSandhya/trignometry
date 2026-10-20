const r = require("raylib");
function setup() {
  const screenWidth = 400;
  const screenHeight = 400;

  const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
  const gap = 4;
  const width = 40;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.SetTargetFPS(2);
  r.InitWindow(screenWidth, screenHeight, "average");
  return {screenWidth, screenHeight, data, gap, width};
}

function findsMax(data) {
  let max = data[0];
  for (const num of data) {
    max = Math.max(max, num);
  }
  return max;
}

function findScalingValue(w) {
  const max = findsMax(w.data);
  return ((90 / 100) * w.screenHeight) / max;
}

function drawAvgLine(data, scalingValue) {
  let sum = 0;
  for (i = 0; i < data.length; i++) {
    sum = data[i] + sum;
  }
  const avg = sum / data.length;
  const scalingAvgValue = scalingValue * avg;
  r.DrawLine(0, scalingAvgValue, 400, scalingAvgValue, r.RED);
}

function drawBars(w, i, scalingValue) {
  const width = w.width;
  const height = scalingValue * w.data[i];
  const x = i * (w.width + w.gap);
  const y = w.screenHeight - height;

  r.DrawRectangle(x, y, width, height, r.BLUE);
}

function draw(w) {
  r.BeginDrawing();

  r.ClearBackground(r.WHITE);
  const scalingValue = findScalingValue(w);

  for (i = 0; i < w.data.length; i++) {
    drawBars(w, i, scalingValue);
  }

  drawAvgLine(w.data, scalingValue);

  r.EndDrawing();
}

function loop(w) {
  while (!r.WindowShouldClose()) {
    // no update!
    draw(w);
  }
}

function main() {
  const w = setup();
  loop(w);
}
main();
