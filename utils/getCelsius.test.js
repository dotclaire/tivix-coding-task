import { getCelsius } from "./getCelsius";

test("returns 32F to 0C", () => {
  expect(getCelsius(0)).toBe(-273.15);
});
