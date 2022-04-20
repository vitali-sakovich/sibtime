(() => {
    if (!document.querySelector('.content_home')) {
      return;
    }
    if (window.pageYOffset > 100) {
      document.querySelector('.header').classList.remove('loaded');
    }
    addEventListener('load', function () {
      document.querySelector('.header').classList.remove('loaded');
      document.querySelector('.header').classList.add('loaded-hidden');
    });
  })();
  
  $(document).ready(function () {
    // Слайдеры
    $('.banner-slider__track').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 10000,
      speed: 500,
      arrows: true,
      cssEase: 'linear',
      prevArrow: $('.banner-slider__btn-prev'),
      nextArrow: $('.banner-slider__btn-next'),
    });
  
    $('.shop-gallery__track').slick({
      dots: false,
      infinite: true,
      speed: 500,
      arrows: true,
      prevArrow: $('.shop-gallery__prew'),
      nextArrow: $('.shop-gallery__next'),
    });
  
    $('.slider-horizontal__track').slick({
      dots: false,
      speed: 500,
      arrows: true,
      infinite: true,
      adaptiveHeight: true,
      prevArrow: $('.slider-horizontal__arrow_prev'),
      nextArrow: $('.slider-horizontal__arrow_next'),
    });
  
    // слайдер продикции
    $('.slider-product__home-track').slick({
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 500,
      prevArrow: $('.slider-product__control-btn-prev'),
      nextArrow: $('.slider-product__control-btn-next'),
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  
    // слайдер о компании
    $('.slider-about__track').slick({
      dots: false,
      speed: 500,
      arrows: true,
      infinite: true,
      adaptiveHeight: true,
      prevArrow: $('.about-slider__arrow_prev'),
      nextArrow: $('.about-slider__arrow_next'),
    });
  
    // слайдер продикции
    $('.slider-product__track-init').slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      speed: 500,
      prevArrow: $('.slider-product__control-prev'),
      nextArrow: $('.slider-product__control-next'),
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  
    // слайдер продикции
    $('.slider-product__track-init2').slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      speed: 500,
      prevArrow: $('.slider-product__control-prev2'),
      nextArrow: $('.slider-product__control-next2'),
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  
    // слайдер продикции
    $('.slider-product__track-init3').slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      speed: 500,
      prevArrow: $('.slider-product__control-prev3'),
      nextArrow: $('.slider-product__control-next3'),
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  
    // слайдер продикции
    $('.slider-product__track-init4').slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      speed: 500,
      prevArrow: $('.slider-product__control-prev4'),
      nextArrow: $('.slider-product__control-next4'),
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  
    // слайдер сертификатов
    $('.certificates-slider__track').slick({
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      speed: 500,
      prevArrow: $('.certificates-slider__arrow_prev'),
      nextArrow: $('.certificates-slider__arrow_next'),
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
  
    // слайдер новостей
    $('.news-slider__track').slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      speed: 500,
      arrows: false,
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  
    // слайдер отзывы
    $('.reviews-slider__track').slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      speed: 500,
      prevArrow: $('.reviews-slider__prev'),
      nextArrow: $('.reviews-slider__next'),
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  
    $('.collections-slider__track').slick({
      dots: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: true,
      adaptiveHeight: true,
      prevArrow: $('.collections-slider__arrow_prev'),
      nextArrow: $('.collections-slider__arrow_next'),
    });
  
    // галерея продукта
    $('.product-gallery__for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.product-gallery__nav',
    });
    $('.product-gallery__nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.product-gallery__for',
      prevArrow: $('.product-gallery__arrow-prev'),
      nextArrow: $('.product-gallery__arrow-next'),
      dots: false,
      focusOnSelect: true,
    });
  
    //   placeholder
    $('.footer-input').on('focusin', function () {
      $(this).addClass('is-active');
    });
    $('.footer-input').on('focusout', function () {
      if (!$(this).val()) {
        $(this).removeClass('is-active');
      }
    });
  
    // появление модалки стилист
    function stylistOpen() {
      const stylist = document.querySelector('.stylist');
      const stylistBtn = document.querySelector('.stylist__btn');
      const stylistClose = document.querySelector('.stylist-overlay');
  
      if (!stylist) {
        return;
      }
  
      stylistBtn.addEventListener('click', function () {
        stylist.classList.toggle('active');
      });
  
      stylistClose.addEventListener('mouseover', function () {
        stylist.classList.remove('active');
      });
    }
    stylistOpen();
  
    // вызов меню для мобилок
    function menuMobile() {
      const body = document.querySelector('body');
      const mobileMenu = document.querySelector('.menu-mobile');
      const btnMenuMobile = document.querySelector('.btn-menu__mobile');
      const menuMobileClose = document.querySelector('.menu-mobile__close');
      const stylist = document.querySelector('.stylist');
  
      btnMenuMobile.addEventListener('click', menuMobileOpen);
      menuMobileClose.addEventListener('click', menuMobileclose);
  
      function menuMobileOpen() {
        body.classList.add('hidden');
        mobileMenu.classList.add('open');
        mobileMenu.style.display = 'flex';
        stylist.classList.add('index');
      }
  
      function menuMobileclose() {
        body.classList.remove('hidden');
        mobileMenu.classList.remove('open');
        stylist.classList.remove('index');
        setTimeout(function () {
          mobileMenu.style.display = 'none';
        }, 300);
      }
    }
    menuMobile();
  
    //   placeholder
    $('.input, .textarea').on('focusin', function () {
      $(this).addClass('is-active');
    });
    $('.input, .textarea').on('focusout', function () {
      if (!$(this).val()) {
        $(this).removeClass('is-active');
      }
    });
  
    // очистка форм
    (function () {
      // очистка инпута
      function clearInput(clearInput) {
        const input = clearInput.querySelector('.input');
        const clearBtn = clearInput.querySelector('.clear-input');
  
        if (!clearBtn) {
          return;
        }
  
        clearBtn.addEventListener('click', function (e) {
          input.value = '';
        });
      }
      const label = document.querySelectorAll('.label');
      label.forEach(clearInput);
  
      // очистка Textarea
      function clearTextarea(clearTextarea) {
        const textarea = clearTextarea.querySelector('.textarea');
        const clearBtn = clearTextarea.querySelector('.clear-input');
        if (!clearBtn) {
          return;
        }
        clearBtn.addEventListener('click', function (e) {
          textarea.value = '';
        });
      }
      const labelTextarea = document.querySelectorAll('.label-textarea');
      labelTextarea.forEach(clearTextarea);
    })();
  
    // автовысота textarea
    (function () {
      document.querySelectorAll('textarea').forEach((el) => {
        el.style.height = el.setAttribute(
          'style',
          'height: ' + el.scrollHeight + 'px'
        );
        el.classList.add('auto');
        el.addEventListener('input', (e) => {
          el.style.height = 'auto';
          el.style.height = el.scrollHeight + 'px';
        });
      });
    })();
  
    // маска телефона
    jQuery(function ($) {
      $.mask.definitions['~'] = '[1,2,3,4,5,6,9]';
      $('.phone_validate').mask('+7 (~99) 999-99-99');
      $.mask.definitions['~'] = '[1,2,3,4,5,6,9]';
      $('.date_validate').mask('99.99.9999', { placeholder: 'дд.мм.гггг' });
    });
  
    // input phone
    $(document).on('keypress', function (evt) {
      if (evt.isDefaultPrevented()) {
        // Assume that's because of maskedInput
        // See https://github.com/guillaumepotier/Parsley.js/issues/1076
        $(evt.target).trigger('input');
      }
    });
  
    // пароль скрыть, показать
    $('body').on('click', '.password-control', function () {
      if ($('.js-password').attr('type') == 'password') {
        $(this).addClass('view');
        $('.js-password').attr('type', 'text');
      } else {
        $(this).removeClass('view');
        $('.js-password').attr('type', 'password');
      }
      return false;
    });
    $('body').on('click', '.password-control2', function () {
      if ($('.js-password2').attr('type') == 'password') {
        $(this).addClass('view');
        $('.js-password2').attr('type', 'text');
      } else {
        $(this).removeClass('view');
        $('.js-password2').attr('type', 'password');
      }
      return false;
    });
  
    // модалка согласия
    function consent() {
      const consentYes = document.querySelector('.consent-yes');
      const consentNo = document.querySelector('.consent-no');
      const checkData = document.querySelectorAll('.check-data');
      const consentModal = document.querySelector('.consent-modal');
      const closeModalConsent = document.querySelector('.close-modal-consent');
      const overlayConsent = document.querySelector('.overlay-consent');
      const bodyC = document.querySelector('body');
  
      closeModalConsent.addEventListener('click', modalClose);
      overlayConsent.addEventListener('click', modalClose);
  
      function modalClose() {
        consentModal.classList.remove('open');
        bodyC.classList.remove('hidd');
        window.setTimeout(function () {
          consentModal.style.display = 'none';
        }, 300);
      }
  
      consentYes.addEventListener('click', function () {
        checkData.forEach(function (checkDataItem) {
          checkDataItem.checked = true;
          modalClose();
        });
      });
  
      consentNo.addEventListener('click', function () {
        checkData.forEach(function (checkDataItem) {
          checkDataItem.checked = false;
          modalClose();
        });
      });
    }
    consent();
  
    // открытие выпадающего каталога
    function catalogDropdown() {
      const catalogBtn = document.querySelectorAll('.dropdown-btn');
      const headerBottom = document.querySelector('.header-bottom');
  
      catalogBtn.forEach(function (catalogBtnItem) {
        const dropdownCatalog = catalogBtnItem.querySelector('.dropdown-catalog');
        catalogBtnItem.addEventListener('mouseover', function () {
          catalogBtnItem.classList.add('active');
          headerBottom.classList.add('active');
          dropdownCatalog.style.maxHeight = dropdownCatalog.scrollHeight + 'px';
        });
  
        catalogBtnItem.addEventListener('mouseout', function () {
          catalogBtnItem.classList.remove('active');
          headerBottom.classList.remove('active');
          dropdownCatalog.style.maxHeight = null;
        });
      });
    }
    catalogDropdown();
  
    (function () {
      const dropdownBtnAll = document.querySelectorAll('.dropdown-btn');
      dropdownBtnAll.forEach(function (dropdownBtn) {
        const hoverImgAll = dropdownBtn.querySelectorAll('.js-hover-img');
        hoverImgAll.forEach(function (hoverImg) {
          hoverImg.addEventListener('mouseover', function () {
            hoverImgAll[0].classList.remove('active');
            hoverImg.classList.add('active');
          });
          hoverImg.addEventListener('mouseout', function () {
            hoverImg.classList.remove('active');
            hoverImgAll[0].classList.add('active');
          });
        });
      });
    })();
  
    // счетчик товаров
    (function () {
      function addHandlers(count) {
        const minus = count.querySelector('.counter__minus');
        let number = count.querySelector('.counter__number');
        const plus = count.querySelector('.counter__plus');
  
        plus.addEventListener('click', function () {
          number.value++;
        });
        minus.addEventListener('click', function () {
          number.value--;
        });
      }
      var counts = document.querySelectorAll('.counter');
      counts.forEach(addHandlers);
    })();
  
    $('.counter__number').on('input', function () {
      $(this).val(
        $(this)
          .val()
          .replace(/[A-Za-zА-Яа-яЁё]/, '')
      );
    });
  
    // select
    function sortSelect() {
      const selectDrop = document.querySelector('.sort-select');
  
      if (selectDrop == null) {
        return;
      }
  
      $(document).ready(function () {
        $('.sort-select').niceSelect();
      });
    }
    sortSelect();
  
    // показать-скрыть фильтры
    function filtersShow() {
      const btnShowFilters = document.querySelector('.btn-show-filters');
      const filters = document.querySelector('.filters');
  
      if (!filters) {
        return;
      }
  
      btnShowFilters.addEventListener('click', function () {
        filters.classList.toggle('show');
      });
    }
    filtersShow();
  
    // стилизация скролла
    $(document).ready(function scrollNice() {
      $('.scroll').niceScroll({
        cursorcolor: '#d8d8d8',
        cursorwidth: '6px',
        cursorborder: false,
        cursorborderradius: false,
        autohidemode: false,
      });
    });
  
    function touchHorizScroll(id) {
      if (isTouchDevice()) {
        //if touch events exist...
        var el = document.querySelector(id);
        if (!el) {
          return;
        }
        var scrollStartPos = 0;
  
        el.addEventListener(
          'touchstart',
          function (event) {
            scrollStartPos = this.scrollLeft + event.touches[0].pageX;
          },
          false
        );
  
        el.addEventListener(
          'touchmove',
          function (event) {
            this.scrollLeft = scrollStartPos - event.touches[0].pageX;
          },
          false
        );
      }
    }
    function isTouchDevice() {
      try {
        document.createEvent('TouchEvent');
        return true;
      } catch (e) {
        return false;
      }
    }
    touchHorizScroll('.compare-card__row');
  
    $(document).ready(function scrollNice() {
      $('.compare-card__row').niceScroll({
        cursorcolor: '#d8d8d8',
        cursorwidth: '13px',
        cursorborder: false,
        cursorborderradius: false,
        autohidemode: false,
        railvalign: 'top',
        horizrailenabled: true,
        hwacceleration: true,
        ouchbehavior: true,
        touchbehavior: true,
      });
    });
  
    // calendar
    $(function () {
      $('.date-calendar').datepicker($.datepicker.regional['ru']);
    });
    jQuery(function ($) {
      $('.date-calendar').mask('99.99.9999');
    });
  
    // модалка Адреса салонов
    (function () {
      const modalShops = document.querySelector('.modal-shops');
      const shopsModalBtn = document.querySelectorAll('.js-shops-btn');
      const modalShopsClose = document.querySelector('.modal-shops__close');
      const overflowShops = document.querySelector('.overflow-shops');
  
      shopsModalBtn.forEach(function (shopsModalBtnItem) {
        shopsModalBtnItem.addEventListener('click', openModalShops);
      });
      modalShopsClose.addEventListener('click', closeModalShops);
      overflowShops.addEventListener('click', closeModalShops);
  
      function openModalShops() {
        modalShops.style.display = 'flex';
        modalShops.classList.add('open');
        document.body.classList.add('hidden');
        $('.scroll').getNiceScroll().show().resize();
      }
  
      function closeModalShops() {
        modalShops.classList.remove('open');
        document.body.classList.remove('hidden');
        window.setTimeout(function () {
          modalShops.style.display = 'none';
        }, 300);
      }
    })();
  
    (function () {
      const btnCatalogDescShow = document.querySelector(
        '.btn-catalog-desc__show'
      );
      const catalogDescHidden = document.querySelector('.catalog-desc__hidden');
  
      if (!btnCatalogDescShow) {
        return;
      }
  
      btnCatalogDescShow.addEventListener('click', function () {
        catalogDescHidden.style.display = 'block';
        btnCatalogDescShow.remove();
      });
    })();
  
    // Прикрепить файл
    (function () {
      const inputFile = document.querySelector('.input-file');
      const labelFileName = document.querySelector('.file-name');
      if (inputFile != null) {
        let clearFile = renderCloseBtn();
  
        inputFile.addEventListener('change', inputFileHendler);
        clearFile.addEventListener('click', cickCloseHeendler);
  
        function inputFileHendler(e) {
          let target = e.target;
  
          if (target == inputFile && target.files != null) {
            let fileName = target.files[0].name;
  
            labelFileName.textContent = fileName;
            labelFileName.append(clearFile);
          }
        }
  
        function cickCloseHeendler(e) {
          e.preventDefault();
          inputFile.value = '';
          clearFile.remove();
          labelFileName.textContent = 'Прикрепить файл';
          const img = document.createElement('img');
          const contentVacancies = document.querySelector('.content_vacancies');
          img.classList.add('attach');
          img.src = '../img/attach.svg';
          labelFileName.appendChild(img);
        }
  
        function renderCloseBtn() {
          let span = document.createElement('span');
          span.classList.add('label-file__clear');
          span.innerHTML = '&times;';
          return span;
        }
      }
    })();
  
    /* Add file for form reviews */
    (function () {
      window.onload = function () {
        if (document.forms.reviews != null) {
          const divFiles = document.forms.reviews.querySelector('.files'); // "reviews" it is name form
  
          if (divFiles != null) {
            /!* Events form *!/;
            divFiles.addEventListener('change', eventChangeInput);
            divFiles.addEventListener('click', eventClickBtnDelete);
  
            /!* Functions *!/;
            function eventClickBtnDelete(e) {
              if (e.target.classList.contains('file_delete')) {
                e.preventDefault();
                e.target.parentElement.parentElement.remove();
              }
            }
  
            function eventChangeInput(e) {
              if (e.target.tagName == 'INPUT') {
                if (e.target.files != null) {
                  let input = e.target;
                  let label = e.target.parentElement;
                  let divFiles = label.parentElement;
                  let span = label.querySelector('span');
                  let btnDelete = label.querySelector('.file_delete');
                  let countFormFile =
                    divFiles.querySelectorAll('.form_file').length;
  
                  /!* Update text *!/;
                  span.innerHTML = `
                            ${input.files[0].name}
                            <span class="file_delete"><img src="../img/clear-input.svg" alt=""></span>
                        `;
                  /!* Add new block *!/;
                  if (btnDelete == null) {
                    divFiles.insertAdjacentHTML(
                      'beforeend',
                      `
                                <label class="form_file">
                                    <input type="file" name="file${countFormFile}"/>
                                    <span class="files-name">
                                        Прикрепить файл
                                        <img src="../img/attach.svg" alt="" class="attach-file">
                                    </span>
                                </label>
                            `
                    );
                  }
                }
              }
            }
          }
        }
      };
    })();
  
    // показать все характеристики
    (function () {
      const productCharacteristicsAdd = document.querySelector(
        '.product-characteristics__add'
      );
      const productCharacteristicsMin = document.querySelector(
        '.product-characteristics__min'
      );
      const productCharacteristicsAll = document.querySelector(
        '.product-characteristics__all'
      );
      if (!productCharacteristicsAll) {
        return;
      }
      productCharacteristicsAdd.addEventListener('click', function () {
        productCharacteristicsMin.remove();
        productCharacteristicsAdd.remove();
        productCharacteristicsAll.style.display = 'flex';
      });
    })();
  
    // табы каталог детальная
    $('.tabs-btn').on('click', 'div:not(active)', function () {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
        .closest('section.tabs-container')
        .find('div.tab-content')
        .removeClass('active')
        .eq($(this).index())
        .addClass('active');
    });
  
    // показать текст в карточке отзыве о продукте
    (function () {
      const reviewCardAll = document.querySelectorAll('.review-card');
  
      reviewCardAll.forEach(function (reviewCard) {
        const reviewCardText = reviewCard.querySelector('.review-card__text');
        const reviewTextShows = reviewCard.querySelector('.review-text__shows');
  
        if (reviewCardText.offsetHeight < 53) {
          reviewTextShows.remove();
        }
  
        reviewTextShows.addEventListener('click', function () {
          reviewCardText.classList.add('auto');
          reviewTextShows.remove();
        });
      });
    })();
  
    // когда нет ховера, добавляется класс к карточке товара
    (function () {
      const cardProductAll = document.querySelectorAll('.card-product');
      cardProductAll.forEach(function (cardProduct) {
        const cardProductImgHover = cardProduct.querySelector(
          '.card-product__img-hover'
        );
        if (cardProductImgHover) {
          cardProduct.classList.add('hover');
        }
      });
    })();
  
    // accordion
    (function () {
      const accordionBtnAll = document.querySelectorAll('.accordion__btn');
      accordionBtnAll.forEach(function (accordionBtn) {
        accordionBtn.addEventListener('click', function () {
          accordionBtn.classList.toggle('active');
          const panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.classList.remove('active');
          } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            panel.classList.add('active');
          }
        });
      });
    })();
  
    // галерея
    (function () {
      const gallery = document.getElementById('gallery');
      const galleryImg = document.querySelectorAll('.gallery__img');
      if (!gallery) {
        return;
      }
  
      $('#gallery').justifiedGallery({
        rowHeight: 370,
        maxRowHeight: 450,
        lastRow: 'nojustify',
        margins: 10,
        maxRowsCount: 3,
      });
      const gallerySchow = document.querySelector('.gallery__schow');
  
      gallerySchow.addEventListener('click', function () {
        $('#gallery').justifiedGallery({
          rowHeight: 370,
          maxRowHeight: 450,
          lastRow: 'nojustify',
          margins: 10,
          maxRowsCount: 0,
        });
        gallerySchow.remove();
      });
      if (window.innerWidth < 500) {
        if (galleryImg.length < 2) {
          gallerySchow.remove();
        }
      } else {
        if (galleryImg.length < 8) {
          gallerySchow.remove();
        }
      }
    })();
  
    // изменение логотипов на странице брендов
    (function () {
      const brandNameAll = document.querySelectorAll('.brand__name');
      const brandsLogo = document.querySelector('.brands-logo img');
      if (!brandsLogo) {
        return;
      }
      brandNameAll.forEach(function (brandName) {
        const brandLogoHidden = brandName.querySelector('img');
        brandName.addEventListener('mouseover', function () {
          brandsLogo.src = brandLogoHidden.src;
        });
      });
    })();
  
    (function () {
      const collectionsAardShows = document.querySelector(
        '.collections-card__shows'
      );
      const collectionsCardAll = document.querySelectorAll('.collections-card');
  
      if (!collectionsAardShows) {
        return;
      }
      if (collectionsCardAll.length <= 4) {
        collectionsAardShows.remove();
      }
  
      collectionsCardAll.forEach(function (collectionsCar) {
        collectionsAardShows.addEventListener('click', function () {
          collectionsCar.style.display = 'flex';
          collectionsAardShows.remove();
        });
      });
    })();
  
    (function () {
      let currentTab = 0; // Текущая вкладка устанавливается как первая вкладка (0)
      const x = document.getElementsByClassName('stylist-form__tab');
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');
      if (!nextBtn) {
        return;
      }
  
      showTab(currentTab); // Показать текущую вкладку
  
      prevBtn.addEventListener('click', function () {
        nextPrev(-1);
      });
  
      nextBtn.addEventListener('click', function () {
        nextPrev(1);
      });
      function showTab(n) {
        // Эта функция отобразит указанную вкладку формы...
        x[n].style.display = 'block';
        //... и зафиксируем кнопки Назад / Далее
        if (n == 0) {
          prevBtn.style.display = 'none';
        } else {
          prevBtn.style.display = 'block';
        }
        if (n == x.length - 1) {
          nextBtn.innerHTML = 'Отправить';
        } else {
          nextBtn.innerHTML = 'Далее';
        }
      }
  
      function nextPrev(n) {
        // Эта функция определит, какую вкладку отображать
        // Скрыть текущую вкладку
        x[currentTab].style.display = 'none';
        // Увеличить или уменьшить текущую вкладку на 1:
        currentTab = currentTab + n;
        // если вы дошли до конца формы...
        if (currentTab >= x.length) {
          // ... форма отправляется:
          document.querySelector('.stylist-form').submit();
          return false;
        }
        // В противном случае отобразите правильную вкладку:
        showTab(currentTab);
      }
    })();
  });
  
  // изменение адреса в ЛК
  function changeAddress() {
    const inputChangeAddress = document.querySelector('.js-change-address');
    const profileCol = document.querySelectorAll('.profile_col');
  
    if (!profileCol) {
      return;
    }
  
    profileCol.forEach(function (profileColItem) {
      const profileAddress = profileColItem.querySelector('.profile_address');
      const btnChangeAddress = profileColItem.querySelector(
        '.btn-change-address'
      );
  
      btnChangeAddress.addEventListener('click', function () {
        inputChangeAddress.value = profileAddress.textContent;
      });
    });
  }
  changeAddress();
  
  // расположение карточек товара
  function sortCatalog() {
    const btnRow = document.querySelector('.sort-layout__btn_row');
    const btnCol = document.querySelector('.sort-layout__btn_col');
    const catalogContainer = document.querySelector('.catalog-container');
  
    if (!catalogContainer) {
      return;
    }
  
    btnCol.addEventListener('click', clickCol);
    btnRow.addEventListener('click', clickRow);
  
    function clickCol() {
      catalogContainer.classList.add('catalog-container_col');
      catalogContainer.classList.remove('catalog-container_row');
      btnRow.classList.remove('active');
      btnCol.classList.add('active');
      localStorage.setItem('catalog', 'col');
    }
  
    function clickRow() {
      catalogContainer.classList.remove('catalog-container_col');
      catalogContainer.classList.add('catalog-container_row');
      btnRow.classList.add('active');
      btnCol.classList.remove('active');
      localStorage.setItem('catalog', 'row');
    }
  
    let localCatalog = localStorage.getItem('catalog');
    if (localCatalog == 'row') {
      clickRow();
    } else if (localCatalog == 'col') {
      clickCol();
    }
  }
  sortCatalog();
  
  // модалки
  const modals = document.querySelectorAll('.modal');
  const cardProductBtnBuy = document.querySelectorAll('.card-product__btn-buy');
  const modalBuy = document.querySelector('.modal-buy');
  const modalAuthorization = document.querySelector('.modal-authorization');
  const modalAuthorizationCode = document.querySelector(
    '.modal-authorization-code'
  );
  const consentModal = document.querySelector('.consent-modal');
  const btnConsent = document.querySelectorAll('.btn-consent');
  const btnRegistration = document.querySelectorAll('.btn-registration');
  const btnAnotherNumber = document.querySelector('.btn-another-number');
  const btnPolicy = document.querySelector('.btn-policy');
  const policyModal = document.querySelector('.policy-modal');
  
  if (btnPolicy !== null) {
    btnPolicy.addEventListener('click', function () {
      openModal(policyModal);
      $('.scroll').getNiceScroll().show().resize();
    });
  }
  
  btnConsent.forEach(function (btnConsentItem) {
    btnConsentItem.addEventListener('click', openModalConsent);
    $('.scroll').getNiceScroll().show().resize();
  });
  
  cardProductBtnBuy.forEach(function (cardProductBtnBuyItem) {
    if (!cardProductBtnBuy) {
      return;
    }
    cardProductBtnBuyItem.addEventListener('click', function () {
      openModal(modalBuy);
    });
  });
  
  btnRegistration.forEach(function (btnRegistrationItem) {
    btnRegistrationItem.addEventListener('click', function () {
      openModalRegistration(modalAuthorization, modalAuthorizationCode);
    });
  });
  
  btnAnotherNumber.addEventListener('click', function () {
    openModalRegistration(modalAuthorizationCode, modalAuthorization);
  });
  
  // открытие модалок
  function openModal(modal) {
    modal.style.display = 'block';
    formTab();
    document.body.classList.add('hidden');
    modal.classList.add('open');
  }
  
  // открытие модалок согласия
  function openModalConsent() {
    consentModal.style.display = 'block';
    document.body.classList.add('hidd');
    consentModal.classList.add('open');
    $('.scroll').getNiceScroll().show().resize();
  }
  
  function openModalRegistration(modalClose, modalOpen) {
    modalClose.classList.remove('open');
    window.setTimeout(function () {
      modalClose.style.display = 'none';
    }, 300);
    modalOpen.style.display = 'block';
    modalOpen.classList.add('open');
  }
  
  // закрытие модалок
  function modal(modal) {
    const overlay = modal.querySelector('.overlay');
    const closeModal = modal.querySelectorAll('.close-modal');
  
    if (!overlay) {
      return;
    }
    closeModal.forEach(function (closeModalItem) {
      closeModalItem.addEventListener('click', modalHidden);
    });
  
    overlay.addEventListener('click', modalHidden);
  
    function modalHidden() {
      modal.classList.remove('open');
      document.body.classList.remove('hidden');
      window.setTimeout(function () {
        modal.style.display = 'none';
      }, 300);
    }
  }
  modals.forEach(modal);
  
  // фокусировка табом
  function formTab() {
    const formModal = document.querySelectorAll('.modal form');
    formModal.forEach(function (formModalItem) {
      let lastElem = formModalItem.querySelector('.last-elem');
      let firstElem = formModalItem.querySelector('.first-elem');
  
      if (!lastElem || !firstElem) {
        return;
      }
  
      lastElem.onkeydown = function (e) {
        if (e.key == 'Tab' && !e.shiftKey) {
          firstElem.focus();
          return false;
        }
      };
  
      firstElem.onkeydown = function (e) {
        if (e.key == 'Tab' && e.shiftKey) {
          lastElem.focus();
          return false;
        }
      };
      firstElem.focus();
    });
  }
  
  // global click events
  const globalClickHandlers = {
    'js-open-modal': (node) =>
      openModal(document.querySelector(node.dataset.openModal)),
  };
  document.addEventListener('click', function (e) {
    var foundNodes = [];
    var checkRecursive = (target) => {
      if (target === document || target == undefined) {
        return false;
      }
      var cl = target.classList;
  
      if (cl === undefined) {
        return false;
      }
      var contains = false;
      for (var c of Object.keys(globalClickHandlers)) {
        if (cl.contains(c)) {
          contains = true;
          break;
        }
      }
      if (contains) {
        foundNodes.push(target);
      }
  
      return checkRecursive(target.parentElement);
    };
    checkRecursive(e.target);
  
    var handlers = Object.entries(globalClickHandlers);
    foundNodes.map((node) => {
      handlers.map(([className, callback]) => {
        if (node.classList.contains(className)) {
          callback(node);
        }
      });
    });
  });
  
  $(document).ready(() => {
    [...document.querySelectorAll('input')]
      .filter((i) => i.value.trim().length > 0)
      .map((i) => i.classList.add('is-active'));
  });
  
  // just an end of a file
  
  // Вызов модалки "Cпасибо", добавить для вызова openModalThank();
  function openModalThank() {
    const modalThank = document.querySelector('.modal-thank');
    const body = document.querySelector('body');
    if (!modalThank) {
      return;
    }
    modalThank.style.display = 'block';
    modalThank.classList.add('open');
    body.classList.add('hidden');
  }
  
  // Вызов модалки "Спасибо за обращение", добавить для вызова openThankContacting();
  function openThankContacting() {
    const modalThank = document.querySelector('.modal-thank-contacting');
    const body = document.querySelector('body');
    if (!modalThank) {
      return;
    }
    modalThank.style.display = 'block';
    modalThank.classList.add('open');
    body.classList.add('hidden');
  }
  
  (() => {
    const modalFitting = document.querySelector('.modal-fitting');
    if (!modalFitting) return;
    const fittingDesktop = modalFitting.querySelector('.fitting-desktop');
    const fittingMobile = modalFitting.querySelector('.fitting-mobile');
    const fittingHorizontal = modalFitting.querySelector('.fitting-horizontal');
    const rangeInput = document.querySelector('.range-input');
    const fittingImg = document.querySelector('.fitting-img');
  
    rangeInput.addEventListener('change', handleUpdate);
    rangeInput.addEventListener('input', handleUpdate);
    rangeInput.addEventListener('keyup', handleUpdate);
  
    function handleUpdate(e) {
      fittingImg.style.setProperty('--input-value', rangeInput.value + 'px');
    }
    handleUpdate();
  
    // if (
    //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    //     navigator.userAgent
    //   )
    // ) {
    //   alert('Вы используете мобильное устройство (телефон или планшет).');
    // } else {
    //   fittingHorizontal.style.display = 'none';
    // }
  })();
  