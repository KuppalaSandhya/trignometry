const r = require("raylib");
function setup() {
  const screenWidth = 600;
  const screenHeight = 600;

  const pointA = {x: 100, y: 300};
  const pointB = {x: 350, y: 150};

  r.SetTraceLogLevel(r.LOG_NONE);
  r.SetTargetFPS(50);
  r.InitWindow(screenWidth, screenHeight, "ellipse");
  return {pointA, pointB};
}

function conversionOfDegrees(radians) {
  return radians * (180 / Math.PI);
}

function distanceBetweenCoOrdinates(x1, x2, y1, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function drawPoints(w) {
  r.DrawLine(w.pointA.x, w.pointA.y, w.pointB.x, w.pointB.y, r.RED);
  r.DrawLine(w.pointA.x, w.pointA.y, w.pointB.x, w.pointA.y, r.RED);
  r.DrawLine(w.pointB.x, w.pointA.y, w.pointB.x, w.pointB.y, r.RED);

  const adjacent = distanceBetweenCoOrdinates(
    w.pointA.x,
    w.pointB.x,
    w.pointA.y,
    w.pointA.y,
  );
  const opposite = distanceBetweenCoOrdinates(
    w.pointB.x,
    w.pointB.x,
    w.pointA.y,
    w.pointB.y,
  );
  const radians = Math.tan(opposite / adjacent);
  const degrees = conversionOfDegrees(radians);
  r.DrawText(degrees + "", 200, 500, 20, r.BLACK);
}

function draw(w) {
  r.BeginDrawing();

  r.ClearBackground(r.WHITE);

  drawPoints(w);
  r.EndDrawing();
}

function loop(w) {
  while (!r.WindowShouldClose()) {
    draw(w);
  }
}

function main() {
  const w = setup();
  loop(w);
}
main();
