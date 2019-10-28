import { expect } from 'chai';

describe('true or false', () => {
  it('true is true', () => {
    expect(true).to.eql(true);
  });
  it('false is not true', () => {
    const myfalse = !true;
    expect(myfalse).to.eql(!true);
  });
});
