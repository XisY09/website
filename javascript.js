//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});

const gallery = document.getElementById('gallery');
 
    gallery.addEventListener('mouseenter', function() {
      gallery.style.cursor = 'ew-resize';
    });
    
    gallery.addEventListener('mouseleave', function() {
      gallery.style.cursor = 'default';
    });
    
   let isCursorPressed = false;
let startX, scrollLeft;

gallery.addEventListener('mousedown', function(event) {
  isCursorPressed = true;
  startX = event.pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('mousemove', function(event) {
  if (!isCursorPressed) return;
  event.preventDefault();
  const x = event.pageX - gallery.offsetLeft;
  const walk = (x - startX) * 0.8; // Sesuaikan nilai 2 sesuai kecepatan yang Anda inginkan
  gallery.scrollLeft = scrollLeft - walk;
});

gallery.addEventListener('mouseup', function() {
  isCursorPressed = false;
});

// Fungsi untuk menambahkan efek slow motion
function smoothScroll() {
  if (!isCursorPressed) return;
  const newScrollLeft = gallery.scrollLeft;
  gallery.scrollLeft += (scrollLeft - newScrollLeft) * 0.1;
  requestAnimationFrame(smoothScroll);
}

gallery.addEventListener('mousedown', function() {
  requestAnimationFrame(smoothScroll);
});
