// JS Goes here - ES6 supported

// Load instafeed
$(document).ready(function() {

    var userFeed = new Instafeed({
        get: 'user',
        userId: '5359496962',
        limit: 8,
        resolution: 'standard_resolution',
        accessToken: '5359496962.1677ed0.860c562fb32a492ea81afe4b83700374',
        sortBy: 'most-recent',
        template: '<div class="Grid-item"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });

    userFeed.run();

});

// Animate Hamburger
$(document).ready(function(){
  $(".Hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});


/* Mobile menu */

// set up namespace
var ab = ab || {};

$(function () {
    'use strict';

    // Mobile menu toggle functionality
    ab.mobileMenu = (function () {
      'use strict';

      var init = function() {

         /***
          * Run this code when the .toggle-menu link has been tapped
          * or clicked
          */
         $( '.Hamburger' ).on( 'touchstart click', function(e) {
          e.preventDefault();
          $(this).toggleClass("active");

          var $body = $( 'body' ),
              $page = $( '.Main' ),
              $menu = $( '.Mobile-menu' ),

              /* Cross browser support for CSS "transition end" event */
              transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';

          /* When the toggle menu link is clicked, animation starts */
          $body.addClass( 'animating' );

          /***
           * Determine the direction of the animation and
           * add the correct direction class depending
           * on whether the menu was already visible.
           */
          if ( $body.hasClass( 'menu-visible' ) ) {
           $body.addClass( 'right' );
          } else {
           $body.addClass( 'left' );
          }

          /***
           * When the animation (technically a CSS transition)
           * has finished, remove all animating classes and
           * either add or remove the "menu-visible" class
           * depending whether it was visible or not previously.
           */
          $page.on( transitionEnd, function() {
           $body
            .removeClass( 'animating left right' )
            .toggleClass( 'menu-visible' );

           $page.off( transitionEnd );
          } );
         } );
      }

      return {
            init: init
        };

    }());

    // initialise modules
    ab.mobileMenu.init();
});
