import { Paper, Typography } from "@mui/material";
import React from "react";
import "./Tile.scss";

type Props = {
  title: string;
  imageUrl: string;
  alt?: string;
  href?: string;
};

export const Tile = (props: Props) => {
  return (
    <Paper className="tile" elevation={4}>
      <a href={props.href ?? "#"}>
        <div className="tile-image">
          <img src={props.imageUrl} alt={props.alt} />
        </div>
        <div className="tile-title">
          <Typography variant="h5">{props.title}</Typography>
        </div>
      </a>
    </Paper>
  );
};
