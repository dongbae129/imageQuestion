import React from "react";
import "../css/ProgressBar.css";
type ProgressPercent = {
  percent: number;
};
function ProgressBar({ percent }: ProgressPercent) {
  return (
    <div className="progress-bar-boundary">
      <div style={{ width: `${percent}%` }}>{percent}%</div>
    </div>
  );
}
export default ProgressBar;
