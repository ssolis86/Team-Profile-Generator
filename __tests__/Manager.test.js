const Manager = require("../lib/Manager");

test("Success manager constructor", () => {
  const testManager = new Manager(
    "Stephen",
    "12345",
    "test@test.com",
    "2107347534"
  );
  expect(testManager.name).toBe("Stephen");
  expect(testManager.id).toBe("12345");
  expect(testManager.email).toBe("test@test.com");
  expect(testManager.officeNumber).toBe("2107347534");
});
