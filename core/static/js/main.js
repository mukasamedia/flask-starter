//burger menu
var burger = document.querySelector('.burger');
var menu = document.querySelector('#'+burger.dataset.target);
burger.addEventListener('click', function() {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});

//close notifications
var deleteButtons = document.getElementsByClassName('delete')

for(var i=0; i<deleteButtons.length; i++){
  deleteButtons[i].addEventListener('click', function(){
    this.parentNode.classList.add('is-hidden')
  })
}