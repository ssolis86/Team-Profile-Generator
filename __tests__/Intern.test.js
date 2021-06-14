const Intern = require("../lib/Intern");

test("Success intern constructor", () => {
  const testIntern = new Intern(
    "Stephen",
    "12345",
    "test@test.com",
    "University of Texas"
  );
  expect(testIntern.name).toBe("Stephen");
  expect(testIntern.id).toBe("12345");
  expect(testIntern.email).toBe("test@test.com");
  expect(testIntern.school).toBe("University of Texas");
});
