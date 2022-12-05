from django.shortcuts import render
from django.http import HttpResponse
from .serializers import ProjoAPI 
from .models import Project
from rest_framework import viewsets, permissions

# Create your views here.
class ProjoViews(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjoAPI
    permission_classes = [
        permissions.AllowAny
    ]