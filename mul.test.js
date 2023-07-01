const mul = require("./mul");

test("Multiplicar 550 * 7 para ser igual a 3850", () => {
    expect(mul(550, 7)).toBe(3850);
});