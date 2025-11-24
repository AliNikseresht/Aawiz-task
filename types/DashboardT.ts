export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
    catchPhrase: string;
  };
  address: {
    city: string;
  };
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export type StatColor = "blue" | "purple" | "green" | "orange";

export interface Stat {
  title: string;
  value: string;
  icon: React.ComponentType<any>;
  color: StatColor;
}
