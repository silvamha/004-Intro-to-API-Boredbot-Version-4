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

        fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#message-body').textContent=data.value
        })

        fetch("	https://yesno.wtf/api")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#image-container2').innerHTML=`
            <img class ="return-image" src="${data.image}">
            `
        })
}

/**!SECTION - NOTES
 * Worked on several more APIs and worked on implementing them in BULMA.
 * Next, create a new document with different sections and render different APIs using different BULMA components
 */
getIdea()


/**!SECTION - Greta addresses
 * 1 - https://yesno.wtf/assets/yes/9-6403270cf95723ae4664274db51f1fd4.gif
 * 
 * 2 - https://yesno.wtf/assets/yes/13-c3082a998e7758be8e582276f35d1336.gif 
 * 
 * 3 - https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif
 * */