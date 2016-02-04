$(document).ready(function() {
    var $container = $('#container');

    $container.isotope({
        sortAscending: true,
        getSortData: {
            rent: function(itemElem) {
                var rent = $(itemElem).find('.attr-rent').text();
                return parseFloat(rent.replace(/[\(\)]/g, ''));
            }
        }
    });

    $('#button').click(function() {

        $container.isotope({
            sortBy: 'rent'
        });

        return false;

    });
});