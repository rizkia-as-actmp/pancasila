import LeaderboardScreen from "./leaderboard";

async function getLeaderboards() {
  try {
    const res = await fetch(process.env.BASE_URL + `/api/leaderboards`, {
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch leaderboards: ${res.status} ${res.statusText}`,
      );
    }

    const data = await res.json();

    return data;
  } catch (error) {
    return { data: { leaderboards: [] } };
  }
}

export default async function LeaderboardPage() {
  const leaderboards = await getLeaderboards();

  if (!leaderboards.data || !leaderboards.data.leaderboards) {
    return <div>Error loading leaderboards</div>;
  }

  return (
    <>
      <LeaderboardScreen leaderboards={leaderboards.data.leaderboards} />
    </>
  );
}
