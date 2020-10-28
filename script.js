const buttons = document.querySelectorAll('#btnmenu');
            buttons.forEach(btn => {
                btn.addEventListener('click', function(e){
                    let x = e.clientX - e.target.offsetLeft;
                    
                    let ripples = document.createElement('span');
                    ripples.className = "ripples";
                    ripples.style.left = x + 'px';
                    this.appendChild(ripples);
                    
                    setTimeout(() => {
                        ripples.remove()
                    },1000);
                })
            })





$("#btnmenu").click(function(f) {
		var link = $(this).attr("href");
    setTimeout(function() {
        window.location.href = link;
    },400);
    f.preventDefault();
});


/*ScrollOut({
                targets: 'h1,p'
        })

new fullpage("#fullpage", {
    autoScrolling : true,
    navigation : true,
    onLeave:(origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = new TimeLineMax({delay:0.5});
        tl.fromTo(title, 0.5, {y: '50', opacity:0}, {y:0, opacity:1})
    }
})*/







