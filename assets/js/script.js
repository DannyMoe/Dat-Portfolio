
function changeDiv(e) {
		var $this = $(this),
			href = $this.attr('href');
			
				
			e.preventDefault();
			$('.eventualNav li a').removeClass('selected');
			$this.addClass('selected');
			$('div.work').children().hide();
			
		switch (href) {
			case '#work':
			$('div.work a').fadeIn('fast');
			break;
			case '#blog':
			$('div.blog').fadeIn('fast');
			break;
			case '#about':
			$('div.about').fadeIn('fast');
			break;
			case '#hire':
			$('div.hire').fadeIn('fast');
			break;
		}
		
}

function showProject(e) {
	var href = $(this).attr('href'),
		acs = $('#acs'),
		mcc = $('#mcc');
		
	e.preventDefault();
	switch(href) {
		case '#acs':
		mcc.hide();
		acs.slideDown();
		break;
		case '#mcc':
		acs.hide();
		mcc.slideDown();
	}
}

function toggleActive(e) {
	$('.eventualNav li')
}

jQuery(function($) {

	$('.eventualNav li a').click(changeDiv);
	
		$(document).delegate('.work a', 'click', showProject);
		$('.work a').mouseEnter(showProject);


});