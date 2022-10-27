const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("should workswith single digits", () => {
   const resp = addCommas(6)
   expect(resp).toEqual('6')
  });
  test("should work with double digit", () => {
   const resp = addCommas(10)
   expect(resp).toEqual('10')
  });
  test("should work with negative numbers", () => {
   const resp = addCommas(-10)
   expect(resp).toEqual('-10')
  });
  test("should work with 4 digits", () => {
   const resp = addCommas(5123)
   expect(resp).toEqual('5,123')
  });
  test("should work with 5 digits", () => {
   const resp = addCommas(51234)
   expect(resp).toEqual('51,234')
  });
  test("should work with 6 digits", () => {
   const resp = addCommas(512343)
   expect(resp).toEqual('512,343')
  });
  test("should work with 7 digits", () => {
   const resp = addCommas(5123432)
   expect(resp).toEqual('5,123,432')
  });
  test("should work with 7 digit negative number", () => {
   const resp = addCommas(-5123432)
   expect(resp).toEqual('-5,123,432')
  });
  test("should work with decimal numbers", () => {
   const resp = addCommas(51234.32)
   expect(resp).toEqual('51,234.32')
  });
  test("should work with negative decimal numbers", () => {
   const resp = addCommas(-51234.32)
   expect(resp).toEqual('-51,234.32')
  });
});
