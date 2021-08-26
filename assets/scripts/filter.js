var clients
var sectors
var services
var years
let $projectItems = $('.js-project-item'),
    $filterItems = $('.js-filter-btn');

// On load run the reset script for the Reset Filters button
$(function() {
    resetFunction();
});
// If any filter buttons are active, show the reset filters button - if not hide it
resetFunction = function() {
    if($filterItems.hasClass('current')){
        $('.reset').show();
    } else {
        $('.reset').hide();
    }
}
// When clicking the reset filters button, remove the current class from all filter buttons
resetButton = function() {
    $filterItems.removeClass('current');
    $(window).scrollTop(0);
    filtersHaystack();
}
// When clicking a filter button, toggle if the class is active, hide all project items, then run full filtering script
projectFilter = function(e) {
    e.preventDefault();
    $(this).toggleClass('current')
    $(window).scrollTop(0);
    $projectItems.hide();
    filtersHaystack();
}
// For each button that is currently active, push it to the array for that category
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
        var year = $(this).data('filter').toString();
        years.push(year);
    })
    filterEach(clients, sectors, services, years);
}
// For each project item, compare each category to the haystack array and return true if there's a match (also true if the haystack array is empty)
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
        // Show the project items if all categories return true
        if (clientBoolean == true && yearBoolean == true && sectorBoolean == true && serviceBoolean == true) {
            $(this).show();
        }
    })
    resetFunction()
}

$(document).on('click', '.js-filter-btn', projectFilter);
$(document).on('click', '.js-reset', resetButton);