import { register } from "../user";
import axios from "axios";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // Arrange
    // axios.post.mockResolvedValue("abc")
    // Act
    await expect(axios.post("123", {})).resolves.toBe("abc");

    // Assert
  });
});
