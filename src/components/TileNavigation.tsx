import React from "react";
import borisBoat from "../images/boat1.jpg";
import donaldBoat from "../images/donaldboat.jpg";
import dinoBoat from "../images/dinoboat.jpg";
import flyingBoat from "../images/flyingboat.jpg";
import tpain from "../images/tpain.jpg";
import { Tile } from "./Tile";

type Props = {};

interface ITile {
  title: string;
  imageUrl: string;
  alt: string;
  href: string;
}
const tiles: ITile[] = [
  {
    title: "Donald Trump on a boat",
    href: "#donald",
    alt: "Donald",
    imageUrl: donaldBoat
  },
  {
    title: "Boris on a boat",
    href: "#boris",
    alt: "Boris",
    imageUrl: borisBoat
  },
  {
    title: "Wikipedia Boat",
    href: "#wikipedia",
    alt: "Wiki",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Motorboat_at_Kankaria_lake.JPG"
  },
  {
    title: "Dino Boat",
    href: "#dino",
    alt: "Dino",
    imageUrl: dinoBoat
  },
  {
    title: "Flying Boat",
    href: "#flying",
    alt: "Flying",
    imageUrl: flyingBoat
  },
  {
    title: "T-Pain on a boat",
    href: "#tpain",
    alt: "T-Pain",
    imageUrl: tpain
  }
];

export const TileNavigation = (props: Props) => {
  console.log(tiles);

  return (
    <>
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          title={tile.title}
          imageUrl={tile.imageUrl}
          href={tile.href}
          alt={tile.alt}
        />
      ))}
    </>
  );
};
