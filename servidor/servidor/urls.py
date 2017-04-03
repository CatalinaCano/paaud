from django.conf import settings
from django.conf.urls import include, url
from paaud import views

urlpatterns = [
    url(r'^get_estudiante', views.get_estudiante, name='get_estudiante') 
]
