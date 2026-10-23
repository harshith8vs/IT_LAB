const fs = require("node:fs");
const assert = require("node:assert/strict");

const html = fs.readFileSync("index.html", "utf8");
const js = fs.readFileSync("src/app.js", "utf8");
const css = fs.readFileSync("src/style.css", "utf8");

assert.match(html, /Online Food Delivery|QuickBite/i, "page should identify the demo");
assert.match(html, /menu-items/, "page should include the menu container");
assert.match(js, /function renderMenu/, "app should render the menu");
assert.match(js, /function addToCart/, "app should support adding items");
assert.match(js, /function renderCart/, "app should update the demo cart");
assert.match(css, /menu-grid/, "stylesheet should define the menu layout");

console.log("Smoke tests passed.");
