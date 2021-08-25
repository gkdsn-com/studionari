var clients
var sectors
var services
var years
let $projectItems = $('.js-project-item'),
    $filterItems = $('.js-filter-btn');

$(function() {
    resetFunction();
});
filtersHaystack = function() {
    var clients = new Array()
    var sectors = new Array()
    var services = new Array()
    var years = new Array ()
    $('.js-filter-client.current').each(function() {
        var client = $(this).data('filter');
        clients.push(client);
    })
    $('.js-filter-sector.current').each(function() {
        var sector = $(this).data('filter');
        sectors.push(sector);
    })
    $('.js-filter-service.current').each(function() {
        var service = $(this).data('filter');
        services.push(service);
    })
    $('.js-filter-year.current').each(function() {
        var year = $(this).data('filter');
        year = year.toString();
        years.push(year);
    })
    filterEach(clients, sectors, services, years);
}
filterEach = function(clients, sectors, services, years) {
    $projectItems.each(function(){
        let client = $(this).data('client'),
            year = $(this).data('year'),
            sector = $(this).data('sector'),
            service = $(this).data('service');
        client = client.split(" ")
        year = year.toString().split(" ")
        sector = sector.split(" ")
        service = service.split(" ")
        let clientBoolean = clients.some(ai => client.includes(ai)),
            yearBoolean = years.some(ai => year.includes(ai)),
            sectorBoolean = sectors.some(ai => sector.includes(ai)),
            serviceBoolean = services.some(ai => service.includes(ai));
        if (clients.length == 0) {
            clientBoolean = true;
        }
        if (years.length == 0) {
            yearBoolean = true;
        }
        if (sectors.length == 0) {
            sectorBoolean = true;
        }
        if (services.length == 0) {
            serviceBoolean = true;
        }

        if (clientBoolean == true && yearBoolean == true && sectorBoolean == true && serviceBoolean == true) {
            $(this).show();
        }
    })
    resetFunction()
}
resetFunction = function() {
    if($filterItems.hasClass('current')){
        console.log('active')
        $('.reset').show();
    } else {
        console.log('not active')
        $('.reset').hide();
    }
}
resetButton = function() {
    $filterItems.removeClass('current');
    $(window).scrollTop(0);
    filtersHaystack();
}
projectFilter = function(e) {
    e.preventDefault();
    $(this).toggleClass('current')
    $(window).scrollTop(0);
    $projectItems.hide();
    filtersHaystack();
}

$(document).on('click', '.js-filter-btn', projectFilter);
$(document).on('click', '.js-reset', resetButton);


// var $filterCheckboxes = $('input[type="checkbox"]');

// $filterCheckboxes.on('change', function() {

// 	var selectedFilters = {};
// 	var selected = new Array();

// 	$filterCheckboxes.filter(':checked').each(function() {
		
// 		selected.push(this.value);

// 		if (!selectedFilters.hasOwnProperty(this.name)) {
// 			selectedFilters[this.name] = [];
// 		}

// 		selectedFilters[this.name].push(this.value);
		
// 	});
	
// 	if(window.location.href == 'https://bureauborsche.com/projects/' || window.location.href == 'https://bureauborsche.com/projects'){
// 		window.history.pushState("String", "Title", 'https://bureauborsche.com/projects/filter:' + selected);
// 	} else {
// 		window.history.pushState("String", "Title", 'https://bureauborsche.com/projects/filter:' + selected);
// 	}

// 	var $filteredResults = $('.list table tbody tr, .thumbs .project');

// 	$.each(selectedFilters, function(name, filterValues) {

// 		$filteredResults = $filteredResults.filter(function() {

// 			var matched = false,
// 			currentFilterValues = $(this).data('category').split(' ');

// 			$.each(currentFilterValues, function(_, currentFilterValue) {
	
// 				if ($.inArray(currentFilterValue, filterValues) != -1) {
// 					matched = true;
// 					return false;
// 				}
// 			});
							
// 			return matched;

// 		});
// 	});

// 	$('.list table tbody tr, .thumbs .project').hide().filter($filteredResults).show();
	  
// 	if($('.filter input').is(':checked')){
// 		$('.reset').show();
// 		$('.mobile-filter').html('Apply Filter');
// 	} else {
// 		$('.reset').hide(); 
// 		$('.mobile-filter').html('Close');
// 		window.history.pushState("String", "Title", 'http://bureauborsche.com/projects');
// 	}

// });

// $('.filter .reset').on('click', function(){
// 	$filterCheckboxes.prop( "checked", false );
// 	$(this).hide();
// 	$('.list table tbody tr, .thumbs .project').show();
// 	$('.mobile-filter').html('Close');
// 	window.history.pushState("String", "Title", 'http://bureauborsche.com/projects');
// });

// var url = window.location.href;