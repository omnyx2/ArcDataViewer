// components/BitmapRenderer.tsx
import React from 'react';

// 각 셀의 크기
const CELL_SIZE = 20;

// 색상 매핑 함수 (값에 따라 다른 색상을 매핑)
const getColor = (value: number): string => {
  const colors = [
    '#252525', //# black
    '#0074D9', //# blue
    '#FF4136', //# red
    '#37D449',// #2ECC40', # green
    '#FFDC00',// # yellow
    '#E6E6E6',// # grey
    '#F012BE',// # pink
    '#FF871E', //# orange
    '#54D2EB',// #7FDBFF', # light blue
    '#8D1D2C',//#870C25', # brown
    '#FFFFFF'
  ]
  return colors[value % colors.length]; // 값에 따라 색상 선택
};

type BitmapRendererProps = {
  data: number[][];
};

const BitmapRenderer: React.FC<BitmapRendererProps> = ({ data }) => {
  return (
    <div
      style={{
        display: 'grid',
	padding: "10px",
	border: "1px white",
        gridTemplateColumns: `repeat(${data[0].length}, ${CELL_SIZE}px)`,
        gap: '0px', // 셀 간격
      }}
    >
      {data.flat().map((value, index) => (
        <div
          key={index}
          style={{
            width: CELL_SIZE,
            height: CELL_SIZE,
            backgroundColor: getColor(value),
            border: '1px solid #ccc', // 셀 테두리
          }}
        />
      ))}
    </div>
  );
};

export default BitmapRenderer;

