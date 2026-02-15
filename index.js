function startbasPage(deadline) {
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const diff = new Date(deadline).getTime() - now;
        
        if(diff <= 0) {
            clearInterval(timer);
            document.getElementById("basPage").innerHTML = "SOUMISSIONS CLOSES";
            return;
        }
        
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById("days").innerText = d.toString().padStart(2, '0');
        document.getElementById("hours").innerText = h.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = s.toString().padStart(2, '0');
    }, 1000);
}

const targetDate = new Date();
targetDate.setHours(targetDate.getHours() + 7);
startbasPage(targetDate);

const button=document.querySelector(".bgoc2");
button.addEventListener(("mouseenter"), ()=>{
    button.style.backgroundColor="#c50a0a"
});
button.addEventListener(("mouseleave"), () =>{
    button.style.backgroundColor="rgb(5, 0, 5)"
});

const monBrief=document.querySelector(".voirbrief");
monBrief.addEventListener(("mouseover"), () =>{
    monBrief.style.transform="scale(1.1)";
});
monBrief.addEventListener(("mouseout"), () =>{
    monBrief.style.transform="scale(1)";
});

document.querySelectorAll("h5").forEach((h5) =>{
h5.style.transition="transform 0.3s ease";
h5.addEventListener(("mouseover"), () =>
h5.style.transform="scale(1.1)"
);


h5.addEventListener(("mouseout"), () =>
h5.style.transform="scale(1)"
);
});