from rest_framework import viewsets, mixins
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Dealer, Car, Lead
from .serializers import DealerSerializer, CarSerializer, LeadSerializer

class DealerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Dealer.objects.all()
    serializer_class = DealerSerializer

class CarViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class LeadViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

    @action(detail=False, methods=["post"])
    def test_drive(self, request):
        data = request.data.copy()
        data["lead_type"] = "test_drive"
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)