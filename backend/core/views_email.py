from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
from django.core.mail import send_mail
from django.conf import settings

@csrf_exempt
def handle_quote_submission(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            # Validate required fields
            required_fields = ["name", "email"]
            missing = [field for field in required_fields if not data.get(field)]
            if missing:
                return JsonResponse({
                    "success": False,
                    "error": f"Missing required field(s): {', '.join(missing)}"
                }, status=400)

            # Extract form data
            name = data.get("name")
            email = data.get("email")
            company = data.get("company")
            products = data.get("products", [])
            details = data.get("details")

            # Format products nicely
            products_list = "\n".join(f"- {p}" for p in products) if products else "None selected"

            # Construct message
            message_body = f"""
New Quote Request from Jendyco Site:

Name: {name}
Email: {email}
Company: {company}
Products of Interest:
{products_list}
Details: {details}
"""

            # Send the email
            send_mail(
                subject="📩 New Quote Request - Jendyco",
                message=message_body,
                from_email="Jendyco <info@jendy.co>",
                recipient_list=[settings.ADMIN_EMAIL],
                fail_silently=False,
            )

            return JsonResponse({"success": True})
        except Exception as e:
            return JsonResponse({"success": False, "error": str(e)})
    else:
        return JsonResponse({"error": "Invalid request method."}, status=405)
