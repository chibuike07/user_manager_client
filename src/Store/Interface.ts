export enum TitleEnum {
  Mr = "Mr",
  Mrs = "Mrs",
  miss = "miss",
  Dr = "Dr",
  Prof = "Prof",
}

export interface IInitialState {
  users:
    | {
        name: string;
        surname: string;
        nin: number;
        title: TitleEnum;
        salary?: number;
        number: string;
        dob: string;
      }[]
    | null;

  selectedUser: "Student" | "Teacher" | "";
  loginInfo: {
    name: string;
    surname: string;
    code?: string;
  };
}
