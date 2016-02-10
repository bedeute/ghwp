/*!
 * GroupHub to Wordpress Scripts
 * Author: bedeute
 * Email: bedeute@gmail.com
 */

(function($) {
  'use strict';

  // tabs
  // -------------------------
  $(function() {
		if ( window.location.hash ) {
			$('a[href="' + window.location.hash + '"]').addClass('current');
			$(window.location.hash).addClass('current');
		} else {
	    $('.ghwp-tabs li:nth-child(1) .ghwp-tab-item').addClass('current');
			$('.ghwp-tabs + .ghwp-tab-content .ghwp-tab-content-item:nth-child(1)').addClass('current');
		}

  	$('.ghwp-tabs .ghwp-tab-item').click(function(e){
  		var	tab_target = $(this).attr('href');
	  	var tab_nav = $('.ghwp-tabs .ghwp-tab-item');
	  	var tab_content = $('.ghwp-tabs + .ghwp-tab-content .ghwp-tab-content-item');

  		e.preventDefault();
  		e.stopPropagation();
  		history.pushState({}, '', this.href);

  		tab_nav.removeClass('current');
  		tab_content.removeClass('current');

  		$(this).addClass('current');
  		$(tab_target).addClass('current');
  	})
  });

  
  // multiselect trigger
  $(function() {
    $('.multiselect').multiselect();
  });

  //chosen trigger
  $('.chosen-select').each(function(){
    $(this).chosen({
  		disable_search_threshold: 10,
    	width: $(this).eq( 0 ).width() + 'px'
    });
  });

})(jQuery);
