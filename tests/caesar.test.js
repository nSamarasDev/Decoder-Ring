const caesar = require('../src/caesar');
let chai = require('chai'), expect = chai.expect, should = chai.should(), assert = chai.assert;

describe("caeser", () => {
  it("returns false if shift value is missing", () => {
    const actual = caesar();
    expect(actual).to.be.false;
  });
  it("returns false if shift value is 0", () => {
    const actual = caesar("", 0);
    expect(actual).to.be.false;
  });
  it("returns false if shift value is greater than 25", () => {
    const actual = caesar("", 26);
    expect(actual).to.be.false;
  });
  it("returns false if shift value is less than -25", () => {
    const actual = caesar("", -27);
    expect(actual).to.be.false;
  });
  it("shifts a provided string by the shift amount", () => {
    const expected = "ibm";
    const actual = caesar("hal", 1);
    expect(actual).to.equal(expected);
  });
  it("is case insensitive", () => {
    const expected = "ibm";
    const actual = caesar("HAL", 1);
    expect(actual).to.equal(expected);
  });
  it("preserves whitespace", () => {
    const expected = "qrgp rqf";
    const actual = caesar("open pod", 2);
    expect(actual).to.equal(expected);
  });
  it("preserves any nonalphabetic character", () => {
    const expected = "@kruvh_herrnv";
    const actual = caesar("@horse_ebooks", 3);
    expect(actual).to.equal(expected);
  });
  it("handles left shifts beyond a", () => {
    const expected = "xifyxyx";
    const actual = caesar("alibaba", -3);
    expect(actual).to.equal(expected);
  });
  it("handles shifts above z", () => {
    const expected = "aoacss";
    const actual = caesar("xlxzpp", 3);
    expect(actual).to.equal(expected);
  });
  it("properly decodes a message", () => {
    const expected = "this is a secret message!";
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.be.equal(expected);
  });
});


// describe('Caesar Shift function', ()=>{
//   it('should return false if shift value is 0, > 25, < -25, or not given', ()=>{
//     expect(caesar('false', -26)).to.be.false;
//     expect(caesar('false', 26)).to.be.false;
//     expect(caesar('false', 0)).to.be.false;
//     expect(caesar('false')).to.be.false;
//   });
//   it('should maintain spaces and other non-alphabetic symbols', ()=>{
//     expect(caesar('a !( a', 1)).to.eql('b !( b');
//     expect(caesar('a !( a', 1, false)).to.eql('z !( z');
//   });
//   it('should handle shifts that go past the end of the alphabet', ()=>{
//     expect(caesar('z', 3)).to.eql('c');
//     expect(caesar('c', 3, false)).to.eql('z');
//   });
//   it('should handle shifts in the negative direction', ()=>{
//     expect(caesar('z', -3)).to.eql('w');
//     expect(caesar('c', -3, false)).to.eql('f');
//   });
//   it('should ignore capitalization', ()=>{
//     expect(caesar('AaABbB', 1)).to.eql(caesar('aaabbb', 1));
//     expect(caesar('aAabBb', 1, false)).to.eql(caesar('aaabbb', 1, false));
//   });
// });




