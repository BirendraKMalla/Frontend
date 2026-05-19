const display = document.querySelector('#noOfItems');
const addBtn = document.querySelector('.add');
const subBtn = document.querySelector('.sub');

let count = 0;

//inc count
addBtn.addEventListener('click', function() {
    count++;
    display.textContent = count;
});

//dec count
subBtn.addEventListener('click', function(){
        if(count <= 0){
            count = 0;
            display.textContent = count;
        }
        else{
            count--;
            display.textContent = count;
        }
        
});
