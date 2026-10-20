const r = require("raylib");
function setup() {
  const screenWidth = 600;
  const screenHeight = 600;

  const x = 300;
  const y = 200;
  const horizontalRadius = 200;
  const verticalRadius = 100;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.SetTargetFPS(50);
  r.InitWindow(screenWidth, screenHeight, "ellipse");
  return {x, y, horizontalRadius, verticalRadius};
}

function conversionOfRadians(degrees) {
  return (Math.PI / 180) * degrees;
}

function drawPoints(w) {
  for (let degrees = 0; degrees < 360; degrees++) {
    startPosX =
      Math.cos(conversionOfRadians(degrees)) * w.horizontalRadius + w.x;
    startPosY = Math.sin(conversionOfRadians(degrees)) * w.verticalRadius + w.y;

    endPosX =
      Math.cos(conversionOfRadians(degrees + 1)) * w.horizontalRadius + w.x;
    endPosY =
      Math.sin(conversionOfRadians(degrees + 1)) * w.verticalRadius + w.y;

    r.DrawLine(startPosX, startPosY, endPosX, endPosY, r.RED);
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
