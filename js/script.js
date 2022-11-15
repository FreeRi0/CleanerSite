


   $('.promo__link').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

$('.item_btn').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.title_item').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    })
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click",function(e){
  e.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior : "smooth"
  });
  });
});


const faqHeaders = document.querySelectorAll(".faqs-container .faq-header");

faqHeaders.forEach((header, i) => {
  header.addEventListener("click", () => {
    header.nextElementSibling.classList.toggle("active");

    const open = header.querySelector(".open");
    const close = header.querySelector(".close");

    if (header.nextElementSibling.classList.contains("active")) {
      open.classList.remove("active");
      close.classList.add("active");
    } else {
      open.classList.add("active");
      close.classList.remove("active");
    }
  });
});


