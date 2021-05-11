module.exports = (Parser) => {
  return class extends Parser {
    parseExprAtom(refShortHandDefaultPos) {
      console.log(refShortHandDefaultPos);
      return super.parseExprAtom(refShortHandDefaultPos);
    }
    readToken(code) {
      console.log(code);
      return super.readToken(code);
    }
    updateContext(prevType) {
      console.log(prevType);
      return super.updateContext(prevType);
    }
  };
};
