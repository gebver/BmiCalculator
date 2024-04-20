const heightInput = document.getElementById("heightInput");
const weightInput = document.getElementById("weightInput");
const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("cleanBtn");
const errorMessage = document.getElementById("errorMessage");
const resultInfo = document.getElementById("result");
const description = document.getElementById("description");

calculateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(heightInput.value === "" || weightInput.value === "" )
    {
        errorMessage.classList.remove("hidden");
    }else{
        errorMessage.classList.add("hidden");
        calculateBmi();
        heightInput.value = "";
        weightInput.value = "";
    }
})
clearBtn.addEventListener("click",()=>{
    resultInfo.innerText = "0";
    description.innerText = "";
})

function calculateBmi()
{
    let height = parseInt(heightInput.value);
    let weight = parseInt(weightInput.value);
    let result = (weight / ((height / 100) * (height / 100))).toFixed(2);//konwersja cm na m

    if(result < 16.00){
        resultInfo.innerText = result;
        description.innerText = "Wygłodzenie!";
        description.style.color = "darkred";
      }
      else if(result >= 16.00 && result < 16.99)
      {
        resultInfo.innerText = result;
        description.innerText = "Wychudzenie!";
        description.style.color = "darkred";
      }
      else if(result >= 17.00 && result <18.49)
      {
        resultInfo.innerText = result;
        description.innerText = "Niedowaga!";
        description.style.color = "darkred";
      }
    
      else if(result >=  18.50 && result < 24.99)
      {
        resultInfo.innerText = result;
        description.innerText = "Waga prawidłowa!";
        description.style.color = "darkgreen";
      }
      else if(result >=  25.00 && result < 29.99)
      {
        resultInfo.innerText = result;
        description.innerText = "Nadwaga!";
        description.style.color = "orangered";
      }
      else if(result >=  30.00 && result < 34.99)
      {
        resultInfo.innerText = result;
        description.innerText = "I stopień otyłości!";
        description.style.color = "darkred";
      }
      else if(result >=  35.00 && result < 39.99)
      {
        resultInfo.innerText = result;
        description.innerText = "II stopień otyłości!";
        description.style.color = "darkred";
      }
      else if(result > 40.00)
      {
        resultInfo.innerText = result;
        description.innerText = "Otyłość skrajna!";
        description.style.color = "red";
      }
    
}

