const open = document.getElementById('open');
const modal = document.getElementById('modal');
const close = document.getElementById('close');
console.log(open);
// console.log(modal);
console.log(close);
open.addEventListener('click', function(){
  modal.classList.add('show');
})

close.addEventListener('click', function() {
  modal.classList.remove('show');
});

const modebtn = document.getElementById('modebtn')
.addEventListener('click',function (){
  document.body.classList.toggle('dark');
});

