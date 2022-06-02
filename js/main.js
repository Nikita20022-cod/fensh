function video1(click) {
      click.innerHTML =
            '<div class="embed-responsive embed-responsive-16by9">\n' +
            '\t\t\t\t\t\t<iframe width="100%" height="315" src="https://www.youtube.com/embed/NyX4vmCEnrM?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n' +
            "\t\t\t\t\t</div>";
};

$(function () {

      /*---Scroll to top---*/

      $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                  $('#toTop').fadeIn();
            } else {
                  $('#toTop').fadeOut();
            }
      });

      $('.toTop').click(function () {
            $('body,html').animate({
                  scrollTop: 0
            }, 800);
      });

      /*---Scroll to block---*/

      $(".link").on("click", function (event) {
            event.preventDefault();
            var id = $(this).attr("href"),
                  top = $(id).offset().top - 60;
            $("body,html").animate({
                  scrollTop: top
            }, 700);
      });

      $('.slider').slick({
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></button>',
            responsive: [
                  {
                        breakpoint: 992,
                        settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              infinite: true,
                              adaptiveHeight: true,
                              dots: false
                        }
                  }
            ]
      });

      $('.slider2').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            adaptiveHeight: true,
            dots: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></button>'
      });

});

$(".tema").on("click", function () {
      if ($(this).val() !== 'Вопрос по оплате продукта') {
            $(".product-js").addClass('modal-hidden');
      } else {
            $(".product-js").removeClass('modal-hidden');
      }
});

$(".my-forms").submit(function () {
      $.ajax({
            type: "POST",
            url: "send/send.php",
            data: $(this).serialize()
      }).done(function () {
            $(this).find("input").val("");
            //alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#exampleModal-2").removeAttr("style");
            $(".my-forms").trigger("reset");
            $(".my-forms-modal").addClass("show");
            $(".my-forms-modal").attr("style",
                  "display: block; background: rgba(0,0,0,0.5);");
            //$("#exampleModal-2").removeClass("show");
            $(".modal-backdrop").removeClass("show");
            $(".modal-backdrop").attr("style", "display: none;");

            $(".my-forms-modal .close").click(function () {
                  $("body").removeAttr("style");
                  $(".my-forms-modal").attr("style", "display: none;");
                  $(".my-forms-modal").removeClass("show");
                  $("body").removeClass("modal-open");
                  //&(".modal-backdrop").removeClass("show");
            });
      });
      return false;
});

let Mblock = document.querySelectorAll('.more-block');

function f8() {
      for (let i = 0; i < Mblock.length; i++) {
            Mblock[i].classList.toggle("block");
      }
}

document.querySelector('.btn-more').onclick = f8;