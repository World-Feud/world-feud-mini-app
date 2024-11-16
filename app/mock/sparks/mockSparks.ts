import avatar from "@mock/sparks/img/avatar.png";
import techBackground from "@assets/images/tech-battle.png";
import pricePrediction from "@assets/images/price-prediction.png";
import learnCode from "@assets/images/learn-code.png";
import cryptoEvent from "@assets/images/crypto-event.png";
import { StaticImageData } from "next/image";

type Card = {
  id: number;
  category: string;
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
    category: "Politics",
    image: techBackground,
    title: "What's the hottest tech right now?",
    user: { username: "green_pineapple420", avatarImage: avatar },
  },
  {
    id: 2,
    category: "Crypto",
    image: pricePrediction,
    title: "How much will $WLD cost in 2025?",
    user: { username: "destructor", avatarImage: avatar },
  },
  {
    id: 3,
    category: "Sports",
    image: learnCode,
    title: "What is the most popular sport in the world?",
    user: { username: "Glacé", avatarImage: avatar },
  },
  {
    id: 4,
    category: "Pop Culture",
    image: cryptoEvent,
    title: "What is the hottest DevCon event in Bangkok?",
    user: { username: "Popcorn", avatarImage: avatar },
  },
];
