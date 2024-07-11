const colors = ["AliceBlue", "DarkGreen", "DarkMagenta", "Coral"];
const parties = ["Party A", "Party B", "Party C"];
const fakeData: {
  number: number;
  steps: {
    party: 0 | 1 | 2 | 3;
    isStarted: boolean;
    isElected: boolean;
  }[];
}[] = [
  {
    number: 1,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 2,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 3, isStarted: true, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 3,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 4,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 5,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 6,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 7,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 8,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 9,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 10,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 11,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: false },
      { party: 1, isStarted: true, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 12,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 13,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 14,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 15,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 16,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 17,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 18,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 19,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: false },
      { party: 3, isStarted: true, isElected: false },
      { party: 1, isStarted: true, isElected: false },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 20,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 21,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 22,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 23,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 24,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 25,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: false },
      { party: 1, isStarted: true, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 26,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 27,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 28,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 29,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 30,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 1, isStarted: true, isElected: false },
      { party: 3, isStarted: true, isElected: false },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 31,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 32,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 33,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: false },
      { party: 1, isStarted: true, isElected: false },
      { party: 1, isStarted: true, isElected: false },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 34,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 35,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 36,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 37,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 38,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 39,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 40,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 41,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 42,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 43,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 3, isStarted: true, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 44,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 45,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 46,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 47,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 48,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 3, isStarted: true, isElected: false },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 49,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 50,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 3, isStarted: true, isElected: false },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 51,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 52,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 53,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 54,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 55,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 56,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 57,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 58,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 59,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 60,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 61,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 62,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 63,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 64,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 65,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 66,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 67,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 68,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 69,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: false },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 70,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 71,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 72,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 73,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 74,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 75,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 1, isStarted: true, isElected: false },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 76,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 77,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
      { party: 1, isStarted: true, isElected: true },
    ],
  },
  {
    number: 78,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 3, isStarted: true, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 79,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 1, isStarted: true, isElected: false },
      { party: 3, isStarted: true, isElected: false },
      { party: 3, isStarted: true, isElected: true },
    ],
  },
  {
    number: 80,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
  {
    number: 81,
    steps: [
      { party: 0, isStarted: false, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 2, isStarted: true, isElected: false },
      { party: 2, isStarted: true, isElected: true },
    ],
  },
];

export { fakeData, parties, colors };
