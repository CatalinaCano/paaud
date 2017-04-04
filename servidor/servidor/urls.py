from django.conf import settings
from django.conf.urls import include, url
from paaud import views

urlpatterns = [
    url(r'^get_estudiante', views.get_estudiante, name='get_estudiante'),
    url(r'^post_solicitud', views.post_solicitud, name='post_solicitud'),
    url(r'^get_ultimasolicitud', views.get_ultimasolicitud, name='get_ultimasolicitud'),
    url(r'^post_camponumerico', views.post_camponumerico, name='post_camponumerico'),
    url(r'^post_campobooleano', views.post_campobooleano, name='post_campobooleano'),
    url(r'^post_campostring', views.post_campostring, name='post_campostring'),
    url(r'^get_solicitud', views.get_solicitud, name='get_solicitud')
]
