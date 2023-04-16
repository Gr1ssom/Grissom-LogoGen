const { execSync } = require('child_process');
const fs = require('fs');

describe('generateLogo', () => {
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterAll(() => {
    console.log.mockRestore();
  });

  it('generates a logo with the correct input', () => {
    execSync('node app.js', {
      input: 'abc\nred\ncircle\nblue\n',
    });

    const svg = fs.readFileSync('logo.svg', 'utf-8');
    expect(svg).toContain('<rect width="100%" height="100%" fill="blue"/>');
    expect(svg).toContain('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="red">abc</text>');

    expect(console.log).toHaveBeenCalledWith('Generated logo.svg');
  });
});
