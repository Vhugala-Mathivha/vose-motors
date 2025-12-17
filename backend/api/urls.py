from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DealerViewSet, CarViewSet, LeadViewSet

router = DefaultRouter()
router.register("dealers", DealerViewSet)
router.register("cars", CarViewSet)
router.register("leads", LeadViewSet, basename="leads")

urlpatterns = [
    path("", include(router.urls)),
]