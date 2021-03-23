// function animateValue(obj, start, end, duration) {
//   let startTimestamp = null;
//   const step = (timestamp) => {
//     if (!startTimestamp) startTimestamp = timestamp;
//     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//     obj.innerHTML = Math.floor(progress * (end - start) + start);
//     if (progress < 1) {
//       window.requestAnimationFrame(step);
//     }
//   };
//   window.requestAnimationFrame(step);
// }
//
// const obj = document.getElementById("value");
// animateValue(obj, 100, 52, 5000);
//



// window.addEventListener('scroll', function(e) {
//   let lastEl = document.getElementById('qw')
//   console.log('lastEl', lastEl.offsetTop)
//   console.log('window.scrollY', window.scrollY)
//
//   if(window.scrollY > lastEl.offsetTop - 1000) {
//     console.log('====')
//
//     $('.counter').each(function() {
//       var $this = $(this),
//           countTo = $this.attr('data-count');
//       $({ countNum: $this.text()}).animate({
//         countNum: countTo
//       },
//
//       {
//         duration: 1000,
//         easing:'linear',
//         step: function() {
//           $this.text(Math.floor(this.countNum));
//         },
//         complete: function() {
//           $this.text(this.countNum);
//         }
//       });
//     });
//
//     $('.counter-drob').each(function() {
//       var $this = $(this),
//           countTo = $this.attr('data-count');
//       $({ countNum: $this.text()}).animate({
//         countNum: countTo
//       },
//
//       {
//         duration: 1000,
//         easing:'linear',
//         step: function() {
//           $this.text(Math.floor(this.countNum));
//         },
//         complete: function() {
//           $this.text(this.countNum.toFixed(3));
//         }
//       });
//     });
//   }
// });
