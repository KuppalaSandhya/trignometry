const r = require("raylib");
function setup() {
  const screenWidth = 400;
  const screenHeight = 400;

  const pointsRadius = 5;
  const noOfPoints = 7;

  const x = 200;
  const y = 200;
  const radius = 150;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.SetTargetFPS(50);
  r.InitWindow(screenWidth, screenHeight, "polygon");
  return {screenWidth, screenHeight, x, y, radius, noOfPoints, pointsRadius};
}

function conversionOfRadians(degrees) {
  return (Math.PI / 180) * degrees;
}

function drawPoints(w) {
  for (let i = 0; i < w.noOfPoints; i++) {
    const degrees = 360 / w.noOfPoints;
    const x = Math.cos(conversionOfRadians(degrees * i)) * w.radius + w.x;
    const y = Math.sin(conversionOfRadians(degrees * i)) * w.radius + w.y;

    const x2 =
      Math.cos(conversionOfRadians(degrees * (i + 1))) * w.radius + w.x;
    const y2 =
      Math.sin(conversionOfRadians(degrees * (i + 1))) * w.radius + w.y;

    r.DrawLine(x, y, x2, y2, r.BLACK);
  }
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
