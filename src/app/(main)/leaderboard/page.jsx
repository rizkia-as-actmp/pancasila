import LeaderboardScreen from "./leaderboard";

async function getLeaderboards() {
    const res = await fetch(process.env.BASE_URL + `/api/leaderboards`, {
        next: { revalidate: 0 },
    }).then((r) => r.json());
    return res;
}

export default async function LeaderboardPage() {
    const leaderboards = await getLeaderboards();
//
    return (
        <>
            <LeaderboardScreen leaderboards={leaderboards.data.leaderboards} />
        </>
    );
}
