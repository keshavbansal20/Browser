let filterOptions = document.querySelectorAll(".filter-colors__container");
let modalFilters = document.querySelectorAll(".modal_filters");
let mainContainer = document.querySelector(".main-container");
let modalContainer = document.querySelector(".modal_container");
let addBtn= document.querySelector(".add");
let descBox = document.querySelector(".desc-box");
let colors = ["lightpink" ,"lightblue" , "lightgreen", "black"]
let flag = false;
let cColor = colors[colors.length-1];


for (let i = 0; i < filterOptions.length; i++) {
    filterOptions[i].addEventListener("click", function () {
        let arr = filterOptions[i].children;
        // present classes
        // console.log(arr[1]);
        let chclassesArr = arr[0].classList;
        // console.log(classesArr[1]);
        mainContainer.style.backgroundColor = chclassesArr[0];


    });
}

addBtn.addEventListener("click" , function(){
    if(flag == false){
        modalContainer.style.display = "flex";
    }else{
        modalContainer.style.display = "none";
    }
    flag!=flag
})
for(let i= 0 ; i< modalFilters.length;i++){
    modalFilters[i].addEventListener("click" , function(){
    modalFilters.forEach(function(modalFilter){
        modalFilter.classList.remove("border");
    })
    modalFilters[i].classList.add("border");
    cColor = modalFilters[i].classList[1];
    })

}

descBox.addEventListener("keydown" , function(e){
    if(e.key=="Enter"){
        let task = descBox.value;
         console.log("task is ", task, "cColor ", cColor);
        // tiket create 
        // ticket create 
        //  clean up 
        cColor = colors[colors.length-1];
        modalContainer.style.display = "none";
        flag = false;
        descBox.value = ""
    }
})