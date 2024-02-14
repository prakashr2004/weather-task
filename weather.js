var input = document.getElementById("search")
var  submit = document.getElementById("btn")
var  time = document.getElementById("time")
var humidity =document.getElementById("Humidity")
var WindSppedd = document.getElementById("Speed")
var celis = document.getElementById("celis")
var fox = document.getElementById("popshow")
var spanName = document.getElementById("name")
var findname = document.getElementById("findName")
var date = new Date
var CurrentTime = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
var icon = document.getElementById("icon")

submit.addEventListener("click",()=>{

    var apikey = "1ac41d822f470089588e62f6ac6cbdce";

    var cityName =input.value;
    var apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
    
    if(cityName)
    {
        checkWeather(cityName)
    }
    function checkWeather(city)
    {
        fetch(apiurl+`&appid=${apikey}&q=${city}`)
        .then(response => response.json())
        .then(data => {

            if(Number( data.main.temp) >= 26){
                icon.classList.remove("fa-temperature-empty")
                document.body.classList.remove("rainbody")
                icon.classList.remove("fa-cloud")

                icon.classList.add("fa-cloud-sun")
                fox.classList.add("sun")
                spanName.classList.add("Ncol")
                document.body.classList.add("sund")
                document.body.classList.add("sencolo")

                // 3
                icon.classList.remove("fa-cloud-showers-water")
                document.body.classList.remove("rainbody")
                fox.classList.remove("popshowfox")
                spanName.classList.remove("btnblue")
                findname.classList.add("FineNAme")
                submit.classList.add("fin")


                findname.classList.remove("co")
                submit.classList.remove("BtN")

                }
               else if(Number( data.main.temp) >= 20 && Number(data.main.temp)<=25){
                document.body.classList.remove("sencolo")
                icon.classList.remove("fa-temperature-empty")
                icon.classList.add("fa-cloud")

                document.body.classList.remove("rainbody")
                fox.classList.remove("popshowfox")
                spanName.classList.remove("btnblue")

                // 1

                icon.classList.remove("fa-cloud-sun")
                fox.classList.remove("sun")
                spanName.classList.remove("sunN")
                document.body.classList.remove("sund")
                document.body.classList.remove("sencolo")
                spanName.classList.remove("Ncol")

            // 3
            icon.classList.remove("fa-cloud-showers-water")
            document.body.classList.remove("rainbody")
            fox.classList.remove("popshowfox")
            spanName.classList.remove("btnblue")
            findname.classList.remove("FineNAme")
                submit.classList.remove("fin")


                findname.classList.remove("co")
                submit.classList.remove("BtN")

               }
               else if(Number(data.main.temp) <= 26){

                document.body.classList.remove("sencolo")
                icon.classList.remove("fa-temperature-empty")

                icon.classList.add("fa-cloud-showers-water")
                document.body.classList.add("rainbody")
                fox.classList.add("popshowfox")
                spanName.classList.add("btnblue")

                findname.classList.add("co")
                submit.classList.add("BtN")

            //1
            icon.classList.remove("fa-cloud-sun")
                fox.classList.remove("sun")
                spanName.classList.remove("sunN")
                document.body.classList.remove("sund")
                document.body.classList.remove("sencolo")
                spanName.classList.remove("Ncol")

                findname.classList.remove("FineNAme")
                submit.classList.remove("fin")

            
            
               }

            console.log(data)
            celis.innerHTML = data.main.temp+"<sup>.</sup>"+"C"
           WindSppedd.innerHTML = Math.round(data.wind.speed)+"km/h" 
           humidity.innerHTML = data.main.humidity+"%";
           
        })
           input.value =""
    }
    
    time.innerHTML =CurrentTime

});




var demo  = document.querySelectorAll(".byname").children[0]


console.log(demo)