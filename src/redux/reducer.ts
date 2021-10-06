import { ActionType } from "./ActionType";
import { Action } from "./Action";
import { AppState } from "./AppState";

// This function is NOT called direcrtly by you
export function Reduce(
  oldAppState: AppState = new AppState(),
  action: Action
): AppState {
  // Cloning the oldState (creating a copy)
  const newAppState = { ...oldAppState };

  switch (action.type) {
    case ActionType.getPremierLeague:
      let PremierLeague = action.payload;
      newAppState.premierLeague.push(PremierLeague);
      newAppState.premierLeague = [...newAppState.premierLeague];
      console.log(newAppState.premierLeague);
      break;
    case ActionType.getFrenchLeague:
      let french = action.payload;
      newAppState.ligue1.push(french);
      newAppState.ligue1 = [...newAppState.ligue1];
      //   console.log(newAppState.ligue1);
      break;
    case ActionType.getGermanLeague:
      let german = action.payload;
      newAppState.bundesliga.push(german);
      newAppState.bundesliga = [...newAppState.bundesliga];
      //   console.log(newAppState.bundesliga);
      break;
    case ActionType.getItalyLeague:
      let italy = action.payload;
      newAppState.serieA.push(italy);
      newAppState.serieA = [...newAppState.serieA];
      //   console.log(newAppState.serieA);
      break;
    case ActionType.getSpanishLeague:
      let spanish = action.payload;
      newAppState.laLiga.push(spanish);
      newAppState.laLiga = [...newAppState.laLiga];
      //   console.log(newAppState.laLiga);
      break;
  }
  return newAppState;
}
