const btn = document.querySelector('#btn');
// handle click button
btn.onclick = function () {
    const fn = document.getElementById("fn").value;
    const ln = document.getElementById("ln").value;
    var email = document.getElementById("email").value;
    var id = document.getElementById("id").value;
    const url = "https://httpbin.org/post"

    const data = {
        surveyName: "TEST",
        response: [
            {
                "firstname": fn,
                "lastname": ln,
                "email": email,
                "id": id
            }
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
