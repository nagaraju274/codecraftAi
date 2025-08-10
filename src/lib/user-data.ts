
export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "editor";
  status: "active" | "blocked" | "pending";
  lastLogin: string;
}

export const users: User[] = [
  {
    id: "728ed52f",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    status: "active",
    lastLogin: "2023-11-23T10:00:00Z",
  },
  {
    id: "489e1d42",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "user",
    status: "active",
    lastLogin: "2023-11-22T15:30:00Z",
  },
  {
    id: "f8b4a6c8",
    name: "Alice Johnson",
    email: "alice.j@example.com",
    role: "editor",
    status: "active",
    lastLogin: "2023-11-23T11:45:00Z",
  },
  {
    id: "2c9d7e3f",
    name: "Bob Brown",
    email: "bob.brown@example.com",
    role: "user",
    status: "blocked",
    lastLogin: "2023-10-05T08:20:00Z",
  },
  {
    id: "e1a3b5c7",
    name: "Charlie Davis",
    email: "charlie.d@example.com",
    role: "user",
    status: "pending",
    lastLogin: "2023-11-21T18:00:00Z",
  },
    {
    id: "9f8e7d6c",
    name: "Diana Miller",
    email: "diana.m@example.com",
    role: "user",
    status: "active",
    lastLogin: "2023-11-20T14:10:00Z",
  },
  {
    id: "a1b2c3d4",
    name: "Ethan Wilson",
    email: "ethan.w@example.com",
    role: "editor",
    status: "active",
    lastLogin: "2023-11-23T09:05:00Z",
  },
  {
    id: "b5c6d7e8",
    name: "Fiona Garcia",
    email: "fiona.g@example.com",
    role: "user",
    status: "active",
    lastLogin: "2023-11-19T20:55:00Z",
  },
  {
    id: "c9d8e7f6",
    name: "George Martinez",
    email: "george.m@example.com",
    role: "user",
    status: "blocked",
    lastLogin: "2023-09-15T12:00:00Z",
  },
  {
    id: "d1e2f3g4",
    name: "Hannah Rodriguez",
    email: "hannah.r@example.com",
    role: "admin",
    status: "active",
    lastLogin: "2023-11-23T13:30:00Z",
  },
];
