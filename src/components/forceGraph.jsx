import React from 'react';
import { useRef, useEffect } from 'react';
import { RunForceGraph } from '../d3/runForceGraph.js';

export function ForceGraph({
  linksData,
  nodesData,
  clickFunc,
  mouseOverFunc
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    let o = RunForceGraph(containerRef.current, linksData, nodesData, clickFunc, mouseOverFunc);
    return o.remove;
  }, [linksData, nodesData])


  return (
    <div ref={containerRef} className="container">
      <svg></svg>
    </div>
  )
}