
 let total = 0 ;
 
function addItemInTotalManuSection(target){
    const itemName = target.parentNode.childNodes[3].innerText ;
     const li = document.createElement('li') ;
     li.innerText = itemName ;
     const AddItemOnContainer = document.getElementById('item-container')
     AddItemOnContainer.appendChild(li)

     const itemPrice = target.parentNode.childNodes[5].innerText.split(' ')[0] ;
     total = parseFloat(total) + parseFloat(itemPrice);

     const priceTotal = document.getElementById('total-price') ;
     priceTotal.innerText = total
    
     
     const disableBtn = document.getElementById('make-purchase') ;
     disableBtn.addEventListener('click' , function(){
      if(total > 0 ){
    
         disableBtn.Disabled = false ;
       
      }
      else{
         disableBtn.Disabled = true ;
       
      }
     })
    

     const applyBtn = document.getElementById('apply')
     applyBtn.Disabled = true ;
    
     applyBtn.addEventListener('click' , function(){
      const discountPrice = document.getElementById('Discount-Price')
      const mainTotalAmmount = document.getElementById('mainTotal')
      const inputCupon = document.getElementById('input-cupon');
      const inputText = inputCupon.value;
      if(total >200){
    
         applyBtn.Disabled = false ;
         
      }
      else{
         applyBtn.Disabled = true ;
      }

     
         
      if(inputText === "SELL200"){
         const discountmoney  = parseFloat(total* 20/100) ;
        discountPrice.innerText = discountmoney ;
        const maintotal = total - discountmoney ;
         mainTotalAmmount.innerText = maintotal;
      }
  
     })
    
 
    }
    function ResatHome(){
      window.location.href = window.location.href
    }