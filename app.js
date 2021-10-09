function SmoothScroll(target,duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startingPosition = window.pageYOffset;
    var distance = targetPosition - startingPosition;
    var startTime = null;

    function AnimationScroll(currentTime){
            if(startTime === null) startTime = currentTime;
console.log(startTime);
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startingPosition, distance, duration);

            window.scrollTo(0,run);

            if(timeElapsed < duration) requestAnimationFrame(AnimationScroll);
console.log('timeElapsed :' + timeElapsed + duration);
        }

        function ease(t, b, c, d) {
            t /= d;
            t--;
            return -c * (t*t*t*t - 1) + b;
        };

    requestAnimationFrame(AnimationScroll);
}

var link_s = document.querySelector('.link_s');
link_s.addEventListener('click', function(){
    SmoothScroll('.link_f', 1000);
});
var link_f = document.querySelector('.link_f');
link_f.addEventListener('click', function(){
    SmoothScroll('.link_s', 1000);
});