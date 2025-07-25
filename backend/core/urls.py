from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

from .views import contact_view
from .views_email import handle_quote_submission

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/contact/', contact_view),
    path('api/send-quote/', handle_quote_submission),
    
    # Let React handle all other routes like /products, /quote, /etc
    re_path(r'^.*$', TemplateView.as_view(template_name="index.html")),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])
