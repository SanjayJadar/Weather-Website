const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer');
let today_date = document.getElementById('today_date');
let day = document.getElementById('day');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ''){
        city_name.innerText = 'Enter City Name';
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=605c00643753e3f8e6fde1203ccdacb8`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;

            // Condition to checj sunny or cloudy
            if(tempMood == 'Clear'){
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if(tempMood == 'Clouds'){
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            else if(tempMood == 'Rain'){
                "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else{
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }

            datahide.classList.remove('data_hide');

        }
        catch{
            city_name.innerText = 'Please Enter Valid City Name';
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);





const date = new Date();

let Day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();      

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${Day}-${month}-${year}`;
today_date.innerText = currentDate; // Present Date


const getCurrentDay = () => {
    let weekday = new Array(7);
    weekday[0]='Sunday';
    weekday[1]='Monday';
    weekday[2]='Tuesday';
    weekday[3]='Wednesday';
    weekday[4]='Thursday';
    weekday[5]='Friday';
    weekday[6]='Satarday';

    let currentTime = new Date();
    let days = weekday[currentTime.getDay()];
    
    day.innerText = days;
}
getCurrentDay();