var canvas = d3.select("body").append("svg").attr("width", 500).attr("height", 500);

var circle = canvas.append("circle").attr("fill", "blue");

var circle = canvas.append("circle").attr("fill", "green");

var circle = canvas.append("circle").attr("fill", "red");

var circle = canvas.append("circle").attr("fill", "purple");

var circle = canvas.append("circle").attr("fill", "black");

var width = 300, height = 300
var nodes = [{}, {}, {}, {}, {}]

var links = [
    {source: 0, target: 1},
    {source: 0, target: 2},
    {source: 0, target: 3},
    {source: 3, target: 4},
]

var simulation = d3.forceSimulation(nodes)
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('link', d3.forceLink().links(links))
    .on('tick', ticked); 

function ticked() {
    var u = d3.select('svg')
        .selectAll('circle')
        .data(nodes)
        .join('circle')
        .attr('r', 5)
        .attr('cx', function(d) {
        return d.x
    })
    .attr('cy', function(d) {
        return d.y
    });
}

