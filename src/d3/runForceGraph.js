import * as d3 from 'd3';


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
  d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links)
                      .id(d => d.id)
                      .strength(d => d.strength)
                      .distance(125))
    .force('charge', d3.forceManyBody().strength(-90))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide([45]));


  const svg = d3.select(container).select('svg')
    .attr('viewBox', [0, 0, width, height]);

  const blues = ["#e3eef9","#cfe1f2","#b5d4e9","#93c3df","#6daed5","#4b97c9","#2f7ebc","#1864aa","#0a4a90","#08306b"];
  const greens = ["#e8f6e3","#d3eecd","#b7e2b1","#97d494","#73c378","#4daf62","#2f984f","#157f3b","#036429","#00441b"];
  const oranges = ["#fee8d3","#fdd8b3","#fdc28c","#fda762","#fb8d3d","#f2701d","#e25609","#c44103","#9f3303","#7f2704"];
  const reds = ["#fee3d6","#fdc9b4","#fcaa8e","#fc8a6b","#f9694c","#ef4533","#d92723","#bb151a","#970b13","#67000d"];

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
      // canary yellow "#ffef00"
    }
  };

  
  const getRadius = node => node.level === 1 ? 5 : 45;

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

    return d3.drag()
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
        .attr('fill-opacity', 0.75)
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
            .style('color', 'white')
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
