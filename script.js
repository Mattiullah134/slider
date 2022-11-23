let tabBox = document.querySelector(".tab-box") ,
tabs = document.querySelectorAll(".tab"),
arrowIcons = document.querySelectorAll(".icons i");

// handle the icons
const handleIcon = ()=>{
    let scrollVal = Math.round(tabBox.scrollLeft);
    // console.log(scrollVal)
    let maxScrollWidth = tabBox.scrollWidth - tabBox.clientWidth; 
    // console.log(maxScrollWidth)
    console.log(maxScrollWidth , scrollVal)
    arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
    arrowIcons[1].parentElement.style.display = maxScrollWidth > scrollVal ? "flex" : "none";
};
// now handle the arrowicons
arrowIcons.forEach((icon) =>{
    icon.addEventListener('click' , ()=>{
        console.log(icon.id);
        tabBox.scrollLeft += icon.id ==="left"? -350 : +350;
        setTimeout(() => handleIcon() , 50);
    })
});
// ad the active class to the clicked tab
tabs.forEach((tab) =>{
    tab.addEventListener('click' , ()=>{
        tabBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active")
    })
});
// Handle the mouse drag events
let isDrag = false;
const draggable=(e)=>{
    if(!isDrag) return;
    tabBox.scrollLeft -= e.movementX;
    handleIcon()
    tabBox.classList.add("draging")
}
const stopDrag=()=>{
    isDrag = false;
    handleIcon()
    tabBox.classList.remove("draging")

}
tabBox.addEventListener('mousedown' , () => isDrag = true);
tabBox.addEventListener('mousemove' , draggable);
document.addEventListener('mouseup' , stopDrag);