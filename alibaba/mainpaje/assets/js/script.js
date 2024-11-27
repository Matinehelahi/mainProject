const accordingContent = document.querySelectorAll(".according-content");

accordingContent.forEach((item, index) => {
    let header = item.querySelector(".header-according");
    header.addEventListener("click", () => {
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if (item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector(".bx").classList.replace("bxs-chevron-down", "bx-chevron-up");
        } else {
            description.style.height = "0px";
            item.querySelector(".bx").classList.replace("bx-chevron-up", "bxs-chevron-down");

        }
        removeOpen(index);
    })
})
function removeOpen(index1) {
    accordingContent.forEach((item2, index2 => {
        if (index1 != index2) {
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item.querySelector(".bx").classList.replace("bx-chevron-up", "bxs-chevron-down");

        }
    }))
}
////////////////////////////////////////////////
const select_first = document.querySelector(".is-first");
const select_last = document.querySelector(".is-last");

const select_calender_first = document.querySelector(".is-calender-1");
const select_calender_last = document.querySelector(".is-calender-2");

const select_passenger = document.querySelector(".is-passenger");


const options_list = document.querySelector(".options_list");
const calendar_box = document.querySelector(".calendar-box");
const passenger_list = document.querySelector(".passenger-list");

const options = document.querySelectorAll(".option");
const cities = document.querySelectorAll(".cit");



select_calender_first.addEventListener("click", () => {
    calendar_box.classList.toggle("active");
});
select_calender_last.addEventListener("click", () => {
    calendar_box.classList.toggle("active");
});

select_first.addEventListener("click", () => {
    options_list.classList.toggle("active");
});
select_last.addEventListener("click", () => {
    options_list.classList.toggle("active-end");
});

select_passenger.addEventListener("click", () => {
    passenger_list.classList.toggle("active");
});



cities.forEach((cit) => {
    cit.addEventListener("click", () => {
        cities.forEach((cit) => { cit.classList.remove('selected') });
        select_last.querySelector(".label_last").innerHTML = cit.innerHTML;
        cit.classList.add("selected");
        options_list.classList.toggle("active-end");
    });

});

cities.forEach((cit) => {
    cit.addEventListener("click", () => {
        cities.forEach((cit) => { cit.classList.remove('selected') });
        select_first.querySelector(".label_first").innerHTML = cit.innerHTML;
        cit.classList.add("selected");
        options_list.classList.toggle("active");
    });

});

///////////////////////////////////////////////////////

const adult_input=document.getElementById("adult_input");
        function stepperAdult(btn){
            let id = btn.getAttribute("id");
            let min = adult_input.getAttribute("min");
            let max = adult_input.getAttribute("max");
            let step = adult_input.getAttribute("step");
            let val = adult_input.getAttribute("value");
            let calcstep = (id == "increment") ? (step*1):(step * -1);
            let newValue = parseInt(val) + calcstep;

            if(newValue >= min && newValue <= max){
                adult_input.setAttribute("value" , newValue);
            }
        };

        const child_input=document.getElementById("child_input");
        function stepperChild(btn){
            let id = btn.getAttribute("id");
            let min = child_input.getAttribute("min");
            let max = child_input.getAttribute("max");
            let step = child_input.getAttribute("step");
            let val = child_input.getAttribute("value");
            let calcstep = (id == "increment") ? (step*1):(step * -1);
            let newValue = parseInt(val) + calcstep;

            if(newValue >= min && newValue <= max){
                child_input.setAttribute("value" , newValue);
            }

        }
        const infant_input=document.getElementById("infant_input");
        function stepperinfant(btn){
            let id = btn.getAttribute("id");
            let min = infant_input.getAttribute("min");
            let max = infant_input.getAttribute("max");
            let step = infant_input.getAttribute("step");
            let val = infant_input.getAttribute("value");
            let calcstep = (id == "increment") ? (step*1):(step * -1);
            let newValue = parseInt(val) + calcstep;

            if(newValue >= min && newValue <= max){
                infant_input.setAttribute("value" , newValue);
            }

        }
        