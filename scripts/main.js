// -agregando un evento a section GIFT

const gift_button = document.querySelector('.gift_button');
const gift_containerimg = document.querySelector('.gift_container-img');
const gift_surprise = document.querySelector('.gift_surprise');

gift_surprise.style.display = 'none';
gift_button.addEventListener('click',function(e){
    if(gift_surprise.style.display != 'none'){
        gift_surprise.style.display = 'none';
        gift_containerimg.style.display = 'flex';
    }
    else{
        gift_surprise.style.display = 'flex';
        gift_containerimg.style.display = 'none';
       
    }
});

// --------------------------navegation--------
const nav_ul = document.querySelector('.nav_ul');
const nav_button = document.querySelector('.nav_button');
const nav_access = document.querySelector('.nav_access');

nav_button.addEventListener('click',()=>{
    nav_ul.classList.toggle('activo');
    nav_access.classList.toggle('activo');
});
// ----------chage word-------------------------
const word = document.querySelector('.presentation_footer_change');
const words = ['Writing','Speaking','Listening','Una Asesoría Online 🙋‍♂️'];

function change_word(){
    setTimeout(function(){
        word.textContent = words[0];
    },1000);
    setTimeout(function(){
        word.textContent = words[1];
    },2000);
    setTimeout(function(){
        word.textContent = words[2];
    },3000);
    setTimeout(function(){
        word.textContent = words[3];
    },4000);

};
setInterval(()=>{
    change_word();
},1000);