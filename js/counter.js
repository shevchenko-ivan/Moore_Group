window.addEventListener('scroll', function(e) {
  let lastEl = document.getElementById('qw')
  console.log('lastEl', lastEl.offsetTop)
  console.log('window.scrollY', window.scrollY)

  if(window.scrollY > lastEl.offsetTop - 1000) {
    console.log('====')

    $('.counter').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },

      {
        duration: 1000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });

    $('.counter-drob').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },

      {
        duration: 1000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum.toFixed(3));
        }
      });
    });

  }
});
