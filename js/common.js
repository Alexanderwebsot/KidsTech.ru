$(document).ready(function () {
  $(".phone").mask("+7 (999) 999-9999");
  $('.select-beast').selectize({
      sortField: 'text'
  });
  $('.nav__menu__wrapper').on('click', function() {
  	let menu = $('.menu-block');
  	$(menu).toggleClass('menu-block__active');
  })
  $('ul.tabs li').click(function(){
  		var tab_id = $(this).attr('data-tab');

  		$('ul.tabs li').removeClass('current');
  		$('.tab-content').removeClass('current');

  		$(this).addClass('current');
  		$("#"+tab_id).addClass('current');
  	})
});