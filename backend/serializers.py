from rest_framework import serializers 
from .models import Project

class ProjoAPI(serializers.ModelSerializer):
    class Meta: 
        model = Project 
        fields = '__all__'