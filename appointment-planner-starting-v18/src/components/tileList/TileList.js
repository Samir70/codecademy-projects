import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ data }) => {
  return (
    <div>
      {data.map(({name, ...rest}, i) => (
        <Tile key={i} name={name} description={rest} />
      ))}
    </div>
  );
};
