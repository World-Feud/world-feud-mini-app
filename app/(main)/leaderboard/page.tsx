import styles from "./Leaderboard.module.scss";

const users = [
  { rank: 1, name: "John Doe", answeredQuestions: 42, earnedPoints: 100 },
  { rank: 2, name: "Jane Smith", answeredQuestions: 37, earnedPoints: 90 },
  { rank: 3, name: "Alice Johnson", answeredQuestions: 35, earnedPoints: 85 },
  { rank: 4, name: "Bob Brown", answeredQuestions: 33, earnedPoints: 80 },
  { rank: 5, name: "Charlie Davis", answeredQuestions: 30, earnedPoints: 75 },
  { rank: 6, name: "Diana Evans", answeredQuestions: 28, earnedPoints: 70 },
  { rank: 7, name: "Ethan Harris", answeredQuestions: 25, earnedPoints: 65 },
  { rank: 8, name: "Fiona Green", answeredQuestions: 22, earnedPoints: 60 },
];

export default function LeaderboardView() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Leaderboard</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Rank</th>
            <th className={styles.th}>User Name</th>
            <th className={styles.th}>Answered Questions</th>
            <th className={styles.th}>Earned Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.rank}>
              <td className={styles.td}>{user.rank}</td>
              <td className={styles.td}>{user.name}</td>
              <td className={styles.td}>{user.answeredQuestions}</td>
              <td className={styles.td}>{user.earnedPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
