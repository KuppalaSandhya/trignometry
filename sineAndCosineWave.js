const r = require("raylib");
function setup() {
  const screenWidth = 600;
  const screenHeight = 400;

  const x = 50;
  const y = 200;
  const amplitude = 100;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.SetTargetFPS(50);
  r.InitWindow(screenWidth, screenHeight, "sine cosine waves");
  return {x, y, amplitude, screenWidth};
}

function conversionOfRadians(degrees) {
  return (Math.PI / 180) * degrees;
}

function drawPoints(w) {
  let degrees = 0;
  for (let x = w.x; x < w.screenWidth; x++) {
    const y = w.amplitude * Math.sin(conversionOfRadians(degrees)) + w.y;
    const endPOsY =
      w.amplitude * Math.sin(conversionOfRadians(degrees + 1)) + w.y;

    const z = w.amplitude * Math.cos(conversionOfRadians(degrees)) + w.y;
    const endPOsZ =
      w.amplitude * Math.cos(conversionOfRadians(degrees + 1)) + w.y;

    const endPosX = x + 1;

    degrees++;

    // r.DrawLine(x, y, endPosX, endPOsY, r.RED);
    // r.DrawLine(x, z, endPosX, endPOsZ, r.RED);

    r.DrawCircle(x, y, 5, r.RED);
    r.DrawCircle(x, z, 5, r.RED);
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
