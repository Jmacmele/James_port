 

     var tablinks = document.getElementsByClassName("tab-links");
     var tabcontents = document.getElementsByClassName("tab-contents");
    
     function opentab(tabname) {
         for (tablink of tablinks) {
             tablink.classList.remove("active-link");
         }
         for (tabcontent of tabcontents) {
             tabcontent.classList.remove("active-tab");
         }
         event.currentTarget.classList.add("active-link");
         document.getElementById(tabname).classList.add("active-tab");
     }

     const sidem = document.querySelector(".sidemenu");
     const Makomele=document.querySelector(".fa-bars");
     const dede=document.querySelector(".fa-times");
     Makomele.addEventListener("click",()=>{
    sidem.classList.add("show");
    

     }
    )

    dede.addEventListener("click",()=>{
        sidem.classList.remove("show")
    }

    )
    

     
     const scriptURL = 'https://script.google.com/macros/s/AKfycbx7WXFrYPjCeGqgeW1_ZhL9R5zOVI86q8dE_HNdyn3HrOUfeYHREbsd2CCMR6JPuuYkdA/exec'
     const form = document.forms['submit-to-google-sheet']
     const msg = document.getElementById("msg")

     form.addEventListener('submit', e => {
         e.preventDefault()
         fetch(scriptURL, { method: 'POST', body: new FormData(form) })
             .then(response => {
                 msg.innerHTML = "Message sent successfully"
                 setTimeout(function () {
                     msg.innerHTML = ""
                 }, 500)
                 form.reset()
             })
             .catch(error => console.error('Error!', error.message))
     })
    

