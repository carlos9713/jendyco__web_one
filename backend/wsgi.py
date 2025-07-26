import sys
import os

# Add the parent folder of backend (project root) to sys.path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
