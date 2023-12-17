btn = document.querySelector(".button")

btn.addEventListener("click", getIdea)


function getIdea() {
    fetch("https://www.boredapi.com/api/activity")
        .then(res => res.json())
        .then(data => {
            // document.body.classList.add("fun")
            document.querySelector(".idea").textContent = data.activity
            document.querySelector(".title-el").textContent = "🦾 HappyBot🦿"
            console.log(`This is the message that is displayed from the API: ${data.activity}`)
        })

        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            console.log(`When the button is clicked, the API returns the following url: ${data.message}`)
            document.querySelector('.image-container').innerHTML=`
            <img class ="return-image" src="${data.message}">
            `
        })

}


getIdea()
