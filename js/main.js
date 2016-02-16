$(document).ready(function() {
   $("#content").hide();

    var $container = $('#container');

    $('#button').click(function() {

        $container.isotope({
            sortBy: 'rent'
        });

        return false;

    });

    $("#splash").on("click", function(e) {
        e.preventDefault();
        $(this).hide();        
        $("#content").show();
        $container.isotope({
            sortAscending: true,
            getSortData: {
                rent: function(itemElem) {
                    var rent = $(itemElem).find('.attr-rent').text();
                    return parseFloat(rent.replace(/[\(\)]/g, ''));
                }
            }
        });        
    })
});