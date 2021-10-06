import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { AppState } from "../redux/AppState";
import Tab from "./Tab";

interface team {
  name: string;
  logo: string;
}

// interface teamName {
//   name: string;
//   action: number;
// }

const leagueNames: any[] = [
  "English Premier League",
  "French Ligue 1",
  "German Bundesliga",
  "Italian Serie A",
  "Spanish La Liga",
];

const Tabs = () => {
  const [premierLeague, setPremierLeague] = useState<team[]>([]);
  const [ligue1, setLigue1] = useState<team[]>([]);
  const [bundesliga, setBundesliga] = useState<team[]>([]);
  const [seriaA, setSeriaA] = useState<team[]>([]);
  const [laLiga, setLaLiga] = useState<team[]>([]);
  const [selectedTab, setSelectedTab] = useState<team[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      leagueNames.forEach(async (team) => {
        const response = await fetch(
          `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${team}`
        ).then((res) => res.json());
        const league: team[] = [];
        response.teams.forEach((team: { strTeam: any; strTeamBadge: any }) => {
          league.push({ name: team.strTeam, logo: team.strTeamBadge });
        });
        switch (team) {
          case "English Premier League":
            setPremierLeague(league);
            break;
          case "French Ligue 1":
            setLigue1(league);
            break;
          case "German Bundesliga":
            setBundesliga(league);
            break;
          case "Italian Serie A":
            setSeriaA(league);
            break;
          case "Spanish La Liga":
            setLaLiga(league);
            break;
        }
      });
    };
    fetchApi();
  }, []);

  const handleClickTab = (teams: team[]) => {
    setSelectedTab(teams);
  };

  return (
    <>
      <div className="tabs">
        <Tab
          index={0}
          teams={laLiga}
          title="La-liga"
          isSelected={laLiga === selectedTab ? true : false}
          setSelectedTab={handleClickTab}
        />
        <Tab
          index={1}
          teams={premierLeague}
          title="Premier-League"
          isSelected={premierLeague === selectedTab ? true : false}
          setSelectedTab={handleClickTab}
        />
        <Tab
          index={2}
          teams={ligue1}
          title="Ligue1"
          isSelected={ligue1 === selectedTab ? true : false}
          setSelectedTab={handleClickTab}
        />
        <Tab
          index={3}
          teams={bundesliga}
          title="Bundesliga"
          isSelected={bundesliga === selectedTab ? true : false}
          setSelectedTab={handleClickTab}
        />
        <Tab
          index={4}
          teams={seriaA}
          title="Serie-A"
          isSelected={seriaA === selectedTab ? true : false}
          setSelectedTab={handleClickTab}
        />
      </div>
      <div className="teams">
        {selectedTab.map((team, index) => (
          <div key={index} className="card">
            <img src={team.logo} />
            <h2>{team.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
