const toggleButton = document.querySelector('.icon');
const menu = document.querySelector('.ul');

if (window.innerWidth > 800) {
  menu.classList.add('hidden');
}

toggleButton.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});





// let count = 0;
// const target = 500; // العدد الذي تريده
// const updateInterval = 1; // مدة التحديث في المليثين

// function incrementCount() {
//   count++;
//   if (count > target) {
//     clearInterval(intervalId);
//     observer.disconnect(); // تعطيل الملاحظ
//   }
//   document.getElementById("count").innerHTML = count;
// }

// // الملاحظ الذي يتم استخدامه للتحقق من إذا كان المستخدم قد وصل الى القسم المراد
// const observer = new IntersectionObserver((entries) => {
//   if (entries[0].isIntersecting && !count) { // تحقق من إذا كانت العدد المطلوبة مسبقًا معينة قبل التحديث
//     // قم بتعيين العد الحالي هنا
//     count = 100
//     if (count > target) {
//       count = target;
//     }
//     const intervalId = setInterval(incrementCount, updateInterval); // يتم تحديث العد كل updateInterval مليثين
//   }
// });

// // العنصر الذي يتم مراقبته
// const element = document.getElementById("count");

// observer.observe(element);






const elements = document.querySelectorAll('.animated-element');

function startAnimation(element) {
  element.style.animation = 'slideIn 1.5s ease-in-out';
  element.style.animationFillMode = 'forwards';
  element.style.animationDelay = "0.5s";
}

function resetAnimation(element) {
  element.style.animation = '';
  element.style.transform = 'translateX(-100%)';
}

document.addEventListener('scroll', () => {
  elements.forEach(element => {
    const bounds = element.getBoundingClientRect();
    if (bounds.top < window.innerHeight && bounds.bottom > 0) {
      startAnimation(element);
    } else {
      resetAnimation(element);
    }
  });
});
