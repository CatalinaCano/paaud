from django.conf import settings
from django.conf.urls import include, url
from paaud import views

urlpatterns = [
    url(r'^login', views.login, name='login'),
    url(r'^datos_estudiante', views.datos_estudiante, name='datos_estudiante'),
    url(r'^datos_usuario', views.datosUsuario, name='datosUsuario'),
    url(r'^sigin', views.sigin, name='sigin'),
    url(r'^get_facultades', views.get_facultades, name='get_facultades'),
    url(r'^post_convocatoria', views.post_convocatoria, name='post_convocatoria'),
    url(r'^get_convocatorias', views.get_convocatorias, name='get_convocatorias'),
    url(r'^get_convocatoriasabiertas', views.get_convocatoriasabiertas, name='get_convocatoriasabiertas'),
    url(r'^get_cuposconvocatoria', views.get_cuposconvocatoria, name='get_cuposconvocatoria'),
    url(r'^update_convocatoria', views.update_convocatoria, name='update_convocatoria'),
    url(r'^update_cuposconvocatoria', views.update_cuposconvocatoria, name='update_cuposconvocatoria'),
    url(r'^verify_solicitud', views.verify_solicitud, name='verify_solicitud'),
    url(r'^post_solicitud', views.post_solicitud, name='post_solicitud'),
    url(r'^get_solicitudes', views.get_solicitudes, name='get_solicitudes'),
    url(r'^get_solicitudcamposolicitud', views.get_solicitudcamposolicitud, name='get_solicitudcamposolicitud'),
    url(r'^update_solicitud', views.update_solicitud, name='update_solicitud'),
    url(r'^get_ultimasolicitud', views.get_ultimasolicitud, name='get_ultimasolicitud'),
    url(r'^post_camponumerico', views.post_camponumerico, name='post_camponumerico'),
    url(r'^post_campobooleano', views.post_campobooleano, name='post_campobooleano'),
    url(r'^post_campostring', views.post_campostring, name='post_campostring')
    
]
