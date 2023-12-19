import { type PostProps } from "~/app/_components/Post";
import { type CommentProps } from "./app/_components/Comment";

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
    userVote: "UPVOTE",
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
    userVote: "DOWNVOTE",
  },
  {
    id: "5",
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
    id: "6",
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
    id: "7",
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
    userVote: "UPVOTE",
  },
  {
    id: "8",
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
    userVote: "DOWNVOTE",
  },
  {
    id: "9",
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
    id: "10",
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
    id: "11",
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
    userVote: "UPVOTE",
  },
  {
    id: "12",
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
    userVote: "DOWNVOTE",
  },
  {
    id: "13",
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
    id: "14",
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
    id: "15",
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
    userVote: "UPVOTE",
  },
  {
    id: "16",
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
    userVote: "DOWNVOTE",
  },
];

export const COMMENT_MOCKS: CommentProps[] = [
  {
    id: "0",
    content:
      "Good: generally decent volume of bikes, decent range, booking process is usually fine",
    createdAt: threeHoursAgo,
    author: {
      avatarSrc:
        "https://unsplash.com/photos/QXevDflbl8A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cGVyc29ufGVufDB8fHx8MTcwMjc4OTk1NXww&force=true&w=640",
      username: "luisa",
    },
    upvotes: 9,
    downvotes: 9,
    userVote: "DOWNVOTE",
    replies: [],
  },
  {
    id: "1",
    content:
      "Lack of a text feedback box to describe an issue with a bike. I once had a bicycle that had a steering lockup when trying to turn left. Had to brake and stop otherwise would have driven straight onto oncoming traffic.",
    createdAt: threeHoursAgo,
    author: {
      avatarSrc:
        "https://unsplash.com/photos/QXevDflbl8A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cGVyc29ufGVufDB8fHx8MTcwMjc4OTk1NXww&force=true&w=640",
      username: "georgia",
    },
    upvotes: 9,
    downvotes: 3,
    replies: [
      {
        id: "2",
        content:
          "I'd guess that people are getting sick of having to step over the piles of bike blocking pavements there.",
        createdAt: threeHoursAgo,
        author: {
          avatarSrc:
            "https://unsplash.com/photos/QXevDflbl8A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cGVyc29ufGVufDB8fHx8MTcwMjc4OTk1NXww&force=true&w=640",
          username: "amy",
        },
        upvotes: 9,
        downvotes: 9,
        userVote: "DOWNVOTE",
        replies: [
          {
            id: "3",
            content:
              "I'd guess that people are getting sick of having to step over the piles of bike blocking pavements there.",
            createdAt: threeHoursAgo,
            author: {
              avatarSrc:
                "https://unsplash.com/photos/QXevDflbl8A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cGVyc29ufGVufDB8fHx8MTcwMjc4OTk1NXww&force=true&w=640",
              username: "amy",
            },
            upvotes: 9,
            downvotes: 9,
            userVote: "DOWNVOTE",
            replies: [
              {
                id: "4",
                content:
                  "I'd guess that people are getting sick of having to step over the piles of bike blocking pavements there.",
                createdAt: threeHoursAgo,
                author: {
                  avatarSrc:
                    "https://unsplash.com/photos/QXevDflbl8A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cGVyc29ufGVufDB8fHx8MTcwMjc4OTk1NXww&force=true&w=640",
                  username: "amy",
                },
                upvotes: 9,
                downvotes: 9,
                userVote: "DOWNVOTE",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "5",
    content:
      "Good: generally decent volume of bikes, decent range, booking process is usually fine",
    createdAt: threeHoursAgo,
    author: {
      avatarSrc:
        "https://unsplash.com/photos/QXevDflbl8A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cGVyc29ufGVufDB8fHx8MTcwMjc4OTk1NXww&force=true&w=640",
      username: "luisa",
    },
    upvotes: 9,
    downvotes: 9,
    userVote: "DOWNVOTE",
    replies: [],
  },
];
