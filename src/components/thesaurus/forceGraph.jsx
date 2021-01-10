import React from 'react';
import { useRef, useEffect } from 'react';
import { RunForceGraph } from '../../d3/runForceGraph.js';

export function ForceGraph({
  activeLinks,
  activeNodes,
  clickNode,
  changeToHover
}) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    let o = RunForceGraph(containerRef.current, activeLinks, activeNodes, clickNode, changeToHover);
    return o.remove;
  }, [activeLinks, activeNodes])


  return (
    <div ref={containerRef} className="container">
      <svg></svg>
    </div>
  )
}