describe('email validation', () => {
  
  test('this is an email', () => {
    const email = 'angelarteaga989@gmail.com'

    expect(email).toMatch(/\S+@\S+\.\S+/);
  });

  test('this is an email', () => {
    const email = 'angelarteaga989@gmail.com'

    expect(email).toMatch(/\S+@\S+\.\S+/);
  });
});