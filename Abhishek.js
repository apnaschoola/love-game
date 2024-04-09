const target = document.getElementById('target');
let yes = document.getElementById('yes');


// tabnine:text|explain|document|ask
 yes.addEventListener('click',()=>{
    alert(" Yes I love you  jaan 💝💝💘💖");
 })
//  tabnine:text|explain|document|ask
 function moveTarget(){
    const maxWidh = 400;
    const maxHeigth = 400;

    const ranomX = Math.floor(Math.random()*maxWidh);
    const ranomY = Math.floor(Math.random()*maxHeigth);

    target.style.left = ranomX + 'px';
    target.style.top = ranomY + 'px';

 }
//  tabnine:text|explain|document|ask
 target.addEventListener('mouseenter',function(){
    moveTarget();
 })