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

/* Search Tabs */
// $('.nav-tabs li a').click(function(e) {
//     e.preventDefault();
//     $(this).tab('show');
// });
/* /Search Tabs */

$('.tab-hotels').click(function() {
	$('.search-container').removeClass('packages').removeClass('tickets');
	$('.search-container').addClass('hotels');
	$('.links-breadcrumbs').html('<li><a href="">Esfera</a></li><li><a href="">SuperBônus</a></li><li><a href="" class="active">Hotéis</a></li>');
});

$('.tab-tickets').click(function() {
	$('.search-container').removeClass('packages').removeClass('hotels');
	$('.search-container').addClass('tickets');
	$('.links-breadcrumbs').html('<li><a href="">Esfera</a></li><li><a href="">SuperBônus</a></li><li><a href="" class="active">Passagens</a></li>');
});

$('.tab-packages').click(function() {
	$('.search-container').removeClass('tickets').removeClass('hotels');
	$('.search-container').addClass('packages');
	$('.links-breadcrumbs').html('<li><a href="">Esfera</a></li><li><a href="">SuperBônus</a></li><li><a href="" class="active">Pacotes</a></li>');
});

//


// var iconTab = $("a i");
// $(iconTab).hide();

// $('.nav-tabs li').hasClass('active');

// $('.nav-tabs li').click(function() {
// 	// var selectedTab = ;

// 	if (selectedTab.hasClass('active')) {
// 		// console.log(selectedTab);
// 		$(this).find(iconTab).show;
// 	}
// });

// $('.nav-tabs li').click(function() {
// 	if ($(this).is('.active')) {
// 		$(this).find(iconTab).show();
// 	}
// 	return false;
// });

/* Slider Dragable */

// Bonus
$(function() {
	$( '#slider-bonus' ).slider({
		range: true,
		min: 0,
		max: 200000,
		values: [ 0, 200000 ],
		slide: function( event, ui ) {
			$( '#amount' ).val(ui.values[ 0 ] + '                         ' + ui.values[ 1 ] );
		}
	});
	$( '#amount' ).val($( '#slider-bonus' ).slider( 'values', 0 ) +
	'                         ' + $( '#slider-bonus' ).slider( 'values', 1 ) );
});

// Going Hour
$(function() {
	$( '#slider-going-time' ).slider({
		range: true,
		min: 0,
		max: 1439,
		values: [ 0, 1439 ],
		slide: function( event, ui ) {
			$( '#going-hour' ).val(convertToTimeFormat(ui.values[0]) + '                         ' + convertToTimeFormat(ui.values[1]));
		}
	});
	$( '#going-hour' ).val( convertToTimeFormat($( '#slider-going-time' ).slider( 'values', 0) ) +'                         ' + convertToTimeFormat($( '#slider-going-time' ).slider( 'values', 1) ));
});

// Return Hour
$(function() {
	$( '#slider-return-time' ).slider({
		range: true,
		min: 0,
		max: 1439,
		values: [ 0, 1439 ],
		slide: function( event, ui ) {
			$( '#return-hour' ).val(convertToTimeFormat(ui.values[ 0 ]) + '                         ' + convertToTimeFormat(ui.values[ 1 ] ));
		}
	});
	$( '#return-hour' ).val(convertToTimeFormat($( '#slider-return-time' ).slider( 'values', 0 )) +'                         ' + convertToTimeFormat($( '#slider-return-time' ).slider( 'values', 1 ) ));
});

// Flight duration
$(function() {
	$( '#slider-flight-duration' ).slider({
		range: true,
		min: 0,
		max: 1439,
		values: [ 0, 1439 ],
		slide: function( event, ui ) {
			$( '#flight-duration' ).val(convertToTimeFormat(ui.values[ 0 ]) + '                         ' + convertToTimeFormat(ui.values[ 1 ]) );
		}
	});
	$( '#flight-duration' ).val(convertToTimeFormat($( '#slider-flight-duration' ).slider( 'values', 0 )) + '                         ' + convertToTimeFormat($( '#slider-flight-duration' ).slider( 'values', 1 )) );
});

/* Select bedroom hotels */
$(document).ready(function () {
    var $bedrooms = $('.select-bedroom select');
    $bedrooms.change(function () {
        var numRooms = $(this).find('option:selected').val();
        var $listBedRooms = $('.list-bedroom article');

        $listBedRooms.each(function () {
            var $obj = $(this);
            if ($obj.attr('class').replace('bh-', '') <= numRooms) $obj.show();
            else $obj.hide();
        });
    });

    $bedrooms.change();

    var $listBedRooms = $('.list-bedroom article');
    $listBedRooms.each(function () {
        var $obj = $(this);
        var $selectChild = $obj.find('.select-child');

        $selectChild.change(function () {
            var numChilds = $(this).find('option:selected').val();

            var $item = $(this).closest('article');
            var $room = $item.find('.child-age-hotel');

            if (numChilds == 0) $room.hide();
            else {
                $room.show();

                var $childAges = $room.find('.col-md-age');

                $childAges.each(function () {
                    var $childAge = $(this);
                    var child = $childAge.attr('class').replace('c-select col-md-age hotel-child-', '');
                    if (child <= numChilds) {
                        $childAge.show();
                    } else {
                        $childAge.hide();
                    }
                });
            }
        });
        $selectChild.change();
    });
});
/* Select bedroom hotels */


/* Select bedroom packages */
$(document).ready(function () {
    var $bedrooms = $('.select-bedroom-package select');
    $bedrooms.change(function () {
        var numRooms = $(this).find('option:selected').val();
        var $listBedRooms = $('.list-bedroom-package article');

        $listBedRooms.each(function () {
            var $obj = $(this);
            if ($obj.attr('class').replace('bh-', '') <= numRooms) $obj.show();
            else $obj.hide();
        });
    });

    $bedrooms.change();

    var $listBedRooms = $('.list-bedroom-package article');
    $listBedRooms.each(function () {
        var $obj = $(this);
        var $selectChild = $obj.find('.select-child');

        $selectChild.change(function () {
            var numChilds = $(this).find('option:selected').val();

            var $item = $(this).closest('article');
            var $room = $item.find('.child-age-hotel');

            if (numChilds == 0) $room.hide();
            else {
                $room.show();

                var $childAges = $room.find('.col-md-age');

                $childAges.each(function () {
                    var $childAge = $(this);
                    var child = $childAge.attr('class').replace('c-select col-md-age hotel-child-', '');
                    if (child <= numChilds) {
                        $childAge.show();
                    } else {
                        $childAge.hide();
                    }
                });
            }
        });
        $selectChild.change();
    });
});

/* /Select bedroom packages */

/* Disable Button Return */
$(".tickets-form .nav-flying input[name=navFlyingTkt]:radio").change(function () {
	radioGoingValue = $(this).val();

	if (radioGoingValue == 'ida') {

        $(".date-container.no-journey").hide();
        $(".date-container.multi").hide();
        $(".date-container.one-way").show();
        $(".multidest").remove();

        $(".one-way .going-date").datepicker({
            minDate: '+1D',
            numberOfMonths: 2
        });

	} else if(radioGoingValue == "tripmulti") {

        journeys.id = 1;

        $(".date-container.no-journey").hide();
        $(".date-container.multi").show();
        $(".date-container.one-way").hide();

        // $("#date-arrive-jrn1").datepicker({
        //     minDate: '+1D',
        //     numberOfMonths: 2
        // });

        $('.journey-'+ journeys.id +' .datepicker').datepicker({
            minDate: '+1D',
            numberOfMonths: 2
        });

        $("#tab-tickets .flying-class").addJourney();
        $("#tab-tickets .flying-class").addJourney();
        $(".addBtn.journey-2").hide();

        $(document).on('click', ".addJourney" , function(e) {
            //alert("click");
            e.preventDefault();

            $(this).parent().hide();

            $("#tab-tickets .flying-class").addJourney();
        });

        $(document).on('click', ".rmvJourney" , function(e) {
            e.preventDefault();

            $("#tab-tickets .flying-class").rmvJourney();

            $("#tab-tickets .journey-"+journeys.id+" .addBtn").show();
        });

    } else {

        $(".date-container.no-journey").show();
        $(".date-container.multi").hide();
        $(".date-container.one-way").hide();

		// $("#date-return-tickets").prop('disabled', false).show();
        $(".multidest").remove();
	}


});
/* Disable Button Return */

/* Slide od more flight-details */
$('.bt-more-details').click(function() {
	if ($(this).text() == 'OCULTAR') {
		$(this).parent().parent().find('.flight-details').slideUp();
		$('.bt-more-details').text('VER MAIS');
	} else{
		$('.flight-details').slideUp();
		$('.bt-more-details').text('VER MAIS');
		$(this).text('OCULTAR');
		$(this).parent().parent().find('.flight-details').slideDown();
	};
});
/* /Slide od more flight-details */



