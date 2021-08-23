import moduleName from "@testing-library/jest-dom";
import getSaludo from "../base/02-template-string";
describe("probando", () => {
  test("deben", () => {
    const nom = "mat";
    const salu = getSaludo(nom);
    expect(salu).toBe("Hola ma");
  });
});
