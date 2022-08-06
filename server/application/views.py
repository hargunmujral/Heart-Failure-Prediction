from django.shortcuts import render
from rest_framework import viewsets
from .models import HeartHealthInformation
from .serializers import HeartHealthInformationSerializer

# Create your views here.

class HeartHealthInformationView(viewsets.ModelViewSet):
    serializer_class = HeartHealthInformationSerializer
    queryset = HeartHealthInformation.objects.all()