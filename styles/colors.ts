import common from "./colors/common";
import blue from "./colors/blue";
import cyan from "./colors/cyan";
import fuschia from "./colors/fuschia";
import gray from "./colors/gray";
import green from "./colors/green";
import indigo from "./colors/indigo";
import lime from "./colors/lime";
import orange from "./colors/orange";
import pink from "./colors/pink";
import red from "./colors/red";
import teal from "./colors/teal";
import yellow from "./colors/yellow";
import violet from "./colors/violet";

type ColorScale = {
  [key: number | string]: string;
};

const makeColorScale = (
  src: ColorScale,
  keyPrefix: string,
  primaryColorKey: string | number = 500
) => {
  return Object.fromEntries([
    ...Object.entries(src)
      .filter(([_key, value]) => value) // Filter out values not defined in color object (e.g. A100)
      .map(([key, value]) => [`${keyPrefix}-${key}`, value]),
    [keyPrefix, src[primaryColorKey]], // Alias value of primaryColorKey (e.g. blue-500 => blue)
  ]);
};

const colors = {
  ...common,
  ...makeColorScale(blue, "blue"),
  ...makeColorScale(cyan, "cyan"),
  ...makeColorScale(fuschia, "fuschia"),
  ...makeColorScale(gray, "gray"),
  ...makeColorScale(green, "green"),
  ...makeColorScale(indigo, "indigo"),
  ...makeColorScale(lime, "lime"),
  ...makeColorScale(orange, "orange"),
  ...makeColorScale(pink, "pink"),
  ...makeColorScale(red, "red"),
  ...makeColorScale(teal, "teal"),
  ...makeColorScale(yellow, "yellow"),
  ...makeColorScale(violet, "violet"),
};

export default colors;
