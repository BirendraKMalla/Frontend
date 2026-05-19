const clickBtn = document.getElementsByClassName('button'); 
const placeholder = document.getElementsByClassName("placeholder");

// 1. First button event
clickBtn[0].addEventListener('mouseleave', function() { 
    window.alert("Hello from Mouse Leave!"); 
});

// 2. Second button event
clickBtn[1].addEventListener('mouseenter', function() {
    window.alert("Hello from Hover!");
});

// 3. Input element event (Added [0] and changed to camelCase)
placeholder[0].addEventListener('mouseover', function() {
    placeholder[0].style.backgroundColor = 'red';
});

placeholder[0].addEventListener('mouseout', function() {
    placeholder[0].style.backgroundColor = 'purple';
});
