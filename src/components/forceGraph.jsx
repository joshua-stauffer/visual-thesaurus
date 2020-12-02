import React from 'react';
import { RunForceGraph } from '../d3/runForceGraph.js';

export function ForceGraph({
  linksData,
  nodesData,
  clickNode,
  setSidebarId
}) {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    let destroyFn;
    if (containerRef.current) {
      const { destroy } = 
        RunForceGraph(
          containerRef.current,
          linksData,
          nodesData,
          clickNode,
          setSidebarId);
      destroyFn = destroy;
    }

    return destroyFn;
  }, []);

  return <div ref={containerRef} className="container" />;
}