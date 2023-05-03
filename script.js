let handle = document.getElementById('handle')
let shaft = document.getElementById('shaft')
let loadPage = document.querySelector('.load')
let galleryData = [
    [
        ['National Injury Prevention Day Website','images/webScreenshot1.png',`The National Injury Prevention Day website was a collaborative partner project and the first real website we have ever made in the class. At this point we have learned fundamental CSS and HTML skills and this was when we really discovered the strengths and weaknesses of making a website with the two. We had a different assignment than most of the class as we were given a choice to make a website as an entry for a contest hosted by the Trauma Center Association of America. The goal of this site was to give information on living safer lives with different pages exploring different sub-topics. Even though I was having trouble with understanding CSS, I investigated new methods to write commands and developed some new ideas in the process. Reflecting on this project with what I know now, I see so many potential areas to improve and expand upon the site's original idea, which makes me want to work on it even more, well after it was due.
        `],
        ['Internet Safety Website','images/webScreenshot2.png',`The National Injury Prevention Day website was a collaborative partner project and the first real website we have ever made in the class. At this point we have learned fundamental CSS and HTML skills and this was when we really discovered the strengths and weaknesses of making a website with the two. We had a different assignment than most of the class as we were given a choice to make a website as an entry for a contest hosted by the Trauma Center Association of America. The goal of this site was to give information on living safer lives with different pages exploring different sub-topics. Even though I was having trouble with understanding CSS, I investigated new methods to write commands and developed some new ideas in the process. Reflecting on this project with what I know now, I see so many potential areas to improve and expand upon the site's original idea, which makes me want to work on it even more, well after it was due.
        `],
        ['Practice Layout Website','images/webScreenshot1.png',`The National Injury Prevention Day website was a collaborative partner project and the first real website we have ever made in the class. At this point we have learned fundamental CSS and HTML skills and this was when we really discovered the strengths and weaknesses of making a website with the two. We had a different assignment than most of the class as we were given a choice to make a website as an entry for a contest hosted by the Trauma Center Association of America. The goal of this site was to give information on living safer lives with different pages exploring different sub-topics. Even though I was having trouble with understanding CSS, I investigated new methods to write commands and developed some new ideas in the process. Reflecting on this project with what I know now, I see so many potential areas to improve and expand upon the site's original idea, which makes me want to work on it even more, well after it was due.
        `],
        ['Income Calculator Website','images/webScreenshot1.png',`The National Injury Prevention Day website was a collaborative partner project and the first real website we have ever made in the class. At this point we have learned fundamental CSS and HTML skills and this was when we really discovered the strengths and weaknesses of making a website with the two. We had a different assignment than most of the class as we were given a choice to make a website as an entry for a contest hosted by the Trauma Center Association of America. The goal of this site was to give information on living safer lives with different pages exploring different sub-topics. Even though I was having trouble with understanding CSS, I investigated new methods to write commands and developed some new ideas in the process. Reflecting on this project with what I know now, I see so many potential areas to improve and expand upon the site's original idea, which makes me want to work on it even more, well after it was due.
        `],
        ['Apologize Board Game Website','images/webScreenshot1.png',`The National Injury Prevention Day website was a collaborative partner project and the first real website we have ever made in the class. At this point we have learned fundamental CSS and HTML skills and this was when we really discovered the strengths and weaknesses of making a website with the two. We had a different assignment than most of the class as we were given a choice to make a website as an entry for a contest hosted by the Trauma Center Association of America. The goal of this site was to give information on living safer lives with different pages exploring different sub-topics. Even though I was having trouble with understanding CSS, I investigated new methods to write commands and developed some new ideas in the process. Reflecting on this project with what I know now, I see so many potential areas to improve and expand upon the site's original idea, which makes me want to work on it even more, well after it was due.
        `]


    ],
    [

    ],
    [

    ]
]

function leverOpen(){
    let x = document.querySelectorAll('.light')
    let y = document.querySelector('.glass-panel')
    let z = 0;
    handle.style.bottom = '0'
    shaft.style.height = '60px'
    shaft.style.bottom = '0'
    for (let i=0; i<=2; i++){
        (function(ind) {
            setTimeout(function(){x[i].style.backgroundColor = 'green'; x[i].style.boxShadow = '0px 0px 20px 1.5em #228e2035'}, 1000 + (1200 * ind));
        })(i);
        
    }
   
     setTimeout(function(){y.style.bottom = '180em';}, 3800 );
     setTimeout(function(){
        y.style.visibility = 'hidden';
        document.querySelector('.interior-hole').style.transform = 'scale(3.7)'
        document.querySelector('.outer-ring').style.transform = 'scale(3.7)'
        document.querySelector('.three-lights').style.marginTop = '-150px'
        document.querySelector('.space-lever').style.marginLeft = '-45vw'
        document.querySelector('.rail').style.marginLeft = '-25vw'
        document.querySelector('.tube').style.marginRight = '-55vw'
        setTimeout(function(){window.location.href = 'homepage.html'}, 2000 );
     }, 6200 );
}
window.addEventListener("scroll", function() {
    var elementTarget = document.querySelector("header");
    if (window.scrollY === 0) {
        // this.document.querySelector('nav').style.backgroundColor =' rgba(255, 255, 255, 0)'
        if(location.pathname === '/homepage.html'){
            this.document.querySelector('.arrow').style.opacity ='1'
        } else{
            console.log('none')
        }
    } else if (window.scrollY > 0){
        // this.document.querySelector('nav').style.backgroundColor ='rgb(33, 47, 69)'
        if(location.pathname === '/homepage.html'){
            this.document.querySelector('.arrow').style.opacity ='0'
        }
    }
  });
function homePageInit(){
    document.querySelector('.arrow').style.marginTop='80vh'
    document.querySelector('nav').style.top ='0'
    document.querySelector('.first').style.right ='-15vw'
    document.querySelector('.last').style.left ='-15vw'
}
function sidePage(){
    document.querySelector('nav').style.top ='0'
    document.querySelector('header').style.marginLeft = '0'
    document.querySelector('header>h1').style.opacity ='1'
    document.querySelector('header>h1').style.fontSize ='15em'
}



function resizeToMinimum(){
    var minimum    = [640, 480];
    var current    = [window.outerWidth, window.outerHeight];
    var restricted = [];
    var i          = 2;
  
    while(i-- > 0){
      restricted[i] = minimum[i] > current[i] ? minimum[i] : current[i];
    }
  
    window.resizeTo(current[0], current[1]);
  }
  
  window.addEventListener('resize', resizeToMinimum, false)



  