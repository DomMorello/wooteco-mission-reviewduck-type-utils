import { expectType } from "tsd";
import { NumberString, ElapsedTime } from "../src";

test("NumberString Test", () => {
  expectType<NumberString>(1);
  expectType<NumberString>("12");
});

test("ElapsedTime Test", () => {
  expectType<ElapsedTime>("1일 전");
  expectType<ElapsedTime>("1분 전");
  expectType<ElapsedTime>("1초 전");
  expectType<ElapsedTime>("2022년 9월 27일");
});
