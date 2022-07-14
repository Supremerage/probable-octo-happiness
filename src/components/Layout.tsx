import { Paper, Typography } from "@mui/material";
import React from "react";
import logo from "../images/boat.jpg";
import "./Layout.scss";

type Props = {
  children?: React.ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <section className="main-content">
      <div className="paper">
        <header className="content-header">
          <img src={logo} alt="logo" />
          <Typography variant="h1">The Greatest Boats</Typography>
        </header>
        <div className="content-body">{props.children}</div>
      </div>
    </section>
  );
};
