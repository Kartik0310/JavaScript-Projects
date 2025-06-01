const billAmountInput = document.querySelector('#bill-amount');
const tipContainer = document.querySelector('.tip-container');
const customTipInput = document.querySelector('.custom-tip');
const numberOfPeopleInput = document.querySelector('.number-of-people');
const generateBill = document.querySelector('.generate-bill-btn');
const tipAmountOutput = document.querySelector('.tip-amount span');
const totalAmountOutput = document.querySelector('.total-amount-value');
const eachPersonBillOutput = document.querySelector('.each-person-bill-value');
const resetBtn = document.querySelector('.reset-btn');

let tipPercentage = 0

generateBill.addEventListener('click', ()=>{
    const billAmountValue = parseInt(billAmountInput.value);
    const headCount = parseInt(numberOfPeopleInput.value);
    const customTipCalculation = (billAmountValue * (tipPercentage/100)) ;

    tipAmountOutput.innerText  = `₹${customTipCalculation}`;
    totalAmountOutput.innerText = `₹${billAmountValue + customTipCalculation}`;
    eachPersonBillOutput.innerText = `₹${(billAmountValue + customTipCalculation) / headCount}`;   
    resetBtn.disabled = false;
})

tipContainer.addEventListener('click', (e)=>{
    if(tipContainer.classList.contains('disabled')) return

    if(e.target !== tipContainer) {
        ;[...tipContainer.children].forEach((tip)=> tip.classList.remove('selected'))
        e.target.classList.add('selected')
        tipPercentage = parseInt(e.target.innerText)
        customTipInput.value = '';

        if(numberOfPeopleInput.value && tipPercentage){
            generateBill.disabled = false
        }
        else {
            generateBill.disabled = true
        }
    }
})

customTipInput.addEventListener('input', ()=>{
    tipPercentage = parseInt(customTipInput.value);
    [...tipContainer.children].forEach((tip)=> tip.classList.remove('selected'))

    if(numberOfPeopleInput.value && tipPercentage){
        generateBill.disabled = false
    }
    else {
        generateBill.disabled = true
    }

})

resetBtn.addEventListener('click', ()=>{
       tipPercentage = 0;
       billAmountInput.value = '';
       customTipInput.value = '';
       numberOfPeopleInput.value = '';
       totalAmountOutput.innerText= '';
       tipAmountOutput.innerText = '';
       eachPersonBillOutput.innerText = '';
       [...tipContainer.children].forEach((tip)=> tip.classList.remove('selected'))
       resetBtn.disabled = true; 

       generateBill.disabled = true;


})

billAmountInput.addEventListener('input',()=>{
    if(billAmountInput.value){
        customTipInput.disabled = false;
        numberOfPeopleInput.disabled = false
        tipContainer.classList.remove('disabled')
        
        
    }
    
    else {
        customTipInput.disabled = true;
        numberOfPeopleInput.disabled = true
        tipContainer.classList.add('disabled')
    }
})

numberOfPeopleInput.addEventListener('input', ()=>{
    if(numberOfPeopleInput.value && tipPercentage){
        generateBill.disabled = false;
    }
    else {
        generateBill.disabled = true;
    }
})