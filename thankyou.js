
let messageEl = document.getElementById('selected-message');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

$('#card').css('text-align', 'center'); /* or in normal 2023 JS: element.style.setProperty("text-align", "center") */
$('#card').css('align-items', 'center');

let result = urlParams.get("key1");
console.log("result is "+ result);

messageEl.textContent = `You selected ${result} out of 5`; 


