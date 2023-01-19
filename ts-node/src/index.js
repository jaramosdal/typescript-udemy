define(["require", "exports", "./classes/hero"], function (require, exports, hero_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ironman = new hero_1.Hero('Ironman', 1, 55);
    console.log(ironman);
});
