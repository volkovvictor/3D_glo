(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),s=e=>(e+"").length<2?"0"+e:e,c=()=>{const e=(()=>{const e=(new Date("2023.12.02").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60)%60,seconds:Math.floor(e)%60}})();t.textContent=s(e.hours<0?0:e.hours),n.textContent=s(e.minutes<0?0:e.minutes),o.textContent=s(e.seconds<0?0:e.seconds),e.timeRemaining>0&&setInterval(c,1e3)};c()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),s=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",s),n.addEventListener("click",s),o.forEach((e=>{e.addEventListener("click",s)}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-close"),o=t.querySelector(".popup-content");t.style.opacity="0",o.style.transform="scale(0)",e.forEach((e=>{e.addEventListener("click",(()=>{t.style.display="block",screen.width<768?(t.style.opacity="1",o.style.transform="scale(1)"):(()=>{let e=0;const n=()=>{e+=.1,console.log(e);let s=requestAnimationFrame(n);e>=1&&cancelAnimationFrame(s),t.style.opacity=e,o.style.transform=`scale(${e})`};n()})()}))})),n.addEventListener("click",(()=>{t.style.display="none",t.style.opacity="0",o.style.transform="scale(0)"}))})()})();