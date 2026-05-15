var value = 0;


document.querySelector('.plus').addEventListener('click', function(e){
    value++;
    document.querySelector('.value').innerHTML = value;
});

document.querySelector('.minus').addEventListener('click', function(e){
    value--;
    document.querySelector('.value').innerHTML = value;
});