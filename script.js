const money = n => new Intl.NumberFormat('de-CH',{style:'currency',currency:'CHF',maximumFractionDigits:0}).format(n);
const nightPrice=document.querySelector('#nightPrice'), occupancy=document.querySelector('#occupancy');
const available=document.querySelector('#available'), platformFee=document.querySelector('#platformFee'), hours=document.querySelector('#hours'), hourRate=document.querySelector('#hourRate');
let managementFee=350;
function calc(){
 const nights=Math.max(0,+available.value||0)*(Math.max(0,+occupancy.value||0)/100);
 const gross=nights*Math.max(0,+nightPrice.value||0);
 const platform=gross*(Math.max(0,+platformFee.value||0)/100);
 const time=Math.max(0,+hours.value||0)*Math.max(0,+hourRate.value||0);
 const self=gross-platform-time;
 const managed=gross-platform-managementFee;
 document.querySelector('#nightPriceVal').textContent=money(+nightPrice.value||0);
 document.querySelector('#occupancyVal').textContent=`${occupancy.value}%`;
 document.querySelector('#grossRevenue').textContent=money(gross);
 document.querySelector('#selfNet').textContent=money(self);
 document.querySelector('#managedNet').textContent=money(managed);
}
[nightPrice,occupancy,available,platformFee,hours,hourRate].forEach(el=>el.addEventListener('input',calc));
document.querySelectorAll('.package-select button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.package-select button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');managementFee=+btn.dataset.fee;calc()}));calc();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const menu=document.querySelector('.menu-btn'),links=document.querySelector('.nav-links');menu.addEventListener('click',()=>{links.classList.toggle('open');menu.setAttribute('aria-expanded',links.classList.contains('open'))});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
document.querySelector('#year').textContent=new Date().getFullYear();
const contactEmail='info@alpineresidences.ch'; // HIER bei Bedarf ersetzen
const form=document.querySelector('#contactForm');form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent(`Objektanfrage Alpine Residences – ${d.get('location')||'Schweiz'}`);const body=encodeURIComponent(`Name: ${d.get('name')}\nE-Mail: ${d.get('email')}\nOrt/Region: ${d.get('location')}\nZimmer: ${d.get('rooms')}\nPaket: ${d.get('package')}\n\nNachricht:\n${d.get('message')}`);window.location.href=`mailto:${contactEmail}?subject=${subject}&body=${body}`});
