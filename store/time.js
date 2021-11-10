import { atom } from "recoil";

const timeState = atom({
  key: "timeState",
  default: 300,
});

export default timeState;