/* Star Rate */
// $("#stars").rating({
// });
/* /Star Rate */

/* Brazilian initialisation for the jQuery UI date picker plugin. */
/* Written by Leonildo Costa Silva (leocsilva@gmail.com). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['pt-BR'] = {
	closeText: 'Fechar',
	prevText: '&#x3C;Anterior',
	nextText: 'Próximo&#x3E;',
	currentText: 'Hoje',
	monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
	'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
	monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
	'Jul','Ago','Set','Out','Nov','Dez'],
	dayNames: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
	dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
	dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
	weekHeader: 'Sm',
	dateFormat: 'dd/mm/yy',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['pt-BR']);

return datepicker.regional['pt-BR'];

}));

/* Datepicker */
$.datepicker.regional['pt-BR'].dayNamesMin = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
$.datepicker.setDefaults($.datepicker.regional['pt-BR']);

// Set diff in days
function setDays(fD, sD) {
	if (fD != null && sD != null) {
		$('.night-count .count').html(daysBetween(fD, sD));
	}
}

function daysBetween(firstDate, secondDate) {
	var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
	var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
	return diffDays;
}

// Hotel
$(function () {
    $('#tab-hotels #datepicker').datepicker({
        minDate: '+1D',
        numberOfMonths: 2,
        beforeShowDay: function (date) {
            var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('#tab-hotels .going-date').val());
            var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('#tab-hotels .return-date').val());
            setDays(date1, date2);
            if (date1 && (date.getTime() == date1.getTime()))
                return [true, "dp-highlight dp-highlight-first"];
            if (date2 && (date.getTime() == date2.getTime()))
                return [true, "dp-highlight dp-highlight-last"];
            return [true, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? 'dp-highlight' : ''];
        },
        onSelect: function (dateText, inst) {
            var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('#tab-hotels .going-date').val());
            var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('#tab-hotels .return-date').val());
            if (!date1 || date2) {

                $('#tab-hotels .going-date').val(dateText);
                $('#tab-hotels .return-date').val('');
                $(this).datepicker('option', 'minDate', dateText);
            } else {
                $('#tab-hotels .return-date').val(dateText);
                $(this).datepicker('option', 'minDate', '+1D');
            }
        }
    });
    // Set datepicker to show on hover
    $('#tab-hotels #datepicker').hide();
    $('.date-container').hover(function () {
        $('#tab-hotels #datepicker').show();
    }, function () {
        $('#tab-hotels #datepicker').hide();
    });
});

// Tickets
$(function () {
    $('#datepicker-tickets').datepicker({
        minDate: '+1D',
        numberOfMonths: 2,
        beforeShowDay: function (date) {
            var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('.no-journey .going-date').val());
            var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('.no-journey .return-date').val());
            setDays(date1, date2);
            if (date1 && (date.getTime() == date1.getTime()))
                return [true, "dp-highlight dp-highlight-first"];
            if (date2 && (date.getTime() == date2.getTime()))
                return [true, "dp-highlight dp-highlight-last"];
            return [true, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? 'dp-highlight' : ''];
        },
        onSelect: function (dateText, inst) {
            var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('.no-journey .going-date').val());
            var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('.no-journey .return-date').val());
            if (!date1 || date2) {

                $('.no-journey .going-date').val(dateText);
                $('.no-journey .return-date').val('');
                $(this).datepicker('option', 'minDate', dateText);
            } else {
                $('.no-journey .return-date').val(dateText);
                $(this).datepicker('option', 'minDate', '+1D');
            }
        }
    });
    // Set datepicker to show on hover
    $('#datepicker-tickets').hide();
    $('.date-container').hover(function () {
        $('#datepicker-tickets').show();
    }, function () {
        $('#datepicker-tickets').hide();
    });
});

// Packages Travel
$(function () {
    $('#datepicker-packages-travel').datepicker({
        minDate: '+1D',
        numberOfMonths: 2,
        beforeShowDay: function (date) {
            var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('.travel .going-date').val());
            var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('.travel .return-date').val());
            setDays(date1, date2);
            if (date1 && (date.getTime() == date1.getTime()))
                return [true, "dp-highlight dp-highlight-first"];
            if (date2 && (date.getTime() == date2.getTime()))
                return [true, "dp-highlight dp-highlight-last"];
            return [true, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? 'dp-highlight' : ''];
        },
        onSelect: function (dateText, inst) {
            var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('.travel .going-date').val());
            var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('.travel .return-date').val());
            if (!date1 || date2) {

                $('.travel .going-date').val(dateText);
                $('.travel .return-date').val('');
                $(this).datepicker('option', 'minDate', dateText);
            } else {
                $('.travel .return-date').val(dateText);
                $(this).datepicker('option', 'minDate', '+1D');
            }
        }
    });
    // Set datepicker to show on hover
    $('#datepicker-packages-travel').hide();
    $('.date-container.travel').hover(function () {
        $('#datepicker-packages-travel').show();
    }, function () {
        $('#datepicker-packages-travel').hide();
    });
});

// Packages Hotel
$(function () {
    $('#datepicker-packages-hotel').datepicker({
        minDate: '+1D',
        numberOfMonths: 2,
        beforeShowDay: function (date) {
            var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('.hotel .going-date').val());
            var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('.hotel .return-date').val());
            setDays(date1, date2);
            if (date1 && (date.getTime() == date1.getTime()))
                return [true, "dp-highlight dp-highlight-first"];
            if (date2 && (date.getTime() == date2.getTime()))
                return [true, "dp-highlight dp-highlight-last"];
            return [true, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? 'dp-highlight' : ''];
        },
        onSelect: function (dateText, inst) {
            var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('.hotel .going-date').val());
            var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $('.hotel .return-date').val());
            if (!date1 || date2) {

                $('.hotel .going-date').val(dateText);
                $('.hotel .return-date').val('');
                $(this).datepicker('option', 'minDate', dateText);
            } else {
                $('.hotel .return-date').val(dateText);
                $(this).datepicker('option', 'minDate', '+1D');
            }
        }
    });
    // Set datepicker to show on hover
    $('#datepicker-packages-hotel').hide();
    $('.date-container.hotel').hover(function () {
        $('#datepicker-packages-hotel').show();
    }, function () {
        $('#datepicker-packages-hotel').hide();
    });
});


/* /Datepicker */

/* Autocomplete */
$(function() {
	$('.search-autocomplete').autocomplete({
		delay: 500,
		minLength: 3,
		source: function(request, response) {
			$.getJSON('data-fake.json', {
				term: request.term
			}).done(function(data) {
				var array = data.error ? [] : $.map(data.movies, function(m) {
					return {
						icon: m.icon,
						label: m.label
					};
				});
				response(array);
			});
		}
	});

	$('.search-autocomplete').each(function() {
	    $(this).data('ui-autocomplete')._renderItem = function(ul, item) {
			var $a = $('<p></p>');
			$('<i class="m-fa-icon"</i>').addClass(item.icon).appendTo($a);
			$('<span class="m-name"></span>').text(item.label).appendTo($a);
			return $('<li></li>').append($a).appendTo(ul);
		};
	});
});
/* /Autocomplete */

/*!
Waypoints Sticky Element Shortcut - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(s){this.options=e.extend({},i.defaults,t.defaults,s),this.element=this.options.element,this.$element=e(this.element),this.createWrapper(),this.createWaypoint()}var e=window.jQuery,i=window.Waypoint;t.prototype.createWaypoint=function(){var t=this.options.handler;this.waypoint=new i(e.extend({},this.options,{element:this.wrapper,handler:e.proxy(function(e){var i=this.options.direction.indexOf(e)>-1,s=i?this.$element.outerHeight(!0):"";this.$wrapper.height(s),this.$element.toggleClass(this.options.stuckClass,i),t&&t.call(this,e)},this)}))},t.prototype.createWrapper=function(){this.$element.wrap(this.options.wrapper),this.$wrapper=this.$element.parent(),this.wrapper=this.$wrapper[0]},t.prototype.destroy=function(){this.$element.parent()[0]===this.wrapper&&(this.waypoint.destroy(),this.$element.removeClass(this.options.stuckClass).unwrap())},t.defaults={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"},i.Sticky=t}();
function menuFixed() {
	if( $('.item-selected').length ) {
		var waypoint = new Waypoint.Sticky({
		  element: $('.item-selected')
		});
	}
}
// Call Menu Fixed
menuFixed();

// Global Regex

var telRegexp = /\([0-9]{2}\)[ ]{1}[0-9]{4}[-]{1}[0-9]{4,5}/;
var dtRegexp = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;

//Validation forms

// Hotel Form
var validator1 = $(".hotel-form").validate();

// Travels Form
var validador2 = $(".tickets-form").validate();

// Package
var validador3 = $(".packages-form").validate();

// Contact Us
var validador4 = $(".contact-form").validate({
  rules: {
    "contact-tel": {
      telephone: true
    }
  }
});

// @tel
$.validator.addMethod("telephone", function(value) {
  if(value.length >= 15)
    return true;
  else
    return telRegexp.test(value);
}, 'Telefone inválido');

// Set default messages
jQuery.extend(jQuery.validator.messages, {
    required: "Obrigatório",
    maxlength: "Máximo {0} caracteres.",
    email: "Email inválido"
});

// Mask
$('.hotel-form .going-date, .hotel-form .return-date').mask('00/00/0000');

var SPMaskBehavior = function (val) {
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
spOptions = {
  onKeyPress: function(val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
};

$('[name="contact-tel"]').mask(SPMaskBehavior, spOptions);
var markers = new Array();
var map;
var infowindow;
var locations;


$.getJSON( "./locations.json", function( data ) {

    locations = data.locations;

  });


function initialize() {

  /* STATIC CONTENT */
  var mapOptions = {
    zoom: 12,
    scrollwheel: false,
    center: new google.maps.LatLng(-23.56,-46.62)
  };


  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  infowindow = new google.maps.InfoWindow();

  google.maps.event.addListener(infowindow, 'domready', function(){

    $('#map-canvas .buy').click(function() {
        /* TO DO: Scroll to result */
        var _id = $(this).attr("data-id");
        $("body").scrollTo("li[data-id="+_id+"]");
        //()
    });

  });

  /* add Markers */

  for (var i = 0; i < locations.length; i++) {
        addMarker(locations[i].id, locations[i].lat, locations[i].lng);
  }
}


$("#openMap").click(function(){
  $(this).parent().hide();
  $("#map-canvas").show();
  initialize();
})

function addMarker(_id ,_lat, _lng) {

  var marker, i;

  marker = new google.maps.Marker({
      position: new google.maps.LatLng(_lat, _lng),
      map: map
    });

  marker._id = _id;

  markers.push(marker);

  google.maps.event.addListener(marker, 'click', (function(marker) {

      return function() {
          //
          getHotelContent(_id ,_lat, _lng, function(data) {
            infowindow.setContent( data );
            infowindow.open(map, marker);
          });

      }
  })(marker));

}

function getHotelContent(_id, _lat, _lng, callback) {


            /* STATIC CONTENT */

            var content = "";

            content += '<div class="wrap-infowindow">';
            content += '<picture class="logo-hotel">';
            content += '<img src="images/thumb-hotel.jpg" alt="Hotel">';
            content += '</picture>';
            content += '<div class="hotel-info">';
            content += ' <div class="title-hotel">';
            content += '<h4>Hotel Bellagio</h4>';
            content += '<div class="rating-hotel">';
            content += ' <i class="icon-star"></i>';
            content += '<i class="icon-star"></i>';
            content += ' <i class="icon-star"></i>';
            content += ' <i class="icon-star"></i>';
            content += ' <i class="icon-star"></i>';
            content += ' </div>';
            content += ' <div class="clearfix"></div>';
            content += ' <p class="h-local"><b>Las Vegas (TheStrip) - <a href="#">Ver Mapa</a></b></p>';
            content += ' </div>';
            content += '<div class="rating-trip">';
            content += ' <img src="images/thumb-temporary-trip.jpg" alt="">';
            content += '</div>';
            content += ' <a href="#" class="link-bedroom-hotel"><i class="icon-green-bed"></i>Quarto Casal Standard</a>';
            content += ' <p class="text-mini-detail">Cerca de 1.000 fontes dançam com música e luz em frente a este hotel em estilo europeu, localizado ao longo da Strip...</p>';
            content += '<p class="text-right"><button data-id="'+_id+'" class="buy btn btn-red btn-sm">Comprar</button></p>';
            content += ' </div>';
            content += ' </div>';

            callback(content);
    // });
}

/* Function to Show Marker on Map */

function getMarkerPositionByLocation(_id ,_lat, _lng) {

  for (var m in markers) {

    if (markers[m].getPosition().lat() == _lat && markers[m].getPosition().lng() == _lng){

      getHotelContent(_id, markers[m].getPosition().lat(), markers[m].getPosition().lng(), function(data) {
        infowindow.setContent( data );
        infowindow.open(map, markers[m]);
      });
      break;
    }
  }

  return null;
};
function convertToTimeFormat(t) {
  return ('0'+Math.floor(t/60)%60).slice(-2)+':'+('0' + t % 60).slice(-2);
}

function isUndefined(_var) {
  return (typeof(_var) == 'undefined')? "" : _var;
}

function numberWithPoints(_num) {
  return _num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

$.fn.updateLogoCompany = function(data) {
  var _html = "";
  //
  _html += "<img src='" + isUndefined(data.imgCompany) + "' alt='"+ isUndefined(data.company) + "'>";
  //
  $(this).html(_html);
};

$.fn.updateDescriptionFlightType1 = function(data) {
  var _html = "";
  //
  _html += "<p><b>Partida</b>  "+ isUndefined(data.company) + "</p>";
  _html += "<p>"+ isUndefined(data.flight) +" / "+ isUndefined(data.departureTime)+" - "+isUndefined(data.arrivalTime)+"</p>";
  _html += "<p>"+ isUndefined(data.journey) + " - <strong>"+ isUndefined(data.journeyCode) + "</strong></p>";
  _html += "<p><strong>"+ isUndefined(data.price) +" bônus</strong></p>";
  //
  $(this).html(_html);
};

$.fn.updateDescriptionFlightType2 = function(data) {
  var _html = "";
  //
  _html += '<div class="description-flight">';
  _html += '<p><b>Voo '+ data.id +' ' + data.company+'</b></p>';
  _html += '<p>'+ isUndefined(data.flight)+' / '+isUndefined(data.departureTime)+' - '+isUndefined(data.arrivalTime)+'</p>';
  _html += '<p>'+ isUndefined(data.journey) +' - <strong>'+ isUndefined(data.journeyCode) + '</strong></p>';
  _html += '</div>';
  //
  $(this).append(_html);
};


$.fn.updateTotalPrice = function(data){
  var  _html = "";
  //
  _html += data.price+" bônus";
  //
  $(this).html(_html);
};

$.fn.updateSumTotalPrice = function(data1, data2) {

  var _html = "";
  var val1 = data1.price.replace(".", "");
  var val2 = data2.price.replace(".", "");

  _html += numberWithPoints( Number(val1)+Number(val2) )+" bônus";

  $(this).html(_html);
};


var journeys = [];

journeys.id = 1;
journeys.limit = 6;
journeys.selected = 0;

  $.fn.addJourney = function(options){

    var _html = "";

    $(".journey-"+(journeys.id)+" .addBtn").hide();

    journeys.id++;

    _html += '<div class="journey-'+journeys.id+'" data-journey="'+journeys.id+'">';
    _html += '<section class="col-md-12 multidest">';
    _html += '<hr >';
    _html += '<h5 class="multidest">Voo '+(journeys.id)+'</h5>';
    _html += '</section>';

    _html += '<section class="col-md-12 form-group-lg multidest">';
    _html += '<input type="text" class="input-lg col-md-50 origin-tickets" placeholder="Origem" name="ticket-origin-jrn'+journeys.id+'" required>';
    _html += '<input type="text" class="input-lg col-md-50 pull-right destiny-tickets" placeholder="Destino" name="ticket-dest-jrn'+journeys.id+'" required>';
    _html += '</section>';

    _html += '<section class="col-md-12 form-group-lg multidest">';
    _html += '<div class="date-container-journey">';
    _html += '<i class="icon-calendar"></i>';
    _html += '<input type="text" class="input-lg datepicker going-date col-md-2" placeholder="Ida" name="dest-entrada'+journeys.id+'" id="date-arrive-jrn'+journeys.id+'" required>';
    _html += '<div id="datepicker-tickets"></div>';
    _html += '</div>';
    _html += '</section>';


    _html += '<section class="col-md-12 multidest addBtn">';
    _html += '<a href="#" class="addJourney"><i class="icon-more"></i> Adicione mais</a>';
    _html += '<a href="#" class="rmvJourney"><i class="icon-less"></i> Remover</a>';
    _html += '</section>';

    _html += '</div>';

    $(this).before(_html);

    if(journeys.id >= journeys.limit) {
      $('.journey-'+journeys.id +' .addJourney').hide();
    }

    if(journeys.id <= 3) {
      $('.journey-'+journeys.id +' .rmvJourney').hide();
    }

    $('.journey-'+journeys.id).mouseenter(function() {
      journeys.selected = $(this).data("journey");
    });

    $('.journey-'+journeys.id +' .origin-tickets').focusin(function() {
      //
      var _val = $('.journey-'+ (journeys.selected-1) +' .destiny-tickets').val();

      if($(this).val() == "") {
        $(this).next('input').focus();
        $('.journey-'+ (journeys.selected) +' .origin-tickets').val(_val);
      }


   });


    // Set datepicker
    $('.journey-'+ journeys.id +' .datepicker').datepicker({
      numberOfMonths: 2,
      beforeShow: function (dateText, inst) {
        $(this).datepicker('option', 'minDate', $('.journey-'+(journeys.selected - 1)+' .going-date').val());
      }
    });

    // Set Autocomplete

    //origin
    $('.journey-'+ journeys.id +' .origin-tickets').autocomplete({
      delay: 500,
      minLength: 3,
      source: function(request, response) {
        $.getJSON('data-fake.json', {
          term: request.term
        }).done(function(data) {

          var array = data.error ? [] : $.map(data.movies, function(m) {
            return {
              icon: m.icon,
              label: m.label
            };
          });
          response(array);
        });
      }
    }).data('ui-autocomplete')._renderItem = function(ul, item) {
      var $a = $('<p></p>');
      $('<i class="m-fa-icon"</i>').addClass(item.icon).appendTo($a);
      $('<span class="m-name"></span>').text(item.label).appendTo($a);
      return $('<li></li>').append($a).appendTo(ul);
    };

    //destiny
    $('.journey-'+ journeys.id +' .destiny-tickets').autocomplete({
      delay: 500,
      minLength: 3,
      source: function(request, response) {
        $.getJSON('data-fake.json', {
          term: request.term
        }).done(function(data) {

          var array = data.error ? [] : $.map(data.movies, function(m) {
            return {
              icon: m.icon,
              label: m.label
            };
          });
          response(array);
        });
      }
    }).data('ui-autocomplete')._renderItem = function(ul, item) {
        var $a = $('<p></p>');
        $('<i class="m-fa-icon"</i>').addClass(item.icon).appendTo($a);
        $('<span class="m-name"></span>').text(item.label).appendTo($a);
        return $('<li></li>').append($a).appendTo(ul);
    }
}

$.fn.rmvJourney = function(options){

  if(journeys.id == 3){

  } else {
    $("#tab-tickets .journey-"+journeys.id).remove();
    journeys.id--;
  }
}

$.fn.waitingBox = function(status) {

  if(status == "show") { 
    $(this).modal({
      backdrop: "static",
      show: true
    });
  } else if ("hide") {
    $(this).modal('hide');
  }
}

$.fn.scrollTo = function(options) {

  if( isUndefined(options.off) == ''){
  	options.off = 0;
  }

  $(this).animate({
    scrollTop: $(options.element).offset().top - $(this).offset().top - options.off
  });
}

$.fn.updateDescriptionHotel = function(data) {

  var _html = '';

  _html += '<p class="txt-selected-flights"><span>Hotel</span>Selecionado</p>';

  _html += '<i class="icon-s-arrow-right"></i>';
  _html += '<p class="txt-name-hotel">' + isUndefined(data.hotelName) + '</p>';
  _html += '<div class="mini-description-hotel"><p>(' + isUndefined(data.mainRoom) + ')</p></div>';

  _html += '<div class="price-per-adult">';
  _html += '     <p><strong>Preço por adulto</strong></p>';
  _html += '     <p><b class="total-price">'+ isUndefined(data.mainPrice) + ' bônus</b></p>';
  _html += '     <p class="tip-use-money">';
  _html += '      <i class="icon-dollar"></i>';
  _html += '      Você também pode complementar <br>';
  _html += '     seu pagamento usando dinheiro';
  _html += '    </p>';
  _html += '   </div>';
  _html += '  <div class="i-want">';
  _html += '     <input type="button" value="EU QUERO" class="bt-i-want">';
  _html += '     <span>*Taxas não inclusas</span>';
  _html += '       </div>';
  _html += '      <div class="clearfix"></div>';

   $(this).html(_html);

}

/* Ex: $(".item-selected .wrap-flights").updateDescriptionHotel($("[data-id=1]").data()); */



$.fn.updateBedRoomHotel = function(data){
  var _html = '';
  _html += '<i class="icon-green-bed"></i>'+ isUndefined(data.mainRoom);
  $(this).html(_html);
};
/* Ex.: $(".item-checked .link-bedroom-hotel").updateBedRoomHotel($("[data-id=1]").data()); */


$.fn.updatePriceBedRoomPrice = function(data) {
  var _html = '';
  _html += '<strong>'+ isUndefined(data.mainPrice) +' bônus</strong>';
  $(this).html(_html);
}

/* Ex.: $(".item-checked .content-price .price-value").updatePriceBedRoomPrice($("[data-id=1]").data()); */







// Maps

var markers = new Array();
var map;
var infowindow;
var locations;


$.getJSON( "./locations.json", function( data ) {

    locations = data.locations;

  });


function initialize() {

  /* STATIC CONTENT */
  var mapOptions = {
    zoom: 12,
    scrollwheel: false,
    center: new google.maps.LatLng(-23.56,-46.62)
  };


  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  infowindow = new google.maps.InfoWindow();

  google.maps.event.addListener(infowindow, 'domready', function(){

    $('#map-canvas .buy').click(function() {
        /* TO DO: Scroll to result */
        var _id = $(this).attr("data-id");
        $("body").scrollTo({
        	element: "li[data-id="+_id+"]",
        	off: "100"
       	})
        //()
    });

  });

  /* add Markers */

  for (var i = 0; i < locations.length; i++) {
        addMarker(locations[i].id, locations[i].lat, locations[i].lng);
  }
}


$("#openMap").click(function(){
  $(this).parent().hide();
  $("#map-canvas").show();
  initialize();
})

function addMarker(_id ,_lat, _lng) {

  var marker, i;

  marker = new google.maps.Marker({
      position: new google.maps.LatLng(_lat, _lng),
      map: map
    });

  marker._id = _id;

  markers.push(marker);

  google.maps.event.addListener(marker, 'click', (function(marker) {

      return function() {
          //
          getHotelContent(_id ,_lat, _lng, function(data) {
            infowindow.setContent( data );
            infowindow.open(map, marker);
          });

      }
  })(marker));

}

function getHotelContent(_id, _lat, _lng, callback) {


            /* STATIC CONTENT */

            var content = "";

            content += '<div class="wrap-infowindow">';
            content += '<picture class="logo-hotel">';
            content += '<img src="images/thumb-hotel.jpg" alt="Hotel">';
            content += '</picture>';
            content += '<div class="hotel-info">';
            content += ' <div class="title-hotel">';
            content += '<h4>Hotel Bellagio</h4>';
            content += '<div class="rating-hotel">';
            content += ' <i class="icon-star"></i>';
            content += '<i class="icon-star"></i>';
            content += ' <i class="icon-star"></i>';
            content += ' <i class="icon-star"></i>';
            content += ' <i class="icon-star"></i>';
            content += ' </div>';
            content += ' <div class="clearfix"></div>';
            content += ' <p class="h-local"><b>Las Vegas (TheStrip) - <a href="#">Ver Mapa</a></b></p>';
            content += ' </div>';
            content += '<div class="rating-trip">';
            content += ' <img src="images/thumb-temporary-trip.jpg" alt="">';
            content += '</div>';
            content += ' <a href="#" class="link-bedroom-hotel"><i class="icon-green-bed"></i>Quarto Casal Standard</a>';
            content += ' <p class="text-mini-detail">Cerca de 1.000 fontes dançam com música e luz em frente a este hotel em estilo europeu, localizado ao longo da Strip...</p>';
            content += '<p class="text-right"><button data-id="'+_id+'" class="buy btn btn-red btn-sm">Comprar</button></p>';
            content += ' </div>';
            content += ' </div>';

            callback(content);
    // });
}

/* Function to Show Marker on Map */

function getMarkerPositionByLocation(_id ,_lat, _lng) {

  for (var m in markers) {

    if (markers[m].getPosition().lat() == _lat && markers[m].getPosition().lng() == _lng){

      getHotelContent(_id, markers[m].getPosition().lat(), markers[m].getPosition().lng(), function(data) {
        infowindow.setContent( data );
        infowindow.open(map, markers[m]);
      });
      break;
    }
  }

  return null;
};
