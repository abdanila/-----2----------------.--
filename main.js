const inputInfo = document.querySelectorAll('.input');
const btnSubmit = document.querySelector('.btn__submit');
const alertInfo = document.querySelector('.alert');
const numInfo = document.querySelector('.numNone');
const imtInfo = document.querySelector('#imt-info');
const imtNone = document.querySelector('.imtNone');
const imtNoneRes = document.querySelector('.imtNone-res');
const imtResult = document.querySelector('.imt__info-result');
function validation(){
    let inputValueHeight = +inputInfo[0].value;
    let inputValueWeight = +inputInfo[1].value;
    function imt(height, weight){    
        let result = weight / Math.pow((height/100), 2);
        if(isNaN(inputValueHeight) || isNaN(inputValueWeight)){alertInfo.classList.remove("none");imtNone.classList.add('none')}
        else if((inputValueHeight==0 || inputValueWeight==0)){console.log("Ошибка, поля ввода пустые");numInfo.classList.remove("none");imtNone.classList.add('none')}
        else{alertInfo.classList.add("none");numInfo.classList.add("none");imtInfo.textContent = +result.toFixed(2);imtNone.classList.remove('none')}
        if(result>=18.5){imtResult.textContent = "Норма";imtNoneRes.classList.remove('none')}
        else if(result<18.5){imtResult.textContent = "Недостаточная(дефицит) масса тела";imtNoneRes.classList.remove('none');imtResult.style.color = "#000"}
        else if(result>=25){imtResult.textContent = "Избыточная масса тела(предожирение)";imtNoneRes.classList.remove('none');imtResult.style.color = "#000"}
    }
        imt(inputValueHeight, inputValueWeight)
        
    }
    btnSubmit.addEventListener("click", function(){validation()})

    