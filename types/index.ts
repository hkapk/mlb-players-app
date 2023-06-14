import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface searchTeamProps {
    team: string;
    setTeam: (team: string) => void

}

export interface scoreProps {
    sport_key: "string";
    sport_title: "string";
    commence_time: "date";
    completed: "boolean";
    home_team: "string";
    away_team: "string";
    scores: [
        {
            name: "string";
            score: "number";
        }
    ];
    last_update: "date";
    id: "string";
}

