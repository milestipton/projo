from django.db import models
from django.contrib.auth.models import AbstractUser

categories = [
    ('swe', 'Software Enginnering'), 
    ('mark', 'Marketing'), 
    ('buz', 'Business Strategy'), 
    ('des', 'Design')
]

# Create your models here.
class ProjectAdmin(models.Model):
    name = models.CharField(max_length=50)
    title = models.CharField(max_length=50)

class Project(models.Model):
    title = models.CharField(max_length=50, unique=True)
    summary = models.CharField(max_length=100)
    #category = models.CharField(choices=categories, max_length=20)
    solve = models.CharField(max_length=300, default=None)
    logo = models.ImageField(upload_to ='uploads/', default=None)
    date = models.DateTimeField(auto_now=True)
    admin = models.ForeignKey(ProjectAdmin, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return f'{self.title}'