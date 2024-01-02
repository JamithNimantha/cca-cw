(function($) {
	function hero() {

		var window_w = $(window).innerWidth();
		
		if(window_w > 1300) {
			var pana_w = 180;
		} else if( window_w > 1200 ) {
			var pana_w = 100;
		} else {
			var pana_w = 60;
		}

		var hero_w = $('.hero-section').innerWidth();
		var pa_length = (($('.pana-accordion-item').length - 1) * pana_w);
		var hero_iw = hero_w - pa_length;

		var window_h = $(window).innerHeight();
		$('.pana-accordion-item').each(function() {
			$(this).height(window_h);
		});
		accordion.init({
			id: 'accordion',
			expandWidth: hero_iw,
			itemWidth: pana_w,
			autoPlay: false,
			borderWidth: 0
		});
		
	}
	
	hero();

	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});
	
})(jQuery);

