import spark1 from "@mock/sparks/img/spark1.png";
import avatar from "@mock/sparks/img/avatar.png";
import { StaticImageData } from "next/image";

type Card = {
  id: number;
  image: StaticImageData;
  title: string;
  user: {
    username: string;
    avatarImage: StaticImageData;
  };
};

export const mockSparks: Card[] = [
  {
    id: 1,
    image: spark1,
    title: "Should Elon Musk be deported1?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 2,
    image: spark1,
    title: "Should Elon Musk be deported2?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 3,
    image: spark1,
    title: "Should Elon Musk be deported3?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 4,
    image: spark1,
    title: "Should Elon Musk be deported4?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 5,
    image: spark1,
    title: "Should Elon Musk be deported5?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 6,
    image: spark1,
    title: "Should Elon Musk be deported6?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 7,
    image: spark1,
    title: "Should Elon Musk be deported7?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 8,
    image: spark1,
    title: "Should Elon Musk be deported8?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 9,
    image: spark1,
    title: "Should Elon Musk be deported9?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 10,
    image: spark1,
    title: "Should Elon Musk be deported5?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 11,
    image: spark1,
    title: "Should Elon Musk be deported6?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 12,
    image: spark1,
    title: "Should Elon Musk be deported7?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 13,
    image: spark1,
    title: "Should Elon Musk be deported8?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 14,
    image: spark1,
    title: "Should Elon Musk be deported9?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 15,
    image: spark1,
    title: "Should Elon Musk be deported5?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 16,
    image: spark1,
    title: "Should Elon Musk be deported6?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 17,
    image: spark1,
    title: "Should Elon Musk be deported7?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 18,
    image: spark1,
    title: "Should Elon Musk be deported8?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 19,
    image: spark1,
    title: "Should Elon Musk be deported9?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
];
