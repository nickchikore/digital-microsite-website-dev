function initHeader(){
  var darkTheme = $('body').hasClass('dark');
  if(!darkTheme){
    $('.header').load('../templates/_light-header.html');
    $('.footer').load('../templates/_light-footer.html');
    $('.landing .header').load('../templates/_lite-header-light.html');
    //$('.landing .footer').load('../templates/_lite-footer-light.html');
  }
  else if(darkTheme){
    $('.header').load('../templates/_header.html');
    $('.footer').load('../templates/_footer.html');
    $('.landing .header').load('../templates/_lite-header-dark.html');
    //$('.landing .footer').load('../templates/_lite-footer-dark.html');
  }

  $('.logo img').on('load',function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });


}

function initCarousel(){
  var slideqty = $('#featured .item').length;
  var wheight = $(window).height();
  var randSlide = Math.floor(Math.random()*slideqty);

  $('.item img').each(function() {
    var imgSrc = $(this).attr('src');
    //var capHeight = $(this).siblings().attr('height');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    //$(this).siblings('div').css('height', capHeight);
    $(this).parent().addClass('fullheight');
    $(this).remove();
  });

  $('.fullheight').css('height', wheight);

  $(window).resize(function() {
    wheight = $(window).height();
    $('.fullheight').css('height', wheight);
  });

  $('.carousel-control').css('display','none');
  $('.carousel-indicators').css('display','none');

  $('#hp_carousel').carousel({
    interval: 7500
  });

  console.log('Carousel Initialized and working');
}//carousel

function initFilter(){
  console.log('Filter is Initialized');

  var wheight = $(window).height();

  $('.filterWrapper').css('height', wheight);
  $('.filter').css('height', wheight);
  $('.selectOption p').addClass('trigger col-xs-12');
  $('.selectOption p span').addClass('glyphicon');
  $('.selectOptionGroup > p').click(function(){
    $(this).parent().toggleClass('active');
    $(this).parent().siblings().removeClass('active');

  });

  $('.selectOption .trigger').click(function(){
    //var currStateIcon = $('.selectOption p').hasClass('glyphicon-menu-down');
    $(this).parent().toggleClass('focused');
    $(this).parent().siblings().removeClass('focused');

      $(this).find('span').toggleClass('glyphicon-menu-down');
      $(this).find('span').toggleClass('glyphicon-menu-up');

      if($(this).parent().hasClass('focused')){
        $(this).parent().siblings().children('p').find('span').removeClass('glyphicon-menu-up');
        $(this).parent().siblings().children('p').find('span').addClass('glyphicon-menu-down');
      }

  });
}

function setTileAttributes(){
    $('.tile img').each(function() {
      var imgSrc = $(this).attr('src');
      var wheight = $(window).height();
      $(this).parent().css({'background-image': 'url('+imgSrc+')'});
      $(this).parent().css('height', wheight/2 );
      $(this).parent().css('background-size', 'cover');
      $(this).parent().css('background-position', 'center 0px');
      $(this).remove();

    });
    $(window).resize(function() {
      wheight = $(window).height();
      $('.tile a').css('height', wheight/2 );
    });
}

