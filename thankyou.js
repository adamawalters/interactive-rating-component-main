
let messageEl = document.getElementById('selected-message');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

$('#card').css('text-align', 'center');

let result = urlParams.get("key1");
console.log("result is "+ result);

messageEl.textContent = `You selected ${result} out of 5`; 


