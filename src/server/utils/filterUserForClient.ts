import { type User } from "@clerk/nextjs/server";

const getFullName = (user: User) => {
  let name = user.firstName;

  if (user.lastName) {
    name = `${name} ${user.lastName}`;
  }

  return name;
};

export const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: getFullName(user) ?? user.username ?? "no username",
    avatarSrc: user.imageUrl,
  };
};
