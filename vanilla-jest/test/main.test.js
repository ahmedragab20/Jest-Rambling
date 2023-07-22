it("returns response", async () => {
  const greet = (name) => `Hello ${name}`;

  await expect(Promise.resolve(greet("Ahmed"))).resolves.toBe("Hello Ahmed");
});
