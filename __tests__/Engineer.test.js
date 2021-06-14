const Engineer = require("../lib/Engineer");

test("Success engineer constructor", () => {
  const testEngineer = new Engineer(
    "Stephen",
    "12345",
    "test@test.com",
    "testGithubAccount"
  );
  expect(testEngineer.name).toBe("Stephen");
  expect(testEngineer.id).toBe("12345");
  expect(testEngineer.email).toBe("test@test.com");
  expect(testEngineer.github).toBe("testGithubAccount");
});
