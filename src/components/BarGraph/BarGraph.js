import React from 'react';
import { COLORS_PALETTE } from '../../mockData';

const BarGraph = ({ data }) => {
  const maxValue = Math.max(...data.map(obj => obj.value))

  const getBarColor = (index) => {
    const { length } = COLORS_PALETTE;

    return COLORS_PALETTE[index % length];
  }

  const getBarHeight = (value) => {
    const barPercantageHeight = (value / maxValue) * 100;

    return barPercantageHeight + '%';
  }

  return (
    <>
      <div className="graph_container">
        <ul className="bars">{data.map((bar, idx) => (
          <li
            key={idx}
            className="bar"
            style={{ backgroundColor: getBarColor(idx), minHeight: '5px', height: getBarHeight(bar.value) }}
          ></li>
        ))}

        </ul>
      </div>
      <ul className="labels">{data.map((bar, idx) => (
        <li key={idx}>{bar.label}</li>
      ))}
      </ul>
    </>
  )
}

export default BarGraph;