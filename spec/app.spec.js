// imports use the syntax const foo = require('./path/to/fileName')
const { player1: daniel, player2: jonas, giveScore } = require("../app");

describe("The Player class", () => {
  it("should be a class", () => {
    expect(typeof daniel).toBe("object");
    expect(typeof jonas).toBe("object");
  });

  it("should have health set to 100", () => {
    expect(daniel.health).toEqual(100);
  });
});

describe("The giveScore function", () => {
  it("should be a function", () => {
    expect(typeof giveScore).toBe("function");
  });
});

describe("The player's properties", () => {
  it("should be an object", () => {
    expect(daniel.name).toBe("Daniel");
    expect(daniel.turn).toBe(0);
    expect(daniel.power).toBe(5);
    expect(daniel.health).toBe(100);
  });
});

describe("The player's attack", () => {
  it("should be a function", () => {
    expect(typeof daniel.attack).toBe("function");
    expect(typeof jonas.attack).toBe("function");
  });
  it("should behave as expected", () => {
    expect(jonas.health).toBe(100);
    daniel.attack(jonas);
    expect(jonas.health).toBe(95);
  });
  it("should handle exceptions and errors", () => {
    expect(jonas.attack()).toBe("This enemy doesn't exist...");
  });
});

describe("The player's health", () => {
  it("should recover when help function is used", () => {
    daniel.attack(jonas);
    jonas.help();
    expect(jonas.health).toBe(98);
  });
  it("should never be above 100", () => {
    jonas.health = 100;
    jonas.help();
    expect(jonas.health).toBe(100);
  });
});

describe("The giveScore function", () => {
  it("should throw an error with a player missing", () => {
    expect(() => {
      giveScore();
    }).toThrow("Undefined players");
  });
  it("should throw an error with same player names", () => {
    expect((name1, name2) => {
      giveScore(daniel, daniel);
    }).toThrow(new Error("Those are the same players !"));
  });
});

describe("Check that game over is working correctly", () => {
  it("should say GAME OVER when health drops below 0", () => {
    jonas.health = 3;
    daniel.attack(jonas)
    // expect( enemy => {
    //   daniel.attack(jonas);
    // }).toBe("GAME OVER JONAS!! Congrats Daniel");
    // const result = daniel.attack(jonas)
    console.log(jonas)
    // console.log(daniel.attack(jonas))
    // console.log(result)
    // expect(result).toBe("GAME OVER JONAS!! Congrats Daniel");
  });
});

/* TODO :
    check when the game ends
*/
