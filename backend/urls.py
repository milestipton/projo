from django.urls import path 

from rest_framework import routers 
from .views import ProjoViews

router = routers.DefaultRouter()
router.register('projects', ProjoViews, 'api')

urlpatterns = router.urls