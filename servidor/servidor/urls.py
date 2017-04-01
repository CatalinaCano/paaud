from django.conf import settings
from django.conf.urls import include, url
from paaud import views

urlpatterns = [
    url(r'^get_ultimatransaccion', views.get_ultimatransaccion, name='get_ultimatransaccion')
]
