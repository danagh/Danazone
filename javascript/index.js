$(document).ready(function () {
    eventListeners();
});

function eventListeners() {

    $(window).scroll(function () {
        var scrollOffset = $(document).scrollTop().valueOf() ;
        var scrollOffsetSecond = scrollOffset * -1;
        var scrollOffsetThird = scrollOffset * -2.42384106;
        // var scrollOffsetPx = scrollOffset + 'px';
        // $('.second').css({'transform: 'translateY(' + scrollOffsetPx + ')'});​
        $('.second').css({transform: 'translateY(' + scrollOffsetSecond +'px)'});
        $('.third').css({transform: 'translateY(' + scrollOffsetThird +'px)'});
    });

}

