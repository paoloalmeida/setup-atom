/*doc
---
title: Toggle JS
name:  basic
category: Javascript
---

Toggles should be used display show/hide comment. For example, showing/hiding a additional information on the search results page.
You can set the default as either active or inactive by specifying the class on the span to be either `toggleActive` or `toggleInactive`,
and setting (or not setting) the class `hideVisually` on the container that you are toggling.

Here's how you kick this off:

```html_example
<a href="#toggleArrow1" class="toggle toggleArrow " data-toggle-text="Fewer Options">More Options</a>
<div id="toggleArrow1" class="hideVisually">Yo, I got some content to show you. Lorem ipsum occaecat eiusmod Ut et sit sint quis qui labore in exercitation
  esse. Lorem ipsum in aliquip esse anim aliquip ullamco sit dolor in deserunt eu labore. Lorem ipsum magna
  officia in laborum fugiat proident cupidatat in ex aliquip velit officia nulla aliquip ut. Lorem ipsum
  nostrud ad Ut nulla velit qui esse tempor Excepteur consectetur pariatur enim.
</div>
```

```js_example
$(document).ready(function () {
  $('.toggle').truliaToggle();
});
```

Below are some methods you can also call on the toggle component and events you can listen to:

method          | description
----------------|------------------------
`toggle`        | Toggle the tooltip. Optional boolean argument to force active. Example: `$('.toggle').truliaToggle('toggle', true)`
**events**      |
`toggle`        | Listen to this event to perform an action when the toggle has changed state `$('.toggle').on('toggle', function (e, active) { if (active) console.log('I\m Active!') })`
*/


$(document).ready(function() {
    'use strict';
    // Parallax
    if ($(window).width() > 1024){
		skrollr.init({
			smoothScrolling: !1,
			forceHeight: !1
		})
    }

	// Enable check on list itens
	// = only-going
	//busca-passagens-ida-volta.html and busca-passagens-internacional-ida.html
	$('.only-going .list-flights li').click(function(){
		$('.only-going .list-flights li').removeClass('item-checked');
		$(this).addClass('item-checked');
		// Update header info from flight
		var data = $(this).data();
		$(".wrap-flights .logo-company").updateLogoCompany(data);
		$(".wrap-flights .description-flight").updateDescriptionFlightType1(data);
		$(".wrap-flights .price-per-adult .total-price").updateTotalPrice(data);
	});
    // National
	$('.national-flights-g .best-prices tr td').click(function(){
		$('.list-flights li').removeClass('item-checked');
		// Update header info from flight
		var data = $(this).data();
        $("body").scrollTo({
        	element: ".list-flights li[data-id="+data.id+"]",
        	off: "90"
        });
        var data1 = $(".list-flights li[data-id="+data.id+"]").data();
        $(".list-flights li[data-id="+data.id+"]").addClass('item-checked');
		$(".wrap-flights .logo-company").updateLogoCompany(data1);
		$(".wrap-flights .description-flight").updateDescriptionFlightType1(data1);
		$(".wrap-flights .price-per-adult .total-price").updateTotalPrice(data1);
	});
    // International
    $('.international-flights-g .best-prices tr td').click(function(){
		$('.list-flights li').removeClass('item-checked');
		// Update header info from flight
		var data = $(this).data();
        $("body").scrollTo({
        	element: ".list-flights li[data-id="+data.id+"]",
        	off: "90"
        });
        var data1 = $(".list-flights li[data-id="+data.id+"]").data();
        $(".list-flights li[data-id="+data.id+"]").addClass('item-checked');
		$(".wrap-flights .logo-company").updateLogoCompany(data1);
		$(".wrap-flights .description-flight").updateDescriptionFlightType1(data1);
		$(".wrap-flights .price-per-adult .total-price").updateTotalPrice(data1);
	});

	// = wrap-going (IDA)
    //busca-passagens-ida-volta.html
	$('.wrap-going .list-flights li').click(function(){
		$('.wrap-going .list-flights li').removeClass('item-checked');
		$(this).addClass('item-checked');
		//
		var data1 = $(this).data();
		///
		$(".company-one .logo-company").updateLogoCompany(data1);
		$(".company-one .description-flight").updateDescriptionFlightType1(data1);
		var data2 = $(".wrap-return .item-checked").data();
		$(".wrap-flights .price-per-adult .total-price").updateSumTotalPrice(data1, data2);
	});

	// = wrap-return (VOLTA)
    //busca-passagens-ida-volta.html
	$('.wrap-return .list-flights li').click(function(){
		$('.wrap-return .list-flights li').removeClass('item-checked');
		$(this).addClass('item-checked');

        // Update header info from flight
        var data1 = $(this).data();
        $(".company-two .logo-company").updateLogoCompany(data1);
        $(".company-two .description-flight").updateDescriptionFlightType1(data1);
	    var data2 = $(".wrap-going .item-checked").data();
	    $(".wrap-flights .price-per-adult .total-price").updateSumTotalPrice(data1, data2);
	});

    //Internacionl round trip
    $('.wrap-international .list-flights li').click(function(){
        $('.wrap-international .list-flights li').removeClass('item-checked');
        $(this).addClass('item-checked');

        //Update header info from flight
        var data1 = $(this).find(".company-going").data();
        var data2 = $(this).find(".company-return").data();
        var data3 = $(this).find(".content-price").data();

        $(".wrap-flights .company-one .logo-company").updateLogoCompany( data1 );
        $(".wrap-flights .company-one .description-flight").updateDescriptionFlightType1( data1 );
        $(".wrap-flights .company-two .logo-company").updateLogoCompany( data2 );
        $(".wrap-flights .company-two .description-flight").updateDescriptionFlightType1( data2 );
        $(".wrap-flights .price-per-adult .total-price").updateTotalPrice( data3 );
    });

    $('.international-flights-gr .best-prices tr td').click(function(){
		$('.list-flights li').removeClass('item-checked');
		// Update header info from flight
		var data = $(this).data();

        $("body").scrollTo({
        	element: ".list-flights li[data-id="+data.id+"]",
        	off: "90"
        });

        //Update header info from flight
        var data1 = $(".list-flights li[data-id="+data.id+"] .company-going").data();
        var data2 = $(".list-flights li[data-id="+data.id+"] .company-return").data();
        var data3 = $(".list-flights li[data-id="+data.id+"] .content-price").data();

		$(".list-flights li[data-id="+data.id+"]").addClass('item-checked');
        $(".wrap-flights .company-one .logo-company").updateLogoCompany( data1 );
        $(".wrap-flights .company-one .description-flight").updateDescriptionFlightType1( data1 );
        $(".wrap-flights .company-two .logo-company").updateLogoCompany( data2 );
        $(".wrap-flights .company-two .description-flight").updateDescriptionFlightType1( data2 );
        $(".wrap-flights .price-per-adult .total-price").updateTotalPrice( data3 );
	});

    //Multidestiny round trip
    $('.multiply .list-flights li').click(function(){
        $('.multiply .list-flights').children("li").removeClass('item-checked');
        $(this).addClass('item-checked');

        $(".wrap-flights .container-multiple-destiny").html("");

        $(this).children(".wrap-list-destiny").find("li").each( function( index, element ){

        $(element).data("id",index+1);
        var data = [];
        data = $(element).data();

        $(".wrap-flights .container-multiple-destiny").updateDescriptionFlightType2(data);
        });

        var dataPrice = $(this).find(".content-price").data();

        $(".wrap-flights .price-per-adult .total-price").updateTotalPrice(dataPrice);

    });

    $('.multiple-flights .best-prices tr td').click(function(){

        var data = $(this).data();

        $('.multiply .list-flights').children("li").removeClass('item-checked');
        $(".list-flights li[data-id="+data.id+"]").addClass('item-checked');

        $(".wrap-flights .container-multiple-destiny").html("");

        $(".list-flights li[data-id="+data.id+"]").children(".wrap-list-destiny").find("li").each( function( index, element ){
            $(element).data("id",index+1);
            var data = [];
            data = $(element).data();

            $(".wrap-flights .container-multiple-destiny").updateDescriptionFlightType2(data);
        });

        var dataPrice = $(".list-flights li[data-id="+data.id+"] .content-price").data();

        $(".wrap-flights .price-per-adult .total-price").updateTotalPrice(dataPrice);

		// var dataid = $(this).data();

        $("body").scrollTo({
        	element: ".list-flights li[data-id="+data.id+"]",
        	off: "120"
        });
	});

    // Show/Hide diff dates
    $('.diff-dates').change(function() {
		if ($(this).is(':checked')) {
			$('.container-diff-dates').hide();
		$(".date-container.hotel input").removeAttr("required");
		} else {
			$('.container-diff-dates').show();
			$(".date-container.hotel input").attr("required","required");
		}
	});
});

/* @Packages - Redefine Search */

// Going
$('.bt-redefine-search').click(function(){
	$('#search-going, #search-international-going-return, #search-international-going, #search-international, #search-international-only, #search-multi').velocity('fadeOut', {duration:400});
	$('.best-prices-container').velocity('slideUp', {duration:1000});
	$('.search-container-tickets').velocity('slideUp', {duration:500});
	$('.tab-search').velocity('fadeIn', {duration:400});
	$('.search-container-tickets').velocity('slideDown', {duration:500});
	menuFixed();
});

/* Show / Hide Hotels elements */

// Button Change bedroom
$('.bt-change-bedroom').click(function(){
	$('.hotel-details').velocity('slideUp', {duration:500});
	$('.hotel-details section').hide();
	$('.tabs-hotel-info li a').removeClass('active');
	$(this).parent().parent().parent().find('.bedroom-select').show();
	$(this).parent().parent().parent().find('.hotel-details').velocity('slideDown', {duration:500});
	$('.tab-bedrooms').removeClass('active');
	$(this).parent().parent().parent().find('.tab-bedrooms').addClass('active');
});

// Button Hide
$('.link-hide-window').click(function(){
	var currentItem = $(this).parent().parent();
	if(currentItem.hasClass('item-checked')){
		currentItem.find('.bt-change-bedroom').show().removeClass('btn-red').text('ALTERAR QUARTO');
	};
	$('.hotel-details').velocity('slideUp', {duration:500});
});

// Button Reserved
$('.btn-reserve').click(function(){
	// Add check to hotel
	$('.item-hotel').removeClass('item-checked');
	$(this).parent().parent().parent().parent().parent().parent().addClass('item-checked');

	var currentData = $(this).parent("li").data();

	var currentItem = $(this).parent().parent().parent().parent().parent().parent();

	// Add check to bedroom
	$('.list-item-bedrooms li .check').addClass('item-disabled');
	$(this).parent().find('.check').removeClass('item-disabled');

	// Change text
	$('.list-item-bedrooms li button').removeClass('btn-reserved').addClass('btn-reserve').html('RESERVAR AGORA');
	$(this).removeClass('btn-reserve').addClass('btn-reserved').html('RESERVADO');

	// Show Check
	currentItem.find('.bedroom-selected').show();
	currentItem.find('.bt-change-bedroom').hide();

	// Updated data
	currentItem.data("mainPrice", currentData.price);
	currentItem.data("mainRoom", currentData.room);

	// Update itens
	$(".item-selected .wrap-flights").updateDescriptionHotel( currentItem.data() );
	currentItem.find(".link-bedroom-hotel").updateBedRoomHotel( currentItem.data() );
	currentItem.find(".content-price .price-value").updatePriceBedRoomPrice( currentItem.data() );

	// Add button 'Escolher Quarto'
	$(".item-hotel:not(.item-checked) .bt-change-bedroom").show().addClass('btn-red').text('ESCOLHER QUARTO');
	$(".item-hotel:not(.item-checked) .bedroom-selected").hide();

    // Activate next step, if is packages
    

});

// Enable button change bedroom
// var $tabFind =
$('.tab-overview').click(function(){
	$('.hotel-details section').hide();
	$('.bedroom-overview').show();
	$('.hotel-details').velocity('slideUp', {duration:500});
	$(this).parent().parent().parent().parent().find('.hotel-details').velocity('slideDown', {duration:500});
	$('.tabs-hotel-info li a').removeClass('active');
	$(this).addClass('active');
});
$('.tab-services').click(function(){
	$('.hotel-details section').hide();
	$('.bedroom-services').show();
	$('.hotel-details').velocity('slideUp', {duration:500});
	$(this).parent().parent().parent().parent().find('.hotel-details').velocity('slideDown', {duration:500});
	$('.tabs-hotel-info li a').removeClass('active');
	$(this).addClass('active');
});
$('.tab-photos').click(function(){
	$('.hotel-details section').hide();
	$('.bedroom-photos').show();
	$('.hotel-details').velocity('slideUp', {duration:500});
	$(this).parent().parent().parent().parent().find('.hotel-details').velocity('slideDown', {duration:500});
	$('.tabs-hotel-info li a').removeClass('active');
	$(this).addClass('active');
});
$('.tab-maps').click(function(){
	$('.hotel-details section').hide();
	$('.bedroom-map').show();
	$('.hotel-details').velocity('slideUp', {duration:500});
	$(this).parent().parent().parent().parent().find('.hotel-details').velocity('slideDown', {duration:500});
	$('.tabs-hotel-info li a').removeClass('active');
	$(this).addClass('active');
});
$('.tab-bedrooms').click(function(){
	$('.hotel-details section').hide();
	$('.bedroom-select').show();
	$('.hotel-details').velocity('slideUp', {duration:500});
	$(this).parent().parent().parent().parent().find('.hotel-details').velocity('slideDown', {duration:500});
	$('.tabs-hotel-info li a').removeClass('active');
	$(this).addClass('active');
});
$('.title-hotel h4').click(function(){
	$('.hotel-details section').hide();
	$('.bedroom-overview').show();
	$('.hotel-details').velocity('slideUp', {duration:500});
	$(this).parent().parent().parent().parent().find('.hotel-details').velocity('slideDown', {duration:500});
	$('.tabs-hotel-info li a').removeClass('active');
	$('.tab-overview').addClass('active');
});
$('.see-all-services').click(function(){
	$('.hotel-details').velocity('slideUp', {duration:500});
	$('.hotel-details section').hide();
	$('.bedroom-services').show();
	$(this).parent().parent().parent().parent().velocity('slideDown', {duration:500});
	$('.tabs-hotel-info li a').removeClass('active');
	$('.tab-services').addClass('active');
});

$('.link-all-photos').click(function(){
	$('.hotel-details').velocity('slideUp', {duration:500});
	$('.hotel-details section').hide();
	$('.bedroom-photos').show();
	$(this).parent().parent().parent().parent().velocity('slideDown', {duration:500});
	$('.tabs-hotel-info li a').removeClass('active');
	$('.tab-photos').addClass('active');
});

$('.list-thumb-photos-bedroom li').click(function(){
	$('.hotel-details').velocity('slideUp', {duration:500});
	$('.hotel-details section').hide();
	$('.bedroom-photos').show();
	$(this).parent().parent().parent().parent().parent().velocity('slideDown', {duration:500});
	$('.tabs-hotel-info li a').removeClass('active');
	$('.tab-photos').addClass('active');
});

/* Slider */
var sliders = [];

$('.bxslider').each(function(i){
		sliders[i] = $(this).bxSlider({
		pagerCustom: '.item-hotel[data-id='+(i+1)+'] .bx-pager'
	});
});
