document.addEventListener('DOMContentLoaded',function(){
    var elems = document.querySelectorAll('.sidenav');
    var tabselems = document.querySelectorAll('.tabs');
    var faqs = document.querySelectorAll('.collapsible');
    var carouselelem = document.querySelectorAll('.carousel');
    var partycarousel = document.querySelectorAll('.carousel .carousel-slider .center');

    const WeddingDate = 'May 01, 2022 18:00:00';

    let CountDown = date =>{
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        let WeddingDay = new Date(date).getTime();
        let x = setInterval(function(){
            let now = new Date().getTime();
            let distance = WeddingDay  - now;
            document.getElementById('days').innerText = Math.floor(distance/(day));
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
        },0)
    }
    // var faqs = document.querySelectorAll('.collapsible');
    var navoptions = {
        edge:'right'
    }

   
    M.Sidenav.init(elems,navoptions);
    M.Tabs.init(tabselems,{});
    M.Collapsible.init(faqs, {});
    M.Carousel.init(carouselelem,{});
    M.Carousel.init(partycarousel,{fullWidth:true,indicators:true})
    CountDown(WeddingDate);
    // col.open(0);

    // var instance = M.Sidenav.getInstance(instances);
    // instance.open();

     const sliderClick = function(){
      alert('test')
    }
})