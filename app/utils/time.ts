export function formatMilliseconds(ms: number): string {
  const hours = Math.floor(ms / (1000 * 60 * 60));
  ms %= 1000 * 60 * 60;

  const minutes = Math.floor(ms / (1000 * 60));
  ms %= 1000 * 60;

  const seconds = Math.floor(ms / 1000);

  return `${hours}h : ${minutes}m : ${seconds}s`;
}
