let nextDom=document.getElementById('next');
console.log(nextDom);
let prevDom=document.getElementById('prev');
let carouselDom=document.querySelector('.carousel');
let listItemDom=document.querySelector('.carousel .list');
let thumbnailDom=document.querySelector('.carousel .thumbnail');
nextDom.onclick=function(){
    showSlider('next');}
prevDom.onclick=function(){
    showSlider('prev');
}
    function showSlider(type){
        let itemList=document.querySelectorAll('.carousel .list .item');
        let itemThumbnail=document.querySelectorAll('.carousel .thumbnail .item')
        if (type === 'next'){
            listItemDom.appendChild(itemList[0]); //appendchild actually moves does not add.
            thumbnailDom.appendChild(itemThumbnail[0]);
            carouselDom.classList.add('next');
            if (carouselDom.classList[1]==='prev'){
                carouselDom.classList.remove('prev');
            }
            console.log(carouselDom.classList[1]);
        }
        else{
            listItemDom.prepend(itemList[itemList.length - 1]);
        thumbnailDom.prepend(itemThumbnail[itemThumbnail.length - 1]);
        if (carouselDom.classList[1]==='next'){
            carouselDom.classList.remove('next');
        }
        carouselDom.classList.add('prev');
        }
    }
