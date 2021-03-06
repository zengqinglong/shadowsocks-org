//
// Initialize all the things
//

(function($) {
  $(document).ready(function(){

    $("head").append("<link href='https://fonts.googleapis.com/css?family=Source+Code+Pro:200,400,700|Iceland|Titillium+Web:400,600,600italic' rel='stylesheet' type='text/css'>");

    // Navigational Menu ddsmoothmenu
    ddsmoothmenu.init({
      mainmenuid: "menu", //menu DIV id
      orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
      classname: 'navigation', //class added to menu's outer DIV
      //customtheme: ["#1c5a80", "#18374a"],
      contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
    });

    // add js class to html tag
    $('html').addClass('js');

    // responsive navigation
    selectnav('nav', {
      label: '- Navigation Menu - ',
      nested: true,
      indent: '-',
      autoselect: false
    });
  });

  // Adding a colortip to any tag with a data-tooltip attribute:
  $('[data-tooltip]').colorTip({color:'white'});

  // Initialize the QR codes
  $('#qrcode-1').qrcode("ss://YmYtY2ZiLWF1dGg6dGVzdEAxOTIuMTY4LjEwMC4xOjg4ODg");

  // Register QR generator
  $('#uri-plain').on('keyup change', function() {
    var encoded = 'ss://' + Base64.encode($(this).val().replace('ss://','')).replace(/=/g,'');
    $('#uri-encoded').val(encoded);
    $('#qrcode-gen').empty();
    $('#qrcode-gen').qrcode(encoded);
  });

  $(window).load(function() {
    // Flex Slider
    $('.flexslider').flexslider({
      animation: 'fade',
      animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
      slideshow: true,                //Boolean: Animate slider automatically
      slideshowSpeed: 4500,           //Integer: Set the speed of the slideshow cycling, in milliseconds
      animationSpeed: 700,             //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
      pauseOnHover: true,
      pauseOnAction:false,
      controlNav: true,
      directionNav: false,
      controlsContainer: '.flex-container'
    });
    $('#uri-plain').change();
  });

})(jQuery);

