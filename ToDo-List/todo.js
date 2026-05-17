let inputList=[{
    item: 'buy milk' , 
    dueDate: '13/04/2026'
}
,{
    item: 'buy chips' , 
    dueDate: '14/04/2026'
}
];
 displayTodoItems();

function addTodo(){
    let inputElement=document.querySelector('#todo-text');
    let dateElement=document.querySelector('#todo-date');
let inputText=inputElement.value;
let inputdate=dateElement.value;
inputList.push({item: inputText , dueDate: inputdate});
inputElement.value='';
dateElement.value='';
 displayTodoItems();
} 

function displayTodoItems(){
    let displayItems=document.querySelector('.todo-container');
    let newHtml='';
    for(let i=0; i<inputList.length; i++){
        let{item,dueDate}=inputList[i];
newHtml+=`
      <span>${item}</span>
      <span>${dueDate}</span>
      <button id="delete" onclick="inputList.splice(${i},1);displayTodoItems();">Delete</button>
      
    `;
    }
    displayItems.innerHTML=newHtml;
    
}
