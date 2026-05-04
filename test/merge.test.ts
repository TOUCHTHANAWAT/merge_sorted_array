import { merge } from "../src/merge";

describe("merge()", () => {

  test("normal case", () => {
    expect(
      merge([1,4,7], [9,6,3], [2,5,8])
    ).toEqual([1,2,3,4,5,6,7,8,9]);
  });


  test("all empty", () => {
    expect(merge([], [], [])).toEqual([]);
  });


  test("two empty one filled", () => {
    expect(
      merge([1,2,3], [], [])
    ).toEqual([1,2,3]);
  });

  test("one empty middle", () => {
    expect(
      merge([], [3,2,1], [4,5,6])
    ).toEqual([1,2,3,4,5,6]);
  });


  test("duplicates across arrays", () => {
    expect(
      merge([1,2], [3,2], [2,4])
    ).toEqual([1,2,2,2,3,4]);
  });


  test("already sorted inputs", () => {
    expect(
      merge([1,3,5], [6,4,2], [7,8,9])
    ).toEqual([1,2,3,4,5,6,7,8,9]);
  });

  test("negative numbers", () => {
    expect(
      merge([-3,-1], [2,0,-2], [-5,-4])
    ).toEqual([-5,-4,-3,-2,-1,0,2]);
  });


  test("different sizes", () => {
    expect(
      merge([1], [100,50,25], [2,3,4,5,6])
    ).toEqual([1,2,3,4,5,6,25,50,100]);
  });


  test("single elements", () => {
    expect(
      merge([3], [2], [1])
    ).toEqual([1,2,3]);
  });

  test("large range", () => {
    const c1 = [1,3,5,7,9];
    const c2 = [10,8,6,4,2];
    const c3 = [0,11,12,13];

    expect(
      merge(c1, c2, c3)
    ).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12,13]);
  });

});