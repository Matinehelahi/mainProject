const accordingContent = document.querySelectorAll(".according-content");

accordingContent.forEach((item, index) => {
    let header = item.querySelector(".header-according");
    header.addEventListener("click", ()=>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height =`${description.scrollHeight}px`;
            item.querySelector(".bx").classList.replace("bxs-chevron-down","bx-chevron-up");
        }else{
            description.style.height = "0px"; 
            item.querySelector(".bx").classList.replace("bx-chevron-up","bxs-chevron-down");

        }
        removeOpen(index);
    })
})
function removeOpen(index1){
    accordingContent.forEach((item2,index2 =>{
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item.querySelector(".bx").classList.replace("bx-chevron-up","bxs-chevron-down");

        }
    }))
}