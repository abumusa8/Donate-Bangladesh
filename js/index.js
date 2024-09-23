document.getElementById('donait-now-btn').addEventListener('click', function(even){
    even.preventDefault()
   const inputbtn = parseFloat(document.getElementById('input-btn').value)
   const mainblance = parseFloat(document.getElementById('main-blance').innerText)
   const updatedonate= parseFloat(document.getElementById('update-donate').innerText)
   
   const newblance = inputbtn+updatedonate
   const loss =mainblance-inputbtn
      document.getElementById('update-donate').innerText= newblance
      document.getElementById('main-blance').innerText =loss
    const modal = document.getElementById('my_modal_5');
    modal.showModal(); 
   
})


// document.getElementById('donait-now-btn2').addEventListener('click', function(even){
//     even.preventDefault()
//    const inputbtn = parseFloat(document.getElementById('input-btn').value)
//    const mainblance = parseFloat(document.getElementById('main-blance').innerText)
//    const updatedonate= parseFloat(document.getElementById('update-donate2').innerText)
//    console.log(inputbtn , mainblance , updatedonate)
   
//    const newblance = inputbtn+updatedonate
//    const loss =mainblance-inputbtn
//       document.getElementById('update-donate').innerText= newblance
//       document.getElementById('main-blance').innerText =loss
//     const modal = document.getElementById('my_modal_5');
//     modal.showModal(); 
   
// })


//history-btn-here
document.getElementById('history-btn').addEventListener('click', function(){
    console.log('hidden')
    hideValue(main)
    
      
})