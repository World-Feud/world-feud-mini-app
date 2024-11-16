const MOCKED_POLLS = [
  {
    id: 1,
    title: "Poll 1",
    usersCount: 10,
    amount: 100,
    timeLeft: 1000,
    created_at: String(new Date()),
    expired_at: String(new Date(Date.now() + 1000 * 60 * 60 * 24)),
    option_1: "Option 1",
    option_2: "Option 2",
  },
];

export default function Polls() {
  return (
    <div>
      {MOCKED_POLLS.length === 0 && <span>no poll</span>}
      {MOCKED_POLLS.map((poll) => (
        <div key={poll.id}>
          <span>Id: {poll.id}</span>
          <br />
          <span>Created At: {poll.created_at}</span>
          <br />
          <span>Expired At: {poll.expired_at}</span>
          <br />
          <span>Option 1: {poll.option_1}</span>
          <br />
          <span>Option 2: {poll.option_2}</span>
          <br />
          <span>Title: {poll.title}</span>
          <br />
        </div>
      ))}
    </div>
  );
}
