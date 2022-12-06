const toggle = document.querySelector("#toggle");
const toggleIcon = document.querySelector("#toggle > i");
const title = document.querySelector('#title');
const navItems = document.querySelectorAll('.nav-item');
const navTitles = document.querySelectorAll('.hidden');
const expandItems = document.querySelectorAll('.expand');
const sidebar = document.querySelector('#sidebar');
const logo = document.querySelector('#logo-img');


toggle.addEventListener('click', ()=> {
   sidebar.classList.toggle('sidebar-expand')
   toggleIcon.classList.toggle('rotate-180')
   title.classList.toggle('scale-0')
   title.classList.toggle('text-2xl')
   logo.classList.toggle('logo-expand')
   navTitles.forEach(item => {
      item.classList.toggle('anim-show')
      item.classList.toggle('hidden')
   })
   navItems.forEach(item => {
      item.classList.toggle('justify-center')
      item.classList.toggle('justify-start')
      item.classList.toggle('ml-5')
   })
   expandItems.forEach(item => {
      item.classList.toggle("open")
   })
})

navItems.forEach(item => {
   item.addEventListener('click', (e) => {   
      navItems.forEach(item => {
         item.classList.remove('active')
      })
      item.classList.add('active')
   })
})