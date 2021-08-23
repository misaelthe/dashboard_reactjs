import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../base/05-funciones";

describe("pruebas a continuacion", () => {
  test("test1", () => {
    const user = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const usertest = getUser();

    expect(user).toEqual(usertest);
  });

  test("test20", () => {
    const user = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const usertest = getUsuarioActivo("mario");

    expect(user).toEqual(usertest);
  });
});
