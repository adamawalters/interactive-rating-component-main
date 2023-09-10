

let selectedValue = "";
let thankURL = new URL(window.location.origin + "/thankyou.html");


$('.rbut').on('click', function(){
    if($(this).hasClass('selected')) {
        $(this).removeClass('selected');
        selectedValue = "";
    } else {
        $('button').removeClass('selected');
        $(this).addClass('selected')  
        selectedValue = $(this).text();
        thankURL.searchParams.set("key1", selectedValue);
    }
});


$('#submit').on("click", function(){
    //get the value of the selected button = already present in selectedValue
    //put that value in a url of thank you and open that page on same tab = URL already present in thankURL and updated on click
    window.location.href = thankURL;
})

