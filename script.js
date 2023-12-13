const modeSwitch = document.querySelector('.switch');
console.log(modeSwitch);

const h1Tag= document.getElementsByTagName("h1");

//0 pr dark 1 pr light

let count = 0; // Initialize count outside the event listener

modeSwitch.addEventListener('click', function() {
    if (count === 0) {
        modeSwitch.classList.remove('fa-toggle-off');
        modeSwitch.classList.add('fa-toggle-on');

        document.body.style.backgroundColor = "#031520";
        document.body.style.color = "black";

        count = 1;
    } else {
        modeSwitch.classList.remove('fa-toggle-on');
        modeSwitch.classList.add('fa-toggle-off');

        document.body.style.backgroundColor = "rgb(195, 227, 233)";
        document.body.style.color = "black";

        count = 0;
    }
});


const submitBtn= document.getElementsByClassName('genJoke')[0];
console.log(submitBtn);


const paraGarph= document.getElementsByClassName('paraJoke')[0];


const apiKey= "XE279uE5jELYHXgbmfxg7A==itw7mYjo2WPQKiYF";

const option = {
    method: "GET",
    headers: {

        "X-Api-Key": apiKey,
    },
};

const apiUrl= "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getJoke(){

   try {

        const response= await fetch(apiUrl, option);


        const data= await response.json();

        paraGarph.innerHTML= data[0].joke;
    
   } catch (error) {

        paraGarph.innerHTML= "404 network issue";
    
   }

}


submitBtn.addEventListener('click', getJoke);