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



