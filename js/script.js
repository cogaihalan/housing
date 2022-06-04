 


    // Blog Popup
 const BUTTON_BLOGS = document.querySelectorAll(".btn-blog")
 const BLOG_POPUP = document.querySelector(".blog__popup")
 const CLOSE_BLOG = document.querySelector(".btn-close")
 const POPUP_CONTAINER   = document.querySelector(".blog__popup-content") 
 
    BUTTON_BLOGS.forEach((item) =>{
        item.onclick= function(){
            BLOG_POPUP.classList.add("open");
        }


    })

    function hidePopup(){
        BLOG_POPUP.classList.remove("open")
    }
    BLOG_POPUP.addEventListener('click',hidePopup)
    CLOSE_BLOG.addEventListener('click',hidePopup)
    POPUP_CONTAINER.addEventListener('click',function(event){
        event.stopPropagation();

        
    })





    // Navigation Bar
    const NAVBAR_LIST= document.querySelectorAll('.header__nav-item')
    console.log(NAVBAR_LIST)
    NAVBAR_LIST.forEach((item) => {
        item.onclick = function(){
            const ACTIVE_ITEM = document.querySelector(".header__nav-item.active")
            ACTIVE_ITEM.classList.remove("active")
            item.classList.add("active")
        }
    })