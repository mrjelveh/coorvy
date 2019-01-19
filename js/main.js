$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.overlay').toggleClass('active');
    });
    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });
});

$(document).ready(function () {
        $('.responsive-table').find('table').each(function () {

            var trAcc = $(this).find('tr').not('tr:first-child'),
                thHead = [];
            $(this).find('tr:first-child td, tr:first-child th').each(function () {
                headLines = $(this).text();
                thHead.push(headLines);
            });

            trAcc.each(function () {
                for (i = 0, l = thHead.length; i < l; i++) {
                    $(this).find('td').eq(i + 1).prepend('<h4>' + thHead[i + 1] + '</h4>');
                }
            });

            trAcc.append('<i class="icon-accordion lni-cross-circle rotate45"></i>');
            $('.icon-accordion').click(function () {
                if ($(this.parentElement).hasClass('accordion-opened')) {
                    $(this.parentElement).animate({
                        maxHeight: '60px'
                    }, 200).removeClass('accordion-opened').find('.icon-accordion').addClass('rotate45');

                } else {
                    $(this.parentElement).animate({
                        maxHeight: '1000px'
                    }, 400).addClass('accordion-opened').find('.icon-accordion').removeClass('rotate45');
                }
            });
        });
    });