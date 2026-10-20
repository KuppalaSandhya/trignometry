const r = require("raylib");

function setup() {
  const window = {
    width: 500,
    height: 500,
  };
  r.SetTraceLogLevel(r.LOG_NONE);
  r.SetTargetFPS(10);
  r.InitWindow(700, 500, "texture");

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
  const target = r.LoadRenderTexture(200, 200);
  r.BeginTextureMode(target);

  r.ClearBackground(r.BLACK);
  r.DrawCircle(100, 100, 60, r.RED);
  r.DrawCircle(80, 80, 15, r.WHITE);

  r.EndTextureMode();

  while (!r.WindowShouldClose()) {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    const source = {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
    };

    r.DrawTextureRec(target.texture, source, {x: 0, y: 0}, r.WHITE);

    r.EndDrawing();
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
