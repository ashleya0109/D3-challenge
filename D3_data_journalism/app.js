// set the dimensions and margins of the graph
var margin = {top: 30,
  right: 30,
  bottom: 30,
  left: 30},
    width = 960 - margin.left - margin.right,
    height = 660 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#scatter")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Load data 
d3.csv("data.csv").then(function(scatter) {

  // Print the tvData
  console.log(scatter);

// Add X axis
var x = d3.scaleLinear()
.domain([0, 24])
.range([ 0, width ]);
svg.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x));

// Add Y axis
var y = d3.scaleLinear()
.domain([0, 28])
.range([ height, 0]);
svg.append("g")
.call(d3.axisLeft(y));



// Add dots
svg.append('g')
.selectAll("dot")
.data(scatter)
.enter()
.append("circle")
  .attr("cx", function (d) { return x(d.poverty); } )
  .attr("cy", function (d) { return y(d.healthcare); } )
  .attr("r", 10)
  .style("fill", "#69b3a2")

  svg.selectAll("text")
                .data(scatter)
                .enter()
                .append("text")
                .text(function(d) { return d.abbr ; } )
                .attr('text-anchor', 'middle')
                .attr("dx", function(d) { return x(d.poverty); } )
                .attr("dy", function (d) { return y(d.healthcare); } )
                .attr('transform','translate(0,4.5)')
                .attr("font_family", "sans-serif")  // Font type
                .attr("font-size", "9px")  // Font size
                .attr("fill", "blank");   // Font color

    
})