function initTriggers(){
  console.log('Triggers initialised');
  initFilterTrigger();

  function initFilterTrigger(){
    createfilterTrigger();
    fireTrigger();
    initlayoutSelector();

    function fireTrigger(){
      var triggerAnim = $('.filter-trigger');
      var layoutAnim = $('layoutSelectors');

      $(triggerAnim).on('click', function(){
        $('.filterWrapper').toggleClass('show');
        $('.filter-trigger').toggleClass('on');
      });

    }

    function createfilterTrigger(){
      var filterTrigger = '<span class="filter-trigger"><span><i></i></span><span><i></i></span><span><i></i></span></span>';

      $('.triggers').append(filterTrigger);

      $('.filter-trigger').css('display', 'block');
      $('.filter-trigger').css('position', 'absolute');
      $('.filter-trigger').css('top', '1em');
      $('.filter-trigger').css('right', '1em');
      $('.filter-trigger').css('z-index', '5');
      $('.filter-trigger').css('width', '40px');
      $('.filter-trigger').css('height', '40px');

      $('.filter-trigger').find('span').css('width', '100%');
      $('.filter-trigger').find('span').css('background', 'orange');
      $('.filter-trigger').find('span').css('display', 'block');
      $('.filter-trigger').find('span').css('height', '5px');
      $('.filter-trigger').find('span').css('margin', '12px 0');
      $('.filter-trigger').find('span').css('border-radius', '4px');
      $('.filter-trigger span:first-of-type').css('margin-top', '3px');
      $('.filter-trigger').find('span').css('position', 'relative');
      //$('.filter-trigger').find('span').css('box-shadow', '1px 2px 3px #333');

      $('.filter-trigger').find('i').css('position', 'absolute');
      $('.filter-trigger').find('i').css('display', 'block');
      $('.filter-trigger').find('i').css('background', 'orange');
      $('.filter-trigger').find('i').css('width', '12px');
      $('.filter-trigger').find('i').css('border', '1px solid orange');
      $('.filter-trigger').find('i').css('height', '12px');
      $('.filter-trigger').find('i').css('border-radius', '12px');
      $('.filter-trigger').find('i').css('top', '-3px');
      $('.filter-trigger').find('i').css('z-index', '2');

    }

    function initlayoutSelector(){

      var layoutSelectors = '<span class="layoutSelectors">' +
                            '<span class="selector two"><span></span><span></span></span>' +
                            '<span class="selector three"><span></span><span></span><span></span></span>' +
                            '<span class="selector four"><span></span><span></span><span></span><span></span></span>' +
                            '</span>';
      //createSelectors();

      function createSelectors(){
        $('.triggers').append(layoutSelectors);

        $('.layoutSelectors').css('display', 'block');
        $('.layoutSelectors').css('position', 'absolute');
        $('.layoutSelectors').css('top', '5em');
        $('.layoutSelectors').css('right', '1em');
        $('.layoutSelectors').css('z-index', '5');
        $('.layoutSelectors').css('width', '45px');
        $('.layoutSelectors').css('height', 'auto');

        $('.selector').css('display', 'block');
        $('.selector').css('width', '45px');
        $('.selector').css('height', 'auto');
        $('.selector > span').css('border', '1px solid orange');

        $('.selector > span').css('display', 'inline-block');
        $('.selector > span').css('background', 'rgba(255,255,255,0.3)');
        $('.selector > span').css('margin', '5px 2px');

        $('.selector').each(function(){
          var selSize = $('.selector.two').children().length;
          var selSize1 = $('.selector.three').children().length;
          var selSize2 = $('.selector.four').children().length;

          var swidth = $('.selector').width();
          var smargin = 4;
          var sborder = 2;
          var selWidth = swidth/selSize - (smargin + sborder);
          var selWidth1 = swidth/selSize1- (smargin + sborder);
          var selWidth2 = swidth/selSize2- (smargin + sborder);

          $('.selector.two > span').width(selWidth);
          $('.selector.three > span').width(selWidth1);
          $('.selector.four > span').width(selWidth2);
          $('.selector.two > span').height(selWidth);
          $('.selector.three > span').height(selWidth1);
          $('.selector.four > span').height(selWidth2);
        });



      }

    }

  }
}

function landingCtrls(){
  var isLandingPg = $('body').hasClass('landing');
  var closeBtn = '<span class="closeBtn"><span></span><span></span></span>';

  if(isLandingPg){
    $('.ctrls').append(closeBtn);
      console.log('Close button initialised');

    $('.closeBtn').click(function(){
      window.location.href = "../cases/";
    });

  }
}

$(window).load(function() {
    $(".se-pre-con").fadeOut("slow");
    initHeader();
    initTriggers();
    landingCtrls();
  });

function formInit(){
  var input = $( "form input:checkbox" );
  input.click(function(){
  	$(this).parent().toggleClass('checked');
  });
}
