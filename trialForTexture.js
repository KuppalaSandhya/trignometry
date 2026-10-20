const r = require("raylib");

function setup() {
  const window = {
    width: 500,
    height: 500,
  };
  r.SetTraceLogLevel(r.LOG_NONE);
  r.SetTargetFPS(10);
  r.InitWindow(500, 500, "texture");

  return {
    window,
  };
}

// function draw(w) {
//   r.BeginDrawing();
//   r.ClearBackground(r.BLACK);

//   r.EndDrawing();
// }

function loop(w) {
  const target = r.LoadRenderTexture(300, 400);
  let x = 10;
  let y = 10;

  while (!r.WindowShouldClose()) {
    r.BeginTextureMode(target);
    // r.ClearBackground(r.RED);
    r.DrawCircle(x, y, 5, r.WHITE);
    x += 5;
    y += 5;

    r.EndTextureMode();

    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawTexture(target.texture, 0, 0, r.WHITE);

    r.EndDrawing();
    r.BeginTextureMode(target);
    r.ClearBackground(r.RED);
    r.DrawCircle(x, y, 5, r.GOLD);
    x += 5;
    y += 5;

    r.EndTextureMode();
  }
}

function teardown() {
  r.CloseWindow();
}

function main() {
  const w = setup();

  loop(w);
  teardown();
}

main();
