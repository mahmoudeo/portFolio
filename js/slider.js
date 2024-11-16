var $links = $('.nav_item');
$links.click(function (e) {
    $links.removeClass('active')

    var $clickedLinks = e.target;
    $clickedLinks = $($clickedLinks);
    var pos = $clickedLinks.attr("data-pos");
    var transValue = "translateX(" + pos * -25 + "%)";
    $('#wrapper').css({
        transform: transValue
    });
    $clickedLinks.addClass('active')
})
$($links[0]).addClass('active')