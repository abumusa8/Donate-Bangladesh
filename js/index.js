document.getElementById('donait-now-btn').addEventListener('click', function(even){
    even.preventDefault()
   const inputbtn = parseFloat(document.getElementById('input-btn').value)
   const mainblance = parseFloat(document.getElementById('main-blance').innerText)
   const updatedonate= parseFloat(document.getElementById('update-donate').innerText)
   
   if(isNaN (inputbtn)){
    alert ('Invalid Input')
    return;
   }
   else if(inputbtn < 0){
    alert('Please enter a valid number.')
    return;
   }
   const newblance = inputbtn+updatedonate
   const loss =mainblance-inputbtn
      document.getElementById('update-donate').innerText= newblance
      document.getElementById('main-blance').innerText =loss
    const modal = document.getElementById('my_modal_5');
    modal.showModal(); 
   
})


//donate 2 btn

document.getElementById('donait-now-btn2').addEventListener('click', function(even){
    even.preventDefault()
   const inputbtn = parseFloat(document.getElementById('input-btn2').value)
   const mainblance = parseFloat(document.getElementById('main-blance').innerText)
   const updatedonate= parseFloat(document.getElementById('update-donate2').innerText)
   if(isNaN (inputbtn)){
    alert ('Invalid Input')
    return;
   }
   else if(inputbtn < 0){
    alert('Please enter a valid number.')
    return;
   }
   const newblance = inputbtn+updatedonate
   const loss =mainblance-inputbtn
      document.getElementById('update-donate2').innerText= newblance
      document.getElementById('main-blance').innerText =loss
      const modal = document.getElementById('my_modal_5');
    modal.showModal(); 
   
   
})

//donate 3 btn

document.getElementById('donait-now-btn3').addEventListener('click', function(even){
    even.preventDefault()
   const inputbtn = parseFloat(document.getElementById('input-btn3').value)
   const mainblance = parseFloat(document.getElementById('main-blance').innerText)
   const updatedonate= parseFloat(document.getElementById('update-donate3').innerText)
   if(isNaN (inputbtn)){
    alert ('Invalid Input')
    return;
   }
   else if(inputbtn < 0){
    alert('Please enter a valid number.')
    return;
   }
   const newblance = inputbtn+updatedonate
   const loss =mainblance-inputbtn
      document.getElementById('update-donate3').innerText= newblance
      document.getElementById('main-blance').innerText =loss
      const modal = document.getElementById('my_modal_5');
    modal.showModal(); 
   
   
})





//history-btn-here
document.getElementById('history-btn').addEventListener('click', function(){
    console.log('hidden')
    hideValue(main)
    const addhistory = document.createElement('div')
    
      
})