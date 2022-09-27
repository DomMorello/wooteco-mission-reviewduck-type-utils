import { expectType } from "tsd";
import { PickParameterType, PickReturnType } from "../src";

test("PickParameterType Test", () => {
  const testFunc = (a: string, b: number, c: Object): boolean => {
    console.log(a, b, c);

    return true;
  };

  type TestType = PickParameterType<typeof testFunc> extends [a: string, b: number, c: Object] ? true : false;

  expectType<TestType>(true);
});

test("PickReturnType Test", () => {
  const testFunc = (a: string, b: number): boolean => {
    console.log(a, b);

    return true;
  };

  type TestType = PickReturnType<typeof testFunc> extends boolean ? true : false;

  expectType<TestType>(true);
});
