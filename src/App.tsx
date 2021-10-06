// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Tabs from "./components/Tabs";
// import { ActionType } from "./redux/ActionType";
// import { AppState } from "./redux/AppState";

// interface team {
//   name: string;
//   logo: string;
// }

// interface teamName {
//   name: string;
//   action: number;
// }

// // const leagueNames: teamName[] = [
// //   { name: "English Premier League", action: ActionType.getPremierLeague },
// //   { name: "French Ligue 1", action: ActionType.getFrenchLeague },
// //   { name: "German Bundesliga", action: ActionType.getGermanLeague },
// //   { name: "Italian Serie A", action: ActionType.getItalyLeague },
// //   { name: "Spanish La Liga", action: ActionType.getSpanishLeague },
// // ];

// const leagueNames: any[] = [
//   "English Premier League",
//   "French Ligue 1",
//   "Italian Serie A",
//   "Spanish La Liga",
// ];

// const fetchApi = async () => {
//   const response = await fetch(
//     `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English Premier League`
//   ).then((res) => res.json());
//   const league: team[] = [];
//   response.teams.forEach((team: { strTeam: any; strTeamBadge: any }) => {
//     league.push({ name: team.strTeam, logo: team.strTeamBadge });
//   });
//   return league;
// };

const App = () => {
  // const [premierLeague, setPremierLeague] = useState<team[]>([]);
  // const [ligue1, setLigue1] = useState<team[]>([]);
  // const [bundesliga, setBundesliga] = useState<team[]>([]);
  // const [seriaA, setSeriaA] = useState<team[]>([]);
  // const [laLiga, setLaLiga] = useState<team[]>([]);
  // // const dispatch = useDispatch();
  // // const premierLeague = useSelector((state: AppState) => state.premierLeague);

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     leagueNames.forEach(async (team) => {
  //       const response = await fetch(
  //         `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${team}`
  //       ).then((res) => res.json());
  //       // console.log(response);
  //       const league: team[] = [];
  //       response.teams.forEach((team: { strTeam: any; strTeamBadge: any }) => {
  //         league.push({ name: team.strTeam, logo: team.strTeamBadge });
  //       });
  //       switch (team) {
  //         case "English Premier League":
  //           setPremierLeague(league);
  //           break;
  //         case "French Ligue 1":
  //           setLigue1(league);
  //           break;
  //         case "German Bundesliga":
  //           setBundesliga(league);
  //           break;
  //         case "Italian Serie A":
  //           setSeriaA(league);
  //           break;
  //         case "Spanish La Liga":
  //           setLaLiga(league);
  //           break;
  //       }
  //     });
  //   };

  //   // dispatch({
  //   //   type: ActionType.getPremierLeague,
  //   //   // payload: { name: team.strTeam, logo: team.strTeamBadge },
  //   //   payload: response,
  //   // });
  //   // });
  //   // });
  //   // });
  //   fetchApi();
  //   // console.log(premierLeague);
  // }, []);

  return (
    <div className="app">
      <Tabs />
    </div>
  );
};

export default App;
