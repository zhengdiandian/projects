$('.nav-inp').keydown(function (e) { 
    // console.log($(this).val());
    var val = $(this).val()
    $.ajax({
        type: 'GET',
        url:'https://api.douban.com/v2/music/search',
        data: 'q'+val + '&count=7',
        dataType: 'jsonp',
        success: function (response) {
            console.log(response)
        }
    })
})