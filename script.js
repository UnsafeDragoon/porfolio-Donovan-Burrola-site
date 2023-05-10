let handle = document.getElementById('handle')
let shaft = document.getElementById('shaft')
let loadPage = document.querySelector('.load')
let galleryData = [
    [
        ['National Injury Prevention Day Website','images/webScreenshot1.png',`The National Injury Prevention Day website was a collaborative partner project and the first real website we have ever made in the class. At this point we have learned fundamental CSS and HTML skills and this was when we really discovered the strengths and weaknesses of making a website with the two. We had a different assignment than most of the class as we were given a choice to make a website as an entry for a contest hosted by the Trauma Center Association of America. The goal of this site was to give information on living safer lives with different pages exploring different sub-topics. Even though I was having trouble with understanding CSS, I investigated new methods to write commands and developed some new ideas in the process. Reflecting on this project with what I know now, I see so many potential areas to improve and expand upon the site's original idea, which makes me want to work on it even more, well after it was due.
        `],
        ['Internet Safety Website','images/webScreenshot2.png',`The Internet safety website similarly to the National Injury Prevention Day website was to be an informative site that also offers possible solutions on an individual level. Unlike the previous site, however, this project had a gimmick attached to it; we were not allowed to work on our own site for the majority of the time given. This would instead be replaced by a rotating system of workers and managers. This would test our collaboration and ability to communicate our desires with fellow classmates. Reflecting back, this experience helped teach me the importance of structuring code properly. Sometimes when one worker was finished and another took their place, they would struggle in finding a way to pick up where they left off since the last person had such specific styling names and organization. In the last few days, we were given the opportunity to wrap up any features in our own code and I persisted in making the site more device friendly. 

        `],
        ['Practice Layout Website','images/webScreenshot3.png',`This was the only website in which our class didn't have to do any planning whatsoever. The assignment was to replicate the site to the given prototypes as we would with a potential client. Since I had much more flexibility in terms of time for programming, I made sure to make the site as responsive as I could while still using HTML and CSS. In the end I was happy with how it turned out and it was a nice change of pace following another prototype for once.

        `],
        ['Income Calculator Website','images/webScreenshot4.png',`Prior to the Income Calculator website, I have initiated JavaScript courses on my own time to prepare for an assignment using JavaScript, HTML, and CSS. Now was the time to put it into practice. Our assignment was to create a website that calculates a variety of incomes based on the selection a visitor makes from a list of careers. Learning JavaScript was like how I first experienced CSS, a lot of confusion and persistence. I would say that putting the newly learned language to use was so much more helpful than studying it, but it still did not give me a good enough understanding to let me confidently say I can use JavaScript, that does not mean that I did not try my best, rather that I needed more practice. Reflecting on this site with current knowledge, I see that I could have vastly reduced the amount of JavaScript required in the initial build, and I am proud to say that. One project difference gave me the experience I needed to see my past mistakes and grow from it, with more to come.

        `],
        ['Apologize Board Game Website','images/webScreenshot5.png',`The Apologize board game was the only coding assignment to have groups larger than 2 people, which required the most communication as one partner may cause a conflict to the entire project. The assignment was to adapt a board game into a digital interface with the addition of a few modifications using HTML, CSS, and JavaScript. This project hit close to home, because it is my dream to be a game developer and this was technically creating a game. The majority of this site was coded in JavaScript which gave me the best opportunity to understand JavaScript I could have possibly asked for. As a result of this, I was required to plan out and create algorithms that were compatible with my partners' code. This was a big project and we got many of our intended features complete with the exception of a select few. Even though the site was not fully complete, I was very proud of it and by the end of the project I found myself still wanting to work on it. Reflecting on the project, my skill in JavaScript dramatically improved and I created much more efficient and flexible code than those that I wrote in my Income Calculator website.

        `]


    ],
    [
        ['Career Research Essay','writtenPDFs/Career of Choice Research Essay.pdf', `This writing assignment was one in that we wrote about a particular career of choice that we were personally interested in. I decided to write about game developers and the problems that they encounter on a daily basis. This was personal to me because in the future I aspire to become one myself and it was an opportunity to not only discover more about my intended future, but also express my passion for video games in general.
        `],
        ['Content For Injury Prevention Day', 'writtenPDFs/Content] - Google Docs.pdf',`For my National Injury Prevention Day entry website, my partner and I decided to write topics and subtopics for the site as a whole. Each focusing on specific aspects of their parent heading. We continuously sourced articles in facts and statistics we shared in our body paragraphs. One side fact about this site is that each topic has a color theme to distinguish their sections with the exception of the landing page which is colorful in nature.

        `],
        ['Content For Internet Safety','writtenPDFs/text.pdf',`Since this project was individual, I was also given the task to write all of the content for all the webpages. My overarching goal was to ground the argument in facts and logic to convince the visitor to take protective measures against various online dangers such as your digital footprint, harmful softwares, and handling your personal information.

`],
        [`E.M. Forster's "The Machine Stops"`,'writtenPDFs/donovan burrola - _The Machine Stops_ questions.pdf',`This writing prompt was our personal interpretation of the story “The Machine Stops” created by E.M. Forster, which is a story about a human population living underground under the watchful eye of a machine that takes care of them. The people in the story are physically unfit and are reliant on the machine to survive to the point where they condemn the outside world entirely. I described it as a dystopian tale and compared the author’s portrayal of the world in the story to modern day society.
        `]      
    ],
    [
    ['Adobe Photoshop']
    ['Meta Javascript Course']

    ]
]








let sections = document.querySelectorAll('section')
let headings = document.querySelectorAll('h2')











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
    const viewportBottom = window.scrollY + window.innerHeight;
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
    sections.forEach(section => {
        if (section.offsetTop < viewportBottom && section.offsetTop + section.offsetHeight >= window.scrollY) {
          section.style.opacity = 1;
        }
      });
      headings.forEach(heading => {
        if (heading.offsetTop < viewportBottom && heading.offsetTop + heading.offsetHeight >= window.scrollY) {
          heading.style.opacity = 1;
        }
      });
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

function sucessPage(){
    let x = Math.floor( Math.random() * 10 )
    console.log(x)
    let celebration = document.querySelector('header')
    if (x === 0){
        celebration.style.backgroundImage = 'url("images/astrolove.gif")'
    } else if (x === 1){
        celebration.style.backgroundImage = 'url("images/astrofistup.gif")'
    } else if (x === 2){
        celebration.style.backgroundImage = 'url("images/astromindblown.gif")'
    } else if (x === 3){
        celebration.style.backgroundImage = 'url("images/astrothumbsup.gif")'
    } else if (x === 4){
        celebration.style.backgroundImage = 'url("images/astroclap.gif")'
    } else if (x === 5){
        celebration.style.backgroundImage = 'url("images/astrofloss.gif")'
    } else if (x === 6){
        celebration.style.backgroundImage = 'url("images/astrolook.gif")'
    } else if (x === 7){
        celebration.style.backgroundImage = 'url("images/astrorock.gif")'
    } else if (x === 7){
        celebration.style.backgroundImage = 'url("images/astrostrong.gif")'
    } 
    document.querySelector('header').style.marginTop = '0'
    document.querySelector('header>h1').style.opacity ='1'
    document.querySelector('header>h1').style.fontSize ='10em'
}
function codeGalleryInit(){
    document.querySelector('.backarrow').style.left = '0'
    document.querySelector('.gallery-title').style.bottom = '0'
    document.querySelector('.code-display').style.left ='0'
    document.querySelector('.code-article').style.right = '0'
}
function engGalleryInit(){
    document.querySelector('.backarrow').style.left = '0'
    document.querySelector('.gallery-title').style.bottom = '0'
    document.querySelector('.prev-next-arrows').style.top = '0'
    document.querySelector('.english-sample').style.right = '0'
    document.querySelector('.eng-gallery-text').style.left ='0'
}
function otherGalleryInit(){
    document.querySelector('.backarrow').style.left = '0'
    document.querySelector('.gallery-title').style.bottom = '0'
    document.querySelector('.prev-next-arrows').style.top = '0';
    document.querySelector('.other-gallery-text').style.right ='0'
    document.querySelector('.other-sample').style.left ='0'
}

let codeGalleryNum = 0;
let engGalleryNum = 0;
let otherGalleryNum = 0;


function codeGallery(value){
    
    document.querySelector('.backarrow').style.left = '-100vw'
    document.querySelector('.gallery-title').style.bottom = '100vh'
    document.querySelector('.code-display').style.left ='100vw'
    document.querySelector('.code-article').style.right = '100vw'
    setTimeout(function(){ codeGalleryNum += value;
        if(codeGalleryNum < 0){
            codeGalleryNum = 4;
        } else if ( codeGalleryNum > 4){
            codeGalleryNum = 0;
        } else{
            console.log('Gallery has not looped')
        }
        console.log(galleryData[0][codeGalleryNum])
        document.getElementById('codeTitle').innerHTML = galleryData[0][codeGalleryNum][0]
        document.getElementById('codeImage').src = galleryData[0][codeGalleryNum][1]
        document.getElementById('codeText').innerHTML = galleryData[0][codeGalleryNum][2]
        document.querySelector('.backarrow').style.left = '0'
         document.querySelector('.gallery-title').style.bottom = '0'
        document.querySelector('.code-display').style.left ='0'
        document.querySelector('.code-article').style.right = '0'
}, 2000 );


    // codeGalleryNum += value;
    // if(codeGalleryNum < 0){
    //     codeGalleryNum = 4;
    // } else if ( codeGalleryNum > 4){
    //     codeGalleryNum = 0;
    // } else{
    //     console.log('Gallery has not looped')
    // }
    // console.log(galleryData[0][codeGalleryNum])
    // document.getElementById('codeTitle').innerHTML = galleryData[0][codeGalleryNum][0]
    // document.getElementById('codeImage').src = galleryData[0][codeGalleryNum][1]
    // document.getElementById('codeText').innerHTML = galleryData[0][codeGalleryNum][2]
}

function engGallery(value){
    document.querySelector('.backarrow').style.left = '-100vw'
    document.querySelector('.gallery-title').style.bottom = '100vh'
    document.querySelector('.prev-next-arrows').style.top = '100vh'
    document.querySelector('.english-sample').style.right = '100vw'
    document.querySelector('.eng-gallery-text').style.left ='100vw'
    setTimeout(function(){ 
        engGalleryNum += value;
        if(engGalleryNum < 0){
            engGalleryNum = 3;
        } else if ( engGalleryNum > 3){
            engGalleryNum = 0;
        } else{
            console.log('Gallery has not looped')
        }
        console.log(galleryData[1][engGalleryNum])
        
        document.getElementById('engTitle').innerHTML = galleryData[1][engGalleryNum][0]
        document.getElementById('engSample').src = galleryData[1][engGalleryNum][1]
        document.getElementById('engText').innerHTML = galleryData[1][engGalleryNum][2]
        document.querySelector('.backarrow').style.left = '0'
        document.querySelector('.gallery-title').style.bottom = '0'
        document.querySelector('.prev-next-arrows').style.top = '0'
        document.querySelector('.english-sample').style.right = '0'
        document.querySelector('.eng-gallery-text').style.left ='0'
       
}, 2000 );
}
function otherGallery(value){
    document.querySelector('.backarrow').style.left = '-100vw'
    document.querySelector('.gallery-title').style.bottom = '100vh'
    document.querySelector('.prev-next-arrows').style.top = '100vh'
    document.querySelector('.english-sample').style.right = '100vw'
    document.querySelector('.eng-gallery-text').style.left ='100vw'
    setTimeout(function(){ 
        otherGalleryNum += value;
        if(otherGalleryNum < 0){
            otherGalleryNum = 3;
        } else if ( otherGalleryNum > 3){
            otherGalleryNum = 0;
        } else{
            console.log('Gallery has not looped')
        }
        console.log(galleryData[1][otherGalleryNum])
        
        document.getElementById('otherTitle').innerHTML = galleryData[2][otherGalleryNum][0]
        document.getElementById('otherSample').src = galleryData[2][otherGalleryNum][1]
        document.getElementById('otherText').innerHTML = galleryData[2][otherGalleryNum][2]
        document.querySelector('.backarrow').style.left = '0'
        document.querySelector('.gallery-title').style.bottom = '0'
        document.querySelector('.prev-next-arrows').style.top = '0'
        document.querySelector('.other-sample').style.right = '0'
        document.querySelector('.other-gallery-text').style.left ='0'
       
}, 2000 );
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


function loop(value){
    engGalleryNum+=value
    if(engGalleryNum < 0){
        engGalleryNum = 3;
    } else if ( engGalleryNum > 3){
        engGalleryNum = 0;
    } else{
        console.log(engGalleryNum)
    }
    console.log(engGalleryNum)
}
