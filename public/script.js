let arr = ["Yes","No", "Perhaps","Maybe","Sometimes"];

function Say(params) {
    document.getElementById('text').innerHTML = arr[
        Math.floor(Math.random()*arr.length)
    ];
}