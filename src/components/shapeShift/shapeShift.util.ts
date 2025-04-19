import {
  HexagonSvg,
  OvalSvg,
  PentagonSvg,
  RectSvg,
  TriangleSvg,
} from "./shapeShiftSvg";

function getSvgList() {
  const svgList = [RectSvg, TriangleSvg, PentagonSvg, HexagonSvg, OvalSvg];
  return svgList;
}

export { getSvgList };
