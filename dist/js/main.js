(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),s=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),r=e=>(e+"").length<2?"0"+e:e,n=()=>{const e=(()=>{const e=(new Date("2023.12.02").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60)%60,seconds:Math.floor(e)%60}})();t.textContent=r(e.hours<0?0:e.hours),s.textContent=r(e.minutes<0?0:e.minutes),o.textContent=r(e.seconds<0?0:e.seconds),e.timeRemaining>0&&setInterval(n,1e3)};n()})(),(()=>{const e=document.querySelector("menu");document.body.addEventListener("click",(t=>{t.target.closest("menu")||t.target.closest(".menu")||e.classList.remove("active-menu"),(t.target.matches("menu>ul>li>a")||t.target.classList.contains("close-btn")||t.target.closest(".menu"))&&e.classList.toggle("active-menu")}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),s=(t.querySelector(".popup-close"),t.querySelector(".popup-content"));t.style.opacity="0",s.style.transform="scale(0)",e.forEach((e=>{e.addEventListener("click",(()=>{t.style.display="block",screen.width<768?(t.style.opacity="1",s.style.transform="scale(1)"):(()=>{let e=0;const o=()=>{e+=.1;let r=requestAnimationFrame(o);e>=1&&cancelAnimationFrame(r),t.style.opacity=e,s.style.transform=`scale(${e})`};o()})()}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none",t.style.opacity="0",s.style.transform="scale(0)")}))})(),(()=>{const e=document.querySelector('a[href="#service-block"]'),t=document.querySelectorAll("menu>ul>li>a"),s=e=>{document.querySelector(e).scrollIntoView({behavior:"smooth",block:"center"})};e.addEventListener("click",(t=>{t.preventDefault(),s(e.getAttribute("href"))})),t.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),s(e.getAttribute("href"))}))}))})(),(()=>{const e=document.querySelector(".calc-block").querySelectorAll('input[type="text"]'),t=document.querySelectorAll("form"),s=e=>{const t=[],s=e.getAttribute("type")||e.getAttribute("name");let o=e.value;if(o=o.replace(/^\-+/gi,"").trim(),o=o.replace(/\-+$/gi,"").trim(),o=o.replace(/\s{2,}/gi," ").trim(),o=o.replace(/\-{2,}/gi,"-").trim(),"email"===s&&(o=o.replace(/[^\@\-\_\.\!\~\*\'\w]/gi,"")),"tel"===s&&(o=o.replace(/[^\-()\d]/g,"")),"text"===s||"user_message"===s){if(o=o.replace(/[^а-я\-\s]/gi,"").trim(),""===o)return o;o.split(" ").forEach((e=>t.push(e[0].toUpperCase()+e.slice(1)))),o=t.join(" ")}return o};e.forEach((e=>{e.addEventListener("blur",(()=>{e.value=e.value.replace(/\D/gi,"")}))})),t.forEach((e=>{const t=e.querySelector('input[name="user_name"]'),o=e.querySelector('input[type="email"]'),r=e.querySelector('input[type="tel"]'),n=e.querySelector('input[name="user_message"]');t.addEventListener("blur",(()=>{t.value=s(t)})),n&&n.addEventListener("blur",(()=>{n.value=s(n)})),o.addEventListener("blur",(()=>{o.value=s(o)})),r.addEventListener("blur",(()=>{r.value=s(r)}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),s=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{const o=e.target;if(o.closest(".service-header-tab")){const e=o.closest(".service-header-tab");t.forEach(((t,o)=>{t===e?(t.classList.add("active"),s[o].classList.remove("d-none")):(t.classList.remove("active"),s[o].classList.add("d-none"))}))}}))})(),((e,t,s,o="slide-active",r="active-dot")=>{const n=document.querySelector(e),c=document.querySelectorAll(t),l=document.querySelector(s);if(!n||!l||!c.length)return;let a,i=null,u=0;const d=(e,t,s)=>{e[t].classList.add(s)},m=(e,t,s)=>{e[t].classList.remove(s)},p=()=>{m(c,u,o),m(i,u,r),u++,u>=c.length&&(u=0),d(c,u,o),d(i,u,r)},v=(e=1500)=>{a=setInterval(p,e)};n.addEventListener("click",(e=>{e.preventDefault();const t=e.target;(t.classList.contains("portfolio-btn")||t.classList.contains("dot"))&&(m(c,u,o),m(i,u,r),"arrow-right"===t.id&&u++,"arrow-left"===t.id&&u--,t.classList.contains("dot")&&i.forEach(((e,s)=>{e===t&&(u=s)})),u>=c.length&&(u=0),u<0&&(u=c.length-1),d(c,u,o),d(i,u,r))})),n.addEventListener("mouseover",(e=>{const t=e.target;(t.classList.contains("portfolio-btn")||t.classList.contains("dot"))&&clearInterval(a)})),n.addEventListener("mouseout",(e=>{const t=e.target;(t.classList.contains("portfolio-btn")||t.classList.contains("dot"))&&v(2e3)})),l.innerHTML="",c.forEach(((e,t)=>{const s=document.createElement("li");s.classList.add("dot"),0===t&&s.classList.add(r),l.append(s)})),i=n.querySelectorAll(".dot"),v(2e3)})(".portfolio-content",".portfolio-item",".portfolio-dots","portfolio-item-active","dot-active")})();