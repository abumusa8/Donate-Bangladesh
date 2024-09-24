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
      document.getElementById('update-donate').innerText= newblance.toFixed(2)
      document.getElementById('main-blance').innerText =loss.toFixed(2)


    const historyItem =  document.createElement("div")
    const donate = 'Taka Donate for Flood at Noakhali, Bangladesh'
    historyItem.className='bg-red border shadow h-20 mx-[200px] mt-2 p-3 rounded-xl'
        historyItem.innerHTML = `
            <h1 class=""></h1>
            <p class="font-bold">${inputbtn} ${donate}</p>
            
        `
       const container = document.getElementById('history-list')
        container.appendChild(historyItem)

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
      document.getElementById('update-donate2').innerText= newblance.toFixed(2)
      document.getElementById('main-blance').innerText =loss.toFixed(2)
      const historyItem =  document.createElement("div")
    const donate = ' Taka is Donated for Flood Relief in Feni,Bangladesh'
    historyItem.className='bg-red border shadow h-20 mx-[200px] mt-2 p-3 rounded-xl'
        historyItem.innerHTML = `
            <h1 class=""></h1>
            <p class="font-bold">${inputbtn} ${donate}</p>
            
        `
       const container = document.getElementById('history-list')
        container.appendChild(historyItem)
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
      document.getElementById('update-donate3').innerText= newblance.toFixed(2)
      document.getElementById('main-blance').innerText =loss.toFixed(2)

      

      const historyItem =  document.createElement("div")
      const donate = ' Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh'
      historyItem.className='bg-red border shadow h-20 mx-[200px] mt-2 p-3 rounded-xl'
          historyItem.innerHTML = `
              <h1 class=""></h1>
              <p class="font-bold">${inputbtn} ${donate}</p>
              
          `
         const container = document.getElementById('history-list')
          container.appendChild(historyItem)




      const modal = document.getElementById('my_modal_5');
    modal.showModal(); 
   
   
})


//history-btn-here
document.getElementById('history-btn').addEventListener('click', function(){
    
const history =document.getElementById('history-btn')
history.classList.add('bg-[#B4F461]' ,'font-semibold', 'px-5', 'py-1', 'rounded-[8px]')
   const donationbtn = document.getElementById('donationbtn')
   donationbtn.classList.remove('bg-[#B4F461]' ,'font-semibold', 'px-5', 'py-1', 'rounded-[8px]')
   document.getElementById('main').classList.add('hidden')
   document.getElementById('history-list').classList.remove('hidden');
  

      
})
// donatin btn here
 document.getElementById('donationbtn').addEventListener('click', function(){
    const donationbtn = document.getElementById('donationbtn')
   donationbtn.classList.add('bg-[#B4F461]' ,'font-semibold', 'rounded-[8px]')
   const history =document.getElementById('history-btn')
history.classList.remove('bg-[#B4F461]' ,'font-semibold', 'px-5', 'py-1', 'rounded-[8px]')
document.getElementById('main').classList.remove('hidden')
document.getElementById('history-list').classList.add('hidden');




})