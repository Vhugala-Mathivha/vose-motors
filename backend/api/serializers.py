from rest_framework import serializers
from .models import Dealer, Car, Lead

class DealerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dealer
        fields = "__all__"

class CarSerializer(serializers.ModelSerializer):
    dealer = DealerSerializer(read_only=True)

    class Meta:
        model = Car
        fields = "__all__"

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = "__all__"