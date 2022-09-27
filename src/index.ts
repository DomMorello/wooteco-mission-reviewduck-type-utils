export type NumberString = `${number}` | number;

type ElapsedTimeText = "초 전" | "분 전" | "시간 전" | "일 전";

export type ElapsedTime = `${number}${ElapsedTimeText}` | `${number}년 ${number}월 ${number}일`;
