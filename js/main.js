$(document).ready(function() {
   $("#content").hide();

    var $container = $('#container');

    $('#button-sort .button').click(function(e) {
        e.preventDefault();
        var selector = $(this).attr('data-sort-value').split("attr-")[1];
        $('.names').hide();
        $('.names.'+selector).show();
        $('#button-sort .button').removeClass("active");
        $(this).addClass('active');
        $container.isotope({ sortBy: selector });
        return false;

    });  

    $("#splash").on("click", function(e) {
        e.preventDefault();
        $(this).hide();        
        $("#content").show();
        $container.isotope({
            sortAscending: true,
            getSortData: {
                wheat: function(itemElem) {
                    var _selector = $(itemElem).find('.attr-wheat').text();
                    return parseFloat(_selector.replace(/[\(\)]/g, ''));
                },
                milk: function(itemElem) {
                    var _selector = $(itemElem).find('.attr-milk').text();
                    return parseFloat(_selector.replace(/[\(\)]/g, ''));
                },   
                phone: function(itemElem) {
                    var _selector = $(itemElem).find('.attr-phone').text();
                    return parseFloat(_selector.replace(/[\(\)]/g, ''));
                }                             
            }
        });        
        $container.isotope({ sortBy: 'wheat' }); 
    });
    $("#button-filter .button").on("click", function(e) {
        e.preventDefault();
        var filter = $(this).attr("data-filter");

        $('#button-filter .button').removeClass("active");
        $(this).addClass('active');        

        $(".household").each(function(i,item) {
            get_attr = $(this).attr("attr-id");
            $(this).find("img").attr("src", "assets/household_"+get_attr+"/"+filter+"_"+get_attr+".jpg")
        })

    })
});