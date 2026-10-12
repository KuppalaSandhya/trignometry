const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
     r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow();
    r.SetTargetFPS(FPS);
}

function update() { }

function draw() { 
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}


module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};