import { type PostProps } from "~/app/_components/Post";

const currentDate = new Date();

const threeHoursAgo = new Date(currentDate);
threeHoursAgo.setHours(currentDate.getHours() - 3);

export const POST_MOCKS: PostProps[] = [
  {
    id: "1",
    title: "Honest opinions on Lime ebikes in London",
    description:
      "Tell me your good and bad experiences of using Lime as a Rider in London",
    createdAt: threeHoursAgo,
    author: {
      avatarSrc:
        "https://unsplash.com/photos/QXevDflbl8A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cGVyc29ufGVufDB8fHx8MTcwMjc4OTk1NXww&force=true&w=640",
      username: "limerider",
    },
    upvotes: 130,
    downvotes: 300,
  },
  {
    id: "2",
    title: "Honest opinions on Lime ebikes in London",
    description:
      "Tell me your good and bad experiences of using Lime as a Rider in London",
    createdAt: threeHoursAgo,
    author: {
      avatarSrc:
        "https://unsplash.com/photos/QXevDflbl8A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cGVyc29ufGVufDB8fHx8MTcwMjc4OTk1NXww&force=true&w=640",
      username: "limerider",
    },
    upvotes: 130,
    downvotes: 25,
  },
  {
    id: "3",
    title: "Honest opinions on Lime ebikes in London",
    description:
      "Tell me your good and bad experiences of using Lime as a Rider in London",
    createdAt: threeHoursAgo,
    author: {
      avatarSrc:
        "https://unsplash.com/photos/QXevDflbl8A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cGVyc29ufGVufDB8fHx8MTcwMjc4OTk1NXww&force=true&w=640",
      username: "limerider",
    },
    upvotes: 130,
    downvotes: 25,
    userVote: "upvote",
  },
  {
    id: "4",
    title: "Honest opinions on Lime ebikes in London",
    description:
      "Tell me your good and bad experiences of using Lime as a Rider in London",
    createdAt: threeHoursAgo,
    author: {
      avatarSrc:
        "https://unsplash.com/photos/QXevDflbl8A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cGVyc29ufGVufDB8fHx8MTcwMjc4OTk1NXww&force=true&w=640",
      username: "limerider",
    },
    upvotes: 130,
    downvotes: 25,
    userVote: "downvote",
  },
];
