import { getHeroeByIdAsync } from "./09-promesas";
import { render } from "@testing-library/react";
import { AnimeItem } from "../components/anime/AnimeItem";
describe("prueba1", () => {
  test("test20", () => {
    const wrapper = render(<AnimeItem />);
  });
  test("test1", async (done) => {
    const asb = 4;
    getHeroeByIdAsync(0).then((val) => {
      console.log(val);
      expect(asb).toBe(val);
      done();
    });
  });
});
