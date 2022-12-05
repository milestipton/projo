from django.contrib import admin

from .models import Project, ProjectAdmin

# Register your models here.
admin.site.register(Project)
admin.site.register(ProjectAdmin)