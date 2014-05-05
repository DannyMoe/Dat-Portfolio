var navOpen = 0;

$('.mobile-nav').on('click', function() {
    console.log('mobile nav click fired!');
    if (navOpen === 0) {
        $('.top-nav').slideDown();
        navOpen = 1;
        return;
    }
    if (navOpen === 1) {
        $('.top-nav').slideUp();
        navOpen = 0;
        return;
    }
});

$('.project-thumb').on('click', function(event) {
    event.preventDefault();
    console.log('project clicked!');
    var projectTitle = $(this).prev('h4').html(),
        $expanded = $('.expanded');
    console.log(this);
    if (!projectTitle) {
        console.log('projectTitle not set!');
    }
    if (projectTitle === 'Amadeus Chamber Symphony') {
        $expanded.html('');
        $expanded.load('acs.html');
        $expanded.slideDown('slow');
    }
    if (projectTitle === 'Midwest Coin Concepts') {
        $expanded.html('');
        $expanded.load('mcc.html');
        if ($('window').width() >= 767) {
        		$('.pic-container').css({
        			width: '350px',
        			margin: '0 auto'
        		});
        }
        $expanded.slideDown();
    }
    $('header').css('height', '87');
    $('footer').css('top', '100px');
});

google.load('visualization', '1', {packages:['corechart']});
google.setOnLoadCallback(drawChart);

function drawChart() {
	var data = google.visualization.arrayToDataTable([
		['category', 'skills'],
		['design', 5],
		['code', 8]
	]);

	var options = {
		title: 'Skill Chart of Awesome',
		is3D: true,
		pieHole: true,
		colors: ['#2980b9', '#2c3e50'],
		backgroundColor: '#eee',
		chartArea: {left: '25%', top: 0, width: "100%", height: "100%"}
	};

	chart = new google.visualization.PieChart(document.getElementById('piechart'));
	chart.draw(data, options);
}