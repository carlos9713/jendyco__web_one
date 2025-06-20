from django.urls import path
from .views import contact_view
from .views_email import handle_quote_submission  # ✅ Import the email handler

urlpatterns = [
    path('contact/', contact_view),  # Existing route
    path('send-quote/', handle_quote_submission),  # ✅ Add this line
]
