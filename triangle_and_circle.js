const r = require("raylib");

function setup() {
  const screenWidth = 700;
  const screenHeight = 700;
  const lenght = {x: 100, y: 360};
  const breadth = {x: 360, y: 600};
  const height = {x: 600, y: 500};
  const radius = 10;

  r.SetTargetFPS(60);
  r.InitWindow(screenWidth, screenHeight, "triangle");

  return {
    screenWidth,
    screenHeight,
    lenght,
    breadth,
    height,
    radius,
    x: 100,
    y: 360,
  };
}

function draw(w) {
  let start = 50;
  r.BeginDrawing();

  r.ClearBackground(r.WHITE);

  r.DrawTriangleLines(w.lenght, w.breadth, w.height, r.RED);
  r.DrawCircle(w.x, w.y, 2, r.BLUE);
  w.x += 5;
  w.y += 5;
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
