import * as d3 from 'd3';


export function RunForceGraph(
  container,
  linksData,
  nodesData,
  clickFunc,
  mouseOverFunc
) {
  console.log('entering d3 code of force graph')

  // copy data
  const nodes = [...nodesData];
  const links = [...linksData];
  console.log('nodes' + nodes);
  console.log('links' + links)

  console.log('getting container:' + container)

  const containerRect = container.getBoundingClientRect();
  const height = containerRect.height;
  console.log('height:' + height)
  const width = containerRect.width;
  console.log('width:' + width)


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


  const getNodeColor = node => {
    if (node.group === 1) {
      return "rgb(13, 123, 166)"
    } else if (node.group === 2) {
      return "rgb(166, 41, 13)"
    } else {
      return "rgb(224, 206, 99)"
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
            .attr('font-family', 'sans-serif')
            .attr('font-size', 12)
            .text(d => d.label)
            .style('text-anchor', 'middle')
            .style('color', 'white')
            //.style('filter', 'drop-shadow( 1px 1px 1px rgba(0, 0, 0, .7))')
      );

  const linkElements = svg
    .append('g')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
    .selectAll('line')
    .data(links)
    .join('line')
        .attr('stroke-width', 2)


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
