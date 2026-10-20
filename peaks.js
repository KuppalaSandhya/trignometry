const r = require("raylib");

function setup() {
  const screenWidth = 400;
  const screenHeight = 400;

  const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
  const gap = 20;
  const scalingValue = findScalingValue(data, screenHeight);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.SetTargetFPS(60);
  r.InitWindow(screenWidth, screenHeight, "average");
  return {screenWidth, screenHeight, data, gap, scalingValue};
}

function findsMax(data) {
  let max = data[0];
  for (const num of data) {
    max = Math.max(max, num);
  }
  return max;
}

function findScalingValue(data, screenHeight) {
  const max = findsMax(data);
  return (0.9 * screenHeight) / max;
}

function getPeakPoints(data) {
  const peakPoints = [];
  for (let j = 0; j < data.length; j++) {
    if (data[j - 1] < data[j] && data[j] > data[j + 1])
      peakPoints.push(data[j]);
  }
  return peakPoints;
}

function drawCircle(w, x, point1) {
  const peakPoints = getPeakPoints(w.data);

  for (j = 0; j < peakPoints.length; j++) {
    if (peakPoints[j] === w.data[x]) r.DrawCircleV(point1, 5, r.RED);
  }
}

function createPoint(i, w) {
  const x = i * w.gap;
  const y = w.screenHeight - w.scalingValue * w.data[i];
  return {x, y};
}

function drawLine(w, i) {
  const point1 = createPoint(i, w);
  const point2 = createPoint(i + 1, w);

  r.DrawLineV(point1, point2, r.BLACK);

  drawCircle(w, i, point1);
}

function draw(w) {
  r.BeginDrawing();

  r.ClearBackground(r.RAYWHITE);

  for (let i = 0; i < w.data.length; i++) {
    drawLine(w, i);
  }

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
