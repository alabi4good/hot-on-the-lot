$(document).ready(function() {
    $('.menu a').click(function() {
        var menuList, filterTxt; 
        //get the text from the li clicked
        menuList = $(this).text();
        
        //filter the text
        filterTxt = menuList.toLowerCase().replace(' ', '-');
        //console.log(filterTxt);

        //update the menuList in the h1 heading
        $('h1#heading').text(menuList);
        
        //remove the current class and add it to the parent
        $('.menu li.current').removeClass();
        $(this).parent().addClass('current');

        if(filterTxt === 'all-cars') {
            $('#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        }else {
            $('#gallery li').each(function() {
                if(!$(this).hasClass(filterTxt)) {
                    $(this).fadeOut('slow').addClass('hidden');
                } else{
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            })
        }
        
    });
});