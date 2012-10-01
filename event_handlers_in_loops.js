// Don' do it this way - you'll more than likely not get what you want!
for (i = 0; i < divs.length; i++) {
    div_id = divs[i].id;
    divs[i].onclick = function () {
        alert(div_id);
    };
}

// the function you're declaring in each iteration is closing over the div_id
// variable, not its individual iteration values.  Each clicked div will alert
// the final value of div_id that caused the loop to terminate.
//
// Instead, if you want each clicked div to alert its own id, do it like this:
function make_handler(div_id) {
    return function() {
        alert(div_id);
    }
}

for (i = 0; i < divs.length; i++) {
    div_id = divs[i].id;
    divs[i].onclick = make_handler(div_id);
}
