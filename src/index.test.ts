import { identity } from "./index";

describe("index", () => {
  it("returns arg", () => {
    const obj = {};

    expect(identity(obj)).toBe(obj);
  });
});
