import "@testing-library/jest-dom";
import { getHeroeById } from "../base/08-imp-exp";
import heroes from "../base/data";
describe("pruebitas", () => {
  test("first proof", () => {
    const id = 5;
    const heroe = getHeroeById(id);
    const newhero = heroes.find((el) => {
      return el.id === id;
    });
    expect(heroe).toEqual(newhero);
  });
  test("undefined si heroe doesnt exist", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test("heroes dc", () => {
    const heroesdc = heroes.filter((el) => {
      return el.owner === "DC";
    });

    const heesdc = heroes.filter((el) => {
      return el.id == 1 || el.id == 3 || el.id == 4;
    });

    expect(heroesdc).toEqual(heesdc);
  });

  test("heores amrvel", () => {
    const heroesmar = heroes.filter((el) => {
      return el.owner === "Marvel";
    });
    expect(heroesmar.length).toBe(2);
  });
});
