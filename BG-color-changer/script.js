const container = document.querySelector('.container')
const btn = document.querySelectorAll('.btn')

btn.forEach(function(elem) {
    // console.log(e)

    elem.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target);
        if (e.target.id === 'grey') {
            container.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'orange') {
            container.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'blue') {
            container.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'green') {
            container.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'pink') {
            container.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'red') {
            container.style.backgroundColor = e.target.id;
          }
        
    });
});



