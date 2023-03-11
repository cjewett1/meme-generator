// <p class="top-text"></p>
// <p class="bottom-text"></p>
// <img src="https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown" alt="Placeholder Image">


const memeForm = document.querySelector('.meme-form');

const newMemeList = document.querySelector('.meme-display');

const inputTextTop = document.querySelector('#meme-top-text');

const inputTextBottom = document.querySelector('#meme-bottom-text');

const inputImg = document.querySelector('#meme-image');

const previewPic = document.querySelector('.visual-display');

memeForm.elements['memeImage'].focus();

memeForm.addEventListener('submit', onMemeSubmit);

function onMemeSubmit(e){
    //Browser holds on to information on submit with preventDefault
    e.preventDefault();

    //creating a variable for the value of the top text
    let textTop = inputTextTop.value.trim();

    //creating a variable for the value of the top text
    let textBottom = inputTextBottom.value.trim();

    //creating a variable for the value of the image
    let img = inputImg.value;

    //creating a variable for the selected preview pic
    let picture = previewPic.value;


    //function to show true value
    let isValid = validateFunction(textTop, textBottom, img);

    if (isValid === true){

        addMeme(textTop, textBottom, img);

        inputTextTop.value = "";

        inputTextBottom.value = "";

        inputImg.selectedIndex = 0;
        
        inputImg.focus();
    }
}

//This function allows the user to get a preview of the image prior to submitting it with the meme text.
inputImg.addEventListener('change', onImageChange);

function onImageChange(e){

    const inputImg = document.querySelector('#meme-image');
    let img = inputImg.value;

    if(e.target.options[e.target.selectedIndex] !== 0 ){
        showImg =
        `
        <img src="../img/${img}" alt="${img}">
        `
    }

    previewPic.setHTML(showImg);
}

//Validation function to check check the parameters of text is not left blank and not greater than 25. Also, checking make sure that the img has an input value (not on select image)

function validateFunction(textTop, textBottom, img) {

    //saying that form is valid
    let isValid = true;

    //creating an if/else statement that first checks that the text is actually input (not left blank) and not greater than 25 characters

    if (textTop === "" || textTop.length > 25){

        document.querySelector('.top-validation').classList.remove('hidden');

        isValid = false;
   
    }else{
        document.querySelector('.top-validation').classList.add('hidden');
    }

    if (textBottom === "" || textBottom.length > 25){

        document.querySelector('.bottom-validation').classList.remove('hidden');

        isValid = false;
   
    }else{
        document.querySelector('.bottom-validation').classList.add('hidden');
    }

    if (img === ""){

        document.querySelector('.image-validation').classList.remove('hidden');

        isValid = false;
   
    }else{
        document.querySelector('.image-validation').classList.add('hidden');
    }

    inputImg.focus();
    return isValid;
}

//Building the meme
function addMeme(textTop, textBottom, img){

    showImg = "";

    console.log(showImg);

    previewPic.innerHTML = "";

    let createNewMeme =
    `

        <li>
            <div class = "meme-top-text" >
                <p class="top-text">${textTop}</p>
            </div>

            <div class = "meme-bottom-text" >
                <p class="bottom-text">${textBottom}</p>
            </div>
            <img src="../img/${img}" alt="${img}">
        </li>
    `
    newMemeList.setHTML(createNewMeme);

}


//Function and event listener to reset the values of the meme, preview and input fields upon clicking the reset button
memeForm.addEventListener('reset', onMemeReset);

function onMemeReset(e){

    inputTextTop.value = "";

    inputTextBottom.value = "";

    inputImg.selectedIndex = 0;

    previewPic.innerHTML = "";

    newMemeList.innerHTML = "";

}