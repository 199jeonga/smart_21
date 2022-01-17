import React from 'react'
import '../../style/viewBox.scss';

export default function viewBox() {
  return (
    <div id="viewBox">
      <ul className="view_inner">
        <li className="view_part_1">slide_01</li>
        <li className="view_part_2">slide_02</li>
        <li className="view_part_3">slide_03</li>
        <li className="view_part_4">slide_04</li>
        <li className="view_part_5">slide_05</li>
      </ul>
      <div className="view_btn">
        <button type="button">Next</button>
        <button type="button">Prev</button>
      </div>
    </div>
  )
}
