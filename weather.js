document.querySelector("#butin").addEventListener("click", e=>{
    e.preventDefault()
    let valu = document.querySelector("#valu").value
    let key = "2f1af375771e27cd15ac6ea465735161"

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valu},${valu},${valu}&appid=${key}`)
    .then(Response => Response.json())
    .then(data =>{
        console.log(data);
        let weathVa = document.getElementById("weathVa")
        let weather = Math.round(parseFloat(data.main.temp)-273.15)
        document.getElementById("weathVa").innerHTML = weather+`<span><sup>o</sup>C</span>`
        document.getElementById("state").innerHTML = data.name+", "+ data.sys.country
        document.getElementById("condition").innerHTML = data.weather[0].main
    })
})