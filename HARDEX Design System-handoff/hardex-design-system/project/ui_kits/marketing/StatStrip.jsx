/* global React, Marquee */

function StatStrip() {
  const items = ["Low VOC · Green Chemistry", "In-house manufacturing", "TDS + MSDS every product", "Pan-India supply", "Custom formulation available", "Export quality certified", "ISO rigorous QC", "Contractor-proven"];
  return <Marquee items={items} tone="dark" />;
}

Object.assign(window, { StatStrip });
