
# Django view to handle POST data from React contact form
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

@csrf_exempt  # ✅ disables CSRF check for this view (for dev)
def contact_view(request):
    if request.method == "POST":
        import json
        data = json.loads(request.body)
        name = data.get("name")
        message = data.get("message")
        print(f"New message from {name}: {message}")
        return JsonResponse({'status': f'Message received. Thank you, {name}!'})
    return JsonResponse({'error': 'Invalid request method'}, status=400)




 