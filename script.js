// mobile menu
const mb=document.querySelector('.menu-btn'),nl=document.querySelector('.nav-links');
mb&&mb.addEventListener('click',()=>nl.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nl.classList.remove('open')));
// scroll reveal
const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// form validation
const f=document.getElementById('bookingForm');
if(f){
  f.addEventListener('submit',function(e){
    e.preventDefault();let ok=true;
    f.querySelectorAll('[required]').forEach(inp=>{
      const field=inp.closest('.field');let bad=!inp.value.trim();
      if(inp.type==='email'&&inp.value){bad=!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(inp.value)}
      field.classList.toggle('invalid',bad);if(bad)ok=false;
    });
    if(ok){f.querySelector('.form-success').style.display='block';f.reset();
      f.querySelector('.form-success').scrollIntoView({behavior:'smooth',block:'center'});}
  });
  f.querySelectorAll('input,select,textarea').forEach(inp=>inp.addEventListener('input',()=>inp.closest('.field').classList.remove('invalid')));
}
