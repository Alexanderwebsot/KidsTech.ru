$(document).ready(function () {
  $(".phone").mask("+7 (999) 999-9999");
  $('.select-beast').selectize({
      sortField: 'text'
  });
  $('.catalog-block__img_slider').slick({
    arrows: null,
    asNavFor: '.catalog-content__block_slider'
  })
  $('.catalog-content__block_slider').slick({
    slidesToShow: 5,
    focusOnSelect: true,
    asNavFor: '.catalog-block__img_slider',
  })
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
  $('.on-c').on('click', function() {
    return false;
  })
});
$(document).ready(function() {
    $(".set > a").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .siblings(".content")
          .slideUp(200);
        $(".set > a i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
      } else {
        $(".set > a i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
        $(this)
          .find("i")
          .removeClass("fa-plus")
          .addClass("fa-minus");
        $(".set > a").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this)
          .siblings(".content")
          .slideDown(200);
      }
    });
  });