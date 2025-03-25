$(document).ready(function () {
    $('#form_btn').on('click', function (e) {
        e.preventDefault(); // Останавливаем стандартную отправку формы

        let name = $('input[name="full_name"]').val().trim();
        let phone = $('input[name="phone_number"]').val().trim();
        let comment = $('textarea[name="question"]').val().trim();

        // Проверяем, чтобы все поля были заполнены
        if (!name || !phone || !comment) {
            showAlert('❌ Заполните все поля!', 'error');
            return;
        }

        let phonePattern = /^\+?\d{10,15}$/;
        if (!phonePattern.test(phone)) {
            showAlert('❌ Введите корректный номер телефона!', 'error');
            return;
        }

        let formData = { name, phone, comment };

        $.ajax({
            url: '/send_to_telegram/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function () {
                showAlert('✅ Ваша заявка отправлена!', 'success');
                $('form')[0].reset(); // Очищаем форму
            },
            error: function (xhr) {
                showAlert('❌ Ошибка! Попробуйте снова.', 'error');
                console.error(xhr.responseText);
            }
        });
    });

    // Функция для кастомного алерта
    function showAlert(message, type) {
        let alertBox = $('#custom-alert');
        let alertMessage = $('#alert-message');

        alertMessage.text(message);
        alertBox.removeClass('hidden opacity-0');

        if (type === 'success') {
            alertBox.removeClass('bg-red-600').addClass('bg-green-500');
        } else {
            alertBox.removeClass('bg-green-500').addClass('bg-red-600');
        }

        setTimeout(() => {
            alertBox.addClass('opacity-0');
            setTimeout(() => alertBox.addClass('hidden'), 300); // Скрываем после анимации
        }, 3000);
    }
    $('#burger-btn').on('click', function() {
        $('#burger-menu').removeClass('hidden');
    });
    $('#close-btn').on('click', function() {
        $('#burger-menu').addClass('hidden');
    });
});
