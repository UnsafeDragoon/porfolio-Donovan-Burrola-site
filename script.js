let handle = document.getElementById('handle')
let shaft = document.getElementById('shaft')
let loadPage = document.querySelector('.load')


// right:3650px;
//   bottom: 2000px;
//   transform: scale(3.5);


function leverOpen(){
    let x = document.querySelectorAll('.light')
    let y = document.querySelector('.glass-panel')
    let z = 0;
    handle.style.bottom = '0'
    shaft.style.height = '60px'
    shaft.style.bottom = '0'
    for (let i=0; i<=2; i++){
        // console.log('free'+x[i])
        (function(ind) {
            setTimeout(function(){x[i].style.backgroundColor = 'green'; x[i].style.boxShadow = '0px 0px 20px 1.5em #228e2035'}, 1000 + (1200 * ind));
        })(i);
        
        // setTimeout(() => x[i].style.backgroundColor = 'green', 1000)
    }
    // setTimeout(y.style.bottom = '30em', 3600)
   
     setTimeout(function(){y.style.bottom = '160em';}, 3800 );
     setTimeout(function(){
        document.querySelector('.interior-hole').style.transform = 'scale(3.7)'
        document.querySelector('.outer-ring').style.transform = 'scale(3.7)'
        document.querySelector('.three-lights').style.marginTop = '-150px'
        document.querySelector('.space-lever').style.marginLeft = '-25vw'
        document.querySelector('.rail').style.marginLeft = '-25vw'
        document.querySelector('.tube').style.marginRight = '-28vw'
        setTimeout(function(){window.location.href = 'homepage.html'}, 4000 );
     }, 6200 );
    //  setTimeout(function(){window.location.href = 'homepage.html'}, 46000000 );
}
// for (let i=0; i<=10; i++) {
//     setTimeout(() => {console.log(i);}, 1000 * i);
// }
// for (var i=0;i<=10;i++) {
//     (function(ind) {
//         setTimeout(function(){console.log(ind);}, 1000 + (3000 * ind));
//     })(i);
//  }