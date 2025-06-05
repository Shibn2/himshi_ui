import React from 'react';
import { getRandomNumber } from '../../utils';

const RectSvg= () => <svg viewBox="0 0 200 200">
<rect x="30" y="50" width={`${getRandomNumber(50, 150)}`} height="110" fill="#ff6b6b" />
</svg>;

const TriangleSvg = () => {
  const x = getRandomNumber(0, 200);
return <svg viewBox="0 0 200 200">
<path d={`M100,20 L180,${x} L20,180 Z`} fill="#ff6b6b" />
</svg>
}
const PentagonSvg = () => <svg viewBox="0 0 200 200">
<path d={`M100,20 L170,80 L140,${getRandomNumber(0, 200)} L60,170 L30,80 Z`} fill="#ff6b6b" />
</svg>

const HexagonSvg = () => <svg viewBox="0 0 200 200">
<path d={`M100,20 L173,60 L173,140 L100,180 L27,${getRandomNumber(0, 200)} L27,60 Z`} fill="#ff6b6b" />
</svg>

const OvalSvg = () => <svg viewBox="0 0 200 200">
<ellipse cx="100" cy="50" rx="80" ry="50" fill="#ff6b6b" />
</svg>

export {RectSvg,TriangleSvg,PentagonSvg,HexagonSvg,OvalSvg }