export type Mode = "Normal" | "Downshift";

export type UserState = {
  habitName: string;
  normalCommitment: string;
  minimumCommitment: string;
  mode: Mode;
  lastAction: string;
  downshiftCount: number;
};

let userState: UserState = {
  habitName: "Daily Walk",
  normalCommitment: "Walk for 20 minutes",
  minimumCommitment: "Put on shoes + walk 3 minutes",
  mode: "Normal",
  lastAction: "Yesterday",
  downshiftCount: 0,
};

export function getUserState() {
  return userState;
}

export function logDidIt() {
  userState.lastAction = "Just now";
}

export function downshift() {
  userState.mode = "Downshift";
  userState.downshiftCount += 1;
}
