/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();
        $(".nav-close").on("click",function(){
          $("body").removeClass("nav-opened").addClass("nav-closed")
        })
        $(".menu-button").on("click",function(){
          $("body").removeClass("nav-closed").addClass("nav-opened")
        })
    });

}(jQuery));
