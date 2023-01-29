import React from 'react';
import { COLORS_PALETTE } from '../../mockData';

const BarGraph = ({ data }) => {
  const maxValue = Math.max(...data.map(obj => obj.value))

  const getBarColor = (index) => {
    const { length } = COLORS_PALETTE;

    return COLORS_PALETTE[index % length];
  }

  const getBarHeight = (value) => {
    const percentage = (value / maxValue) * 100;
    return percentage + '%';
  }

  return (
    <>
      <div className="graph_container">
        <ul className="bars">{data.map((bar, idx) => (
          <li
            key={idx}
            className="bar"
            style={{ backgroundColor: getBarColor(idx), minWidth: '25px', height: getBarHeight(bar.value) }}
          ></li>
        ))}

        </ul>
      </div>
      <ul className="labels">{data.map((bar, index) => (
        <li key={index} className="label">
          {bar.label}
        </li>
      ))}
      </ul>
    </>
  )
}

export default BarGraph;