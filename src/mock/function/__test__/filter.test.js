import filter from "../filter";

describe("mock callback", () => {
  test("toHaveBeenCalledWith", () => {
    // Arrange
    const mockFn = jest
      .fn()
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false);
    // Act
    const array = filter(mockFn, [1, 2, 3, 4]);
    // Assert
    expect(array).toEqual([1, 3]);
  });

  test("toHaveReturned", () => {
    // Arrange
    // Act
    // Assert
  });
});
