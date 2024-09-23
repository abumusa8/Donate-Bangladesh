document.getElementById('donait-now-btn').addEventListener('click', function(even){
    even.preventDefault()
   const inputbtn = parseFloat(document.getElementById('input-btn').value)
   const mainblance = parseFloat(document.getElementById('main-blance').innerText)
   const updatedonate= parseFloat(document.getElementById('update-donate').innerText)
   
   
  const update= mainblance -updatedonate
  const upblance =
  document.getElementById('main-blance').innerText =mainblance
  document.getElementById('update-donate').innerText
   
   
})


//!history btn strat here
document.getElementById('history-btn').addEventListener('click', function(even){
    even.preventDefault()
    
})