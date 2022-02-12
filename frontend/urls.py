import imp
from django.urls import path,re_path
from django.views.generic import TemplateView

urlpatterns = [
    re_path('', TemplateView.as_view(template_name="frontend/index.html")),
]