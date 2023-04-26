let handle = document.getElementById('handle')
let shaft = document.getElementById('shaft')


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
   
     setTimeout(function(){y.style.bottom = '80em';}, 3800 );
     setTimeout(function(){y.style.bottom = '0em';}, 6200 );

}
// for (let i=0; i<=10; i++) {
//     setTimeout(() => {console.log(i);}, 1000 * i);
// }
// for (var i=0;i<=10;i++) {
//     (function(ind) {
//         setTimeout(function(){console.log(ind);}, 1000 + (3000 * ind));
//     })(i);
//  }