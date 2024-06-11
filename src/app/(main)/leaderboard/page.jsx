import LeaderboardScreen from "./leaderboard";

async function getLeaderboards() {
  try {
    const res = await fetch(process.env.BASE_URL + `/api/leaderboards`, {
      next: { revalidate: 0 },
    });

    // Check if response is okay
    if (!res.ok) {
      throw new Error(
        `Failed to fetch leaderboards: ${res.status} ${res.statusText}`,
      );
    }

    const data = await res.json();

    // Log the response for debugging
    console.log("Leaderboards data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching leaderboards:", error);
    // Return a default structure or handle the error appropriately
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
