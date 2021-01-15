import {
  drag as d3Drag,
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  select
} from 'd3';

export function RunForceGraph(
  container,
  linksData,
  nodesData,
  clickFunc,
  mouseOverFunc
) {

  // copy data
  const nodes = [...nodesData];
  const links = [...linksData];
  const containerRect = container.getBoundingClientRect();
  const height = containerRect.height;
  const width = containerRect.width;

  const simulation = 
  forceSimulation(nodes)
    .force('link', forceLink(links)
                      .id(d => d.id)
                      .strength(d => d.strength)
                      .distance(125))
    .force('charge', forceManyBody().strength(-90))
    .force('center', forceCenter(width / 2, height / 2))
    .force('collision', forceCollide([45]));


  const svg = select(container).select('svg')
    .attr('viewBox', [0, 0, width, height]);

  const blues = ["#6daed5","#4b97c9","#2f7ebc","#1864aa","#0a4a90","#08306b"];
  const reds = ["#f9694c","#ef4533","#d92723","#bb151a","#970b13","#67000d"];

  const getNodeColor = node => {
    // synonym colors
    if (node.group === 1) {
      return blues[Math.floor(Math.random() * blues.length)]
    // antonym colors
    } else if (node.group === 2) {
      return reds[Math.floor(Math.random() * reds.length)]
    } else {
      // center node color
      return "#385749ff"
    }
  };

  
  const getRadius = node => 
    node.level === 1 ? 5 
    : node.level === 0 ? 60
    : 45;

  const drag = simulation => {
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return d3Drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended);
  }

  const linkElements = svg
  .append('g')
    .attr('stroke', '#999')
    .attr('stroke-opacity', 0.6)
  .selectAll('line')
  .data(links)
  .join('line')
      .attr('stroke-width', 2)

  const nodeElements = svg.append('g')
    .selectAll('circle')
    .data(nodes)
    .join(
      enter =>
        enter.append('circle')
        .attr('r', getRadius)
        .attr('fill', getNodeColor)
        .attr('fill-opacity', 0.95) // 0.75
        .call(drag(simulation))
      .on('mouseover', (e, d) => mouseOverFunc(d.id))
      .on('mouseout', () => mouseOverFunc(null))
      .on('click', (e, d) => {
        mouseOverFunc(null);
        clickFunc(d.id);
      }),
      update => update,
      exit =>
        exit.remove()
    )

  const textElements = svg.append('g')
      .selectAll('text')
      .data(nodes)
      .join(
        enter =>
          enter.append('text')
            .attr('font-family', 'Quicksand')
            .attr('font-size', '1.5rem')
            .text(d => d.label)
            .style('text-anchor', 'middle')
            .style('fill', 'white')
            .style('letter-spacing', '0.1rem')
            //.style('filter', 'drop-shadow( 1px 1px 1px rgba(0, 0, 0, .7))')
      );




  simulation.nodes(nodes).on('tick', () => {
    nodeElements
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
    textElements
      .attr('x', d => d.x)
      .attr('y', d => d.y)
    linkElements
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y)
  })

  return {
    remove: () => svg.selectAll('*').remove()
  }
}
