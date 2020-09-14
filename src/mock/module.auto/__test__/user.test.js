import { verifyPassword, verifyUsername } from "../verify";
import validate from "../user";

jest.mock("../verify", () => ({
  verifyPassword: jest.fn().mockImplementation(() => {
    console.log("test password");
  }),
}));

describe("user", () => {
  test("should validate username and password", () => {
    // Arrange
    // Act

    validate("", "");
    // Assert
    expect(verifyPassword).toBeCalledTimes(1);
  });
});
