$(document).ready(function () {
    const translations = {
        en: {
            title: "Nail fungus? <br> There is a solution! <br> Painless treatment!",
            description: "Fungal infection won't go away on its own – over time, it only spreads, causing yellowing, delamination of nails, and an unpleasant odor. If ordinary creams and varnishes do not help, it's time to trust professionals! Don't delay treatment – the fungus is contagious! The sooner you start, the faster you get healthy nails.",
            form_p: "Leave your details to receive a free consultation",
            name_placeholder: "Name",
            phone_placeholder: "Phone number",
            question_placeholder: "Your question",
            send_button: "Send",
            contacts: "Contacts",
            company_text: "Developed by <span class='text-[#FFD02B]'>Web Market</span>",
            privacy: "Privacy",
            terms: "Terms of Use",
            cookies: "Cookie Settings",
            sale_restriction: "No Sale & Data Transfer",
        },
        ru: {
            title: "Грибок ногтей? <br> Решение есть! <br> Лечение без боли!",
            description: "Грибковая инфекция не пройдет сама – со временем она только разрастается, вызывая пожелтение, расслоение ногтей и неприятный запах. Если обычные кремы и лаки не помогают, пора довериться профессионалам! Не откладывайте лечение – грибок заразен! Чем раньше вы начнете, тем быстрее получите здоровые ногти.",
            form_p: "Оставьте свои данные, чтобы получить бесплатную консультацию",
            name_placeholder: "Имя",
            phone_placeholder: "Номер телефона",
            question_placeholder: "Ваш вопрос",
            send_button: "Отправить",
            contacts: "Контакты",
            company_text: "Разработано компанией <span class='text-[#FFD02B]'>Web Market</span>",
            privacy: "Конфиденциальность",
            terms: "Условия использования",
            cookies: "Настройки cookie",
            sale_restriction: "Запрет на продажу и передачу личной информации",
        }
    };

    let currentLang = "ru"; // Язык по умолчанию

    // Открытие выбора языков
    $('#lang-option').on('click', function () {
        $('#custom-option').addClass('active');

    });

    // Переключение языка
    $('.select').on('click', function () {
        let selectedLang = $(this).attr('id');

        if (selectedLang !== currentLang) {
            currentLang = selectedLang;
            updateLanguage(selectedLang);
        }

        // Закрытие списка языков после выбора
        $('#custom-option').removeClass('active');
    });

    function updateLanguage(lang) {
        // Меняем текст в блоках
        $('h1').html(translations[lang].title);
        $('.second').html(translations[lang].description);
        $('.form_p').text(translations[lang].form_p);
        $('.send_button').text(translations[lang].send_button);
        $('input[name="full_name"]').attr("placeholder", translations[lang].name_placeholder);
        $('input[name="phone_number"]').attr("placeholder", translations[lang].phone_placeholder);
        $('textarea[name="question"]').attr("placeholder", translations[lang].question_placeholder);
        $('#contacts').text(translations[lang].contacts);
        $('.wm_link p').html(translations[lang].company_text);

        let footerLinks = $('#footer_links span');

        footerLinks.eq(1).text(translations[lang].privacy);
        footerLinks.eq(2).text(translations[lang].terms);
        footerLinks.eq(3).text(translations[lang].cookies);
        footerLinks.eq(4).text(translations[lang].sale_restriction);

        // Меняем изображение выбранного языка
        let currentSrc = $('#selected-lang').attr('src');

        // Находим последнее вхождение "/" и заменяем только имя файла
        let newSrc = currentSrc.replace(/[^\/]+$/, `${lang}.png`);
        $('#selected-lang').attr('src', newSrc);
        
        $('#custom-option').removeClass('active')
        // Добавляем активный стиль
        $('.select').removeClass('active-lang');
        $(`#${lang}`).addClass('active-lang');
    }
    updateLanguage(currentLang)
});
