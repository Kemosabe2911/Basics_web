let img=document.querySelector('img');
window.addEventListener('scroll',function(){
    let value= 1+window.scrollY/ -1250;
    img.style.opacity=value;
})