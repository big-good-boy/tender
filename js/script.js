function timer() {
  var time=document.getElementsByClassName("timer")
   
  var timings=30;
  var i=0;
  var myInterval = setInterval(Timeout, 1000);
  function Timeout(){
  if((timings*60-i)%60>=10){
  time[0].innerHTML=parseInt(`${(timings*60-i)/60}`)+":"+`${(timings*60-i)%60}`;
  }
  else{
  time[0].innerHTML=parseInt(`${(timings*60-i)/60}`)+":0"+`${(timings*60-i)%60}`;
  }  
i++;
  }}




  let cards = document.querySelectorAll('.game-area__item');
  let counts = document.querySelectorAll('.game-area__count');
  let overlay = document.querySelector('.overlay');

  cards.forEach(element =>{
    element.addEventListener('click', ()=>{
        element.querySelector('.game-area__diamond').style.display = "block";
        element.querySelector('.game-area__cell').style.display = "none";
        
        let count = document.querySelector('.empty');
        count.classList.remove('empty');
        count.classList.add('full');
        let full = document.querySelectorAll('.full');
          full.forEach(el =>{
          el.querySelector('.stone-white').classList.add('d-none');
          el.querySelector('.green').classList.remove('d-none');
        })
        element.disabled = true;        
        if (counts.length === full.length) {
          timer();
          setTimeout(() => {
            overlay.style.display = "flex";
          }, "500");
          setTimeout(() => {
            window.location.reload()
          }, "1800000");        
        }
    });
  });

  



  
  

  
 