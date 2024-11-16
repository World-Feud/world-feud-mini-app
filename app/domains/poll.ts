export type Poll = {
    id: number;
    title: string;
    usersCount: number;
    amount: number;
    // ms
    timeLeft: number;
    imgUrl?: string;
};
