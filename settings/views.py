from django.views.decorators.csrf import csrf_exempt
from core.config import TOKEN, CHAT_ID
from django.shortcuts import render
from django.http import JsonResponse
import requests
import json

# Create your views here.
def index(request):
    return render(request, 'index.html')


@csrf_exempt
def send_to_telegram(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            name = data.get("name", "Не указано")
            phone = data.get("phone", "Не указано")
            comment = data.get("comment", "Не указано")

            # Формируем сообщение
            message = (
                f"💬 Новая заявка:\n\n"
                f"👤 Имя: {name}\n"
                f"📞 Телефон: {phone}\n"
                f"📝 Комментарий: {comment}"
            )

            # Отправляем сообщение в Telegram
            url = f"https://api.telegram.org/bot{TOKEN}/sendMessage"
            response = requests.post(url, data={"chat_id": CHAT_ID, "text": message})

            if response.status_code == 200:
                # return redirect('thanks')
                return JsonResponse({"status": "success"}, status=200)
            else:
                return JsonResponse({"status": "error", "details": response.text}, status=500)
        except Exception as e:
            return JsonResponse({"status": "error", "details": str(e)}, status=500)

    return JsonResponse({"status": "error", "details": "Invalid request"}, status=400)
