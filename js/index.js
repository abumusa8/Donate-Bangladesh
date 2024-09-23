document.getElementById('donait-now-btn').addEventListener('click', function(even){
    even.preventDefault()
   const inputbtn = parseFloat(document.getElementById('input-btn').value)
   const mainblance = parseFloat(document.getElementById('main-blance').innerText)
   const updatedonate= parseFloat(document.getElementById('update-donate').innerText)
   
   const newblance = inputbtn+updatedonate
   const loss =mainblance-inputbtn
      document.getElementById('update-donate').innerText= newblance
      document.getElementById('main-blance').innerText =loss
console.table({inputbtn, mainblance, updatedonate, newblance, loss})
   

 
   
   
})


