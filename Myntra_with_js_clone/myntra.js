let bagsItems;
onload();

function onload(){
   let bagsItemStr= localStorage.getItem('bagsItem');
bagsItems = bagsItemStr ? JSON.parse(bagsItemStr) : [];
displayItems();
displayItemsCount();
}



function addToBag(itemId){
 bagsItems.push(itemId);
 localStorage.setItem('bagsItem', JSON.stringify(bagsItems));
 displayItemsCount();
}

function displayItemsCount(){
let itemsCount= document.querySelector('.bag-item-count');
if(bagsItems.length>0){
     itemsCount.style.visibility='visible';
itemsCount.innerText=bagsItems.length;
}
else{
   itemsCount.style.visibility= 'hidden';
}
}

function displayItems(){
let itemsContainerElement =  document.querySelector(".items-container"); 
if(!itemsContainerElement){
    return;
}
let innerHtml = '';
items.forEach(itemsDetails => {
 innerHtml+=`<div class="item-container">
                <img class="item-img" src="${itemsDetails.image}" alt="">
                <div class="rating">${itemsDetails.rating.stars}⭐|${itemsDetails.rating.count}</div>
                <div class="company-name">${itemsDetails.company}</div>
                <div class="price">
                    <span class="curr-price">${itemsDetails.current_price}</span>
                     <span class="OG-price">${itemsDetails.original_price}</span>
                      <span class="discount">(${itemsDetails. discount_percentage}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${itemsDetails.id});">Add To Bag</button>
            </div>
        </div> `;
});

itemsContainerElement.innerHTML= innerHtml;
}