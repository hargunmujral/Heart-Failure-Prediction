from rest_framework import serializers
from .models import HeartHealthInformation

class HeartHealthInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeartHealthInformation
        fields = '__all__'
        read_only_fields = ('id',)