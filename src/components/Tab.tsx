import React from "react";
// import { useSelector } from "react-redux";
// import { AppState } from "../redux/AppState";

type team = {
  name: string;
  logo: string;
};

type Props = {
  index: number;
  teams: team[];
  title: string;
  isSelected: boolean;
  setSelectedTab: (teams: team[]) => void;
};

const Tab: React.FC<Props> = ({
  index,
  teams,
  title,
  isSelected,
  setSelectedTab,
}) => {
  return (
    <button
      className={isSelected ? "tab-selected" : "tab"}
      onClick={() => setSelectedTab(teams)}
    >
      <h3>{title}</h3>
    </button>
  );
};

export default Tab;
