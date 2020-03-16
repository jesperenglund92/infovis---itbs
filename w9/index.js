import { select, scaleLinear, scaleBand, max, axisLeft, axisBottom } from 'd3';
import { data } from './data';

const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const keys = ['Sleep averaged', 'Sleep needed'];

var color = d3.scaleOrdinal()
  .domain(keys)
  .range(d3.schemeSet2);

const render = data => {
  const xValueNeeded = d => d.needed;
  const xValueAveraged = d => d.averaged;
  const yValue = d => d.grade;
  const margin = { top: 40, right: 40, bottom: 40, left: 80 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  
  const xScale = scaleLinear()
  	.domain([0, max(data, xValueNeeded)])
  	.range([0, innerWidth]);
  
  const xScaleTwo = scaleLinear()
  .domain([0, max(data, xValueAveraged)])
  .range([0, innerWidth]);
  
  const yScale = scaleBand()
  	.domain(data.map(yValue))
  	.range([0, innerHeight])
  	.padding(0.3);
  
  const g = svg.append('g')
  	.attr('transform', `translate(${margin.left},${margin.top})`);
  
	g.append('rect')
  
  g.append('g').call(axisLeft(yScale));
  g.append('g').call(axisBottom(xScale))
  	.attr('transform', `translate(0,${innerHeight})`);
  
  g.selectAll('.testone').data(data)
  	.enter().append('rect')
  		.attr('y', d => yScale(yValue(d)))
  		.attr('width', d => xScale(xValueNeeded(d)))
  		.attr('height', yScale.bandwidth())
  		.attr('class', 'testone');
  
  g.selectAll('.testtwo').data(data)
  .enter().append('rect')
    .attr('y', d => yScale(yValue(d)))
    .attr('width', d => xScale(xValueAveraged(d)))
    .attr('height', yScale.bandwidth())
    .attr('class', 'testtwo');
  
  g.selectAll("mydots")
  .data(keys)
  .enter()
  .append("circle")
    .attr("cx", function(d,i){ return margin.left + i*200})
    .attr("cy", -10)
    .attr("r", 7)
    .style("fill", function(d){ return color(d)});
  
  g.selectAll("mylabels")
  .data(keys)
  .enter()
  .append("text")
    .attr("x", function(d,i){ return margin.left + 20 + i*200})
    .attr("y", -10)
    .style("fill", function(d){ return color(d)})
    .text(function(d){ return d})
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")
  
};

render(data);