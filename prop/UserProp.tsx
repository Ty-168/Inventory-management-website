export interface UserProp {
  id: number;
  name: string;
  email: string;
  password: string;
}

export const userList: UserProp[] = [
  {
    id: 1,
    name: "Admin",
    email: "admin@gmail.com",
    password: "admin"
  },
]