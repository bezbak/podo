from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include
from settings.views import index, send_to_telegram
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('send_to_telegram/', send_to_telegram, name='send_to_telegram'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)