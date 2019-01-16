var container = d3.select('#scrolly-overlay');
var stepSel = container.selectAll('.step');

function updateChart(index) {
	var sel = container.select('[data-index=\'' + index + '\']');
	var width = sel.attr('data-width');
	stepSel.classed('is-active', function (d, i) {return i === index;});
	container.select('.bar-inner').style('width', width);
}

function init() {
	Stickyfill.add(d3.select('.sticky').node());

	enterView({
		selector: stepSel.nodes(),
		offset: 0.5,
		enter: function enter(el) {
			var index = +d3.select(el).attr('data-index');
			updateChart(index);
		},
		exit: function exit(el) {
			var index = +d3.select(el).attr('data-index');
			index = Math.max(0, index - 1);
			updateChart(index);
		} });

}

init();


function movecircle(index) {
	var sel = container2.select('[data-index=\'' + index + '\']');
	var opacity = sel.attr('data-opacity');
	stepSel2.classed('is-active', function (d, i) {return i === index;});
	container2.select('.circle').style('opacity', opacity);
}



