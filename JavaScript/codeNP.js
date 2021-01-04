const btn = document.querySelector('#btn');
// handle click button
btn.onclick = function () {
    const rbs = document.querySelectorAll('input[name="statisfied"]');
    var desc = document.getElementById("description").value;
    const url = "https://httpbin.org/post"
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    const data = {
        surveyName: "TEST",
        response: [
            desc,
            selectedValue
        ]
    }

    fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
    }).then(res => {
        console.log("Request complete! response:", res);
        alert("Request complete! response:", res);
    });

    //location.replace("\ThankYou.html");
};
