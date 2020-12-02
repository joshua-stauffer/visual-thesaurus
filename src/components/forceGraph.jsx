import React from 'react';
import { useRef, useEffect } from 'react';
import { RunForceGraph } from '../d3/runForceGraph.js';

export function ForceGraph({
  linksData,
  nodesData,
  clickNode,
  setSidebarId
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    let o = RunForceGraph(containerRef.current, linksData, nodesData, clickNode, setSidebarId);
    return o.remove;
  }, [linksData, nodesData])


  return (
    <div ref={containerRef} className="container">
      <svg></svg>
    </div>
  )
}