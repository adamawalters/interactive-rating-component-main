

let selectedValue = "";
let thankURL = new URL("http://127.0.0.1:5500/thankyou.html")
console.log(" thank URL is " + thankURL);


$('.rbut').on('click', function(){
    if($(this).hasClass('selected')) {
        $(this).removeClass('selected');
        selectedValue = "";
    } else {
        $('button').removeClass('selected');
        $(this).addClass('selected')  
        selectedValue = $(this).text();
        thankURL.searchParams.set("key1", selectedValue);
        console.log("The url after adding adding the parameters is: " + thankURL);
    }
});

function getValueOfSelectedButton () {
    return selectedValue;
}

$('#submit').on("click", function(){
    //get the value of the selected button
    console.log("value selected is " + getValueOfSelectedButton());
    //put that value in a url of thank you and open that page on same tab
    window.location.href = thankURL;
})

