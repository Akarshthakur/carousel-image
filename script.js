let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click',function(){
    let items = documents.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})