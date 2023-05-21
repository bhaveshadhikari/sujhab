var btn = document.getElementById("input-btn");
var user = document.getElementById("input-name");
var text = document.getElementById("input-text");
var parent = document.getElementById("parentDiv");

function addnew_div(username, advice) {

    const div_advice = document.createElement('div');
    div_advice.textContent = advice;
    div_advice.style.color = 'rgb(255, 255, 255,0.75)';
    div_advice.style.fontSize = '18px';
    div_advice.style.marginLeft = '10px';
    div_advice.style.paddingLeft = '2px';
    div_advice.style.borderLeft = '1px solid rgba(183, 183, 183, 0.94)';
    div_advice.style.fontStyle ='oblique'
    div_advice.style.marginBottom ='10px';

    parent.insertBefore(div_advice, parent.firstChild);


    const div_name = document.createElement('div');
    if (username === "") {
        div_name.textContent = '-unknown'
    } else {
        div_name.textContent = '-' + username.toLowerCase()
    }
    div_name.style.color = 'rgb(255, 255, 255,0.95)';
    div_name.style.fontSize = '17px';
    div_name.style.fontStyle = 'italic';
    // div_name.style.borderBottom = '1px solid rgba(183, 183, 183, 0.94)';
    div_name.style.padding = '2px';
    parent.insertBefore(div_name, parent.firstChild);


}
var flag = true;
btn.addEventListener('click', () => {
    if (text.value !== "") {
        if (flag) {
            parent.textContent = "";
        }

        addnew_div(user.value, text.value);
        user.value = "";
        text.value = "";
        flag = false;
    }
})