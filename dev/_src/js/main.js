/*
js/mw-libs: 
    sliders_init.js, 
    modals.js, 
    tabs.js, 
    trigger_show_hide.js, 
    open_close.js
    smooth-scroll.js, 
    menu-side-scroll.js 
    wpcf7-helpers.js,  
    dropdown_list.js, 
    add_animate.js,
    range_init.js, 
    accordeon_mobile.js,
    megamenu.js,
    menu-responsive.jquery.js, 
    search_mobile.js, 
    button_scroll_to_top.js, 
    mw-filter.js, 
    mw_mobile_nav.js
*/

/*
 *  
 * ----------------------------------------------------------------- 
*/

// jQuery v 3.3.1
// alert('main.js is Running! BEFORE');

jQuery(document).ready(function($) {

    var mobile_breakpoint = 768;   
    var viewportHeight = getViewportHeight(); //console.log(viewportHeight);
    var isCounterAllreadyStared = false;

// alert('main.js is Running!'); // +
console.log('main.js is Running!');

    // $("input[type=tel]").mask("+7 (999) 999-9999");

    // slidersInit(); // +

    // modals(); // +

    // tabs(); // + 

    // triggerShowHide(); // + 
    
    // openClose(); // +

    // smoothScrollMenu(); // +    
    
    // menuSideScroll(); // +

    // dropdownList(); // +

    // stickyElement(); // +

    // addAnimate(); // +

    // accordeonMobile(); // +

    // copyToBuffer('code, .label', { showTooltip: 1 }); // +


    if ( isMobileResolution(mobile_breakpoint) ) {

        // mobile only
    } else {
        // tablets, desktops
    }






    // var waypoint = new Waypoint({
    //     element: document.getElementById('section_prices'),
    //     handler: function(direction) {
    //         // console.log('Scrolled to waypoint!')

    //         if (!isCounterAllreadyStared ) {
    //             counterEffectLeafing(); 
    //             isCounterAllreadyStared = true;               
    //         }
    //     }
    // })
        

   


});


function isMobileResolution(mobile_breakpoint) {

    var container_width = jQuery(".container").innerWidth();
    var mobile_width = mobile_breakpoint;

    // console.log('isMobileResolution(): Hi, container_width: ' + container_width);
    return ( container_width < mobile_width );
}


function getViewportHeight(argument) {

    // $(window).resize(function() {
        viewportHeight = $(document).height(); // Высота всего документа)
        viewportHeight = $(window).height(); // Высота viewporta браузера
    // });        

    // console.log(viewportHeight);
    return viewportHeight;
} 