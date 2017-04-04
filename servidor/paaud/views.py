import json
import datetime
from django.db import connection
from django.http import JsonResponse, HttpResponseBadRequest, HttpResponse
import cx_Oracle

def get_estudiante(request):
	if request.method == 'GET':
		r = request.GET.get
		usuario = (r('usuario'))
		password = (r('password'))
		try:
			db = cx_Oracle.connect(usuario, password, 'localhost:1522/XE')
			cursor = db.cursor()
			for c in cursor.execute("select * from estudiante where n_usuario='"+usuario+"'"):
				context = {}
				context['k_codeestudiante'] = c[0]
				context['n_nomeestudiante'] = c[1]
				context['n_email'] = c[2]
				context['i_estadoestudiante'] = c[3]
				context['n_apellestudiante'] = c[4]
				context['q_identificacionestu'] = c[5]
				context['n_proyectocurric'] = c[6]
				context['q_valormatricula'] = c[7]
				context['q_numcelular'] = c[8]
				context['q_numefijo'] = c[9]
				context['n_facultad'] = c[10]
				context['n_usuario'] = c[11]
			db.close()
		except cx_Oracle.DatabaseError as e:
			error, = e.args
			return HttpResponseBadRequest('Error: '+error.message)
		return JsonResponse(context, safe=False) 
	else:
		return HttpResponseBadRequest('No get method')

def post_solicitud(request):
	if request.method == 'POST':
		data = request.body
		solicitud = json.loads(data)
		usuario = solicitud["usuario"]
		password = solicitud["password"]
		codigo = solicitud["codigo"]
		try:
			db = cx_Oracle.connect(usuario, password, 'localhost:1522/XE')
			cursor = db.cursor()
			cursor.execute("insert into solicitud (k_codestudiante,k_subsidio,k_idconvocatoria,f_solicitud,i_estadosolicitud) values ("+codigo+",4,1,sysdate,'solicitada')")
			db.commit()
			db.close()
		except cx_Oracle.DatabaseError as e:
			error, = e.args
			return HttpResponseBadRequest('Error: '+error.message)
		return HttpResponse('successful') 
	else:
		return HttpResponseBadRequest('No post method')

def get_ultimasolicitud(request):
	if request.method == 'GET':
		r = request.GET.get
		usuario = (r('usuario'))
		password = (r('password'))
		try:
			db = cx_Oracle.connect(usuario, password, 'localhost:1522/XE')
			cursor = db.cursor()
			for c in cursor.execute("select max(k_solicitud) max from solicitud"):
				context = {}
				context['max'] = c[0]
			db.close()
		except cx_Oracle.DatabaseError as e:
			error, = e.args
			return HttpResponseBadRequest('Error: '+error.message)
		return JsonResponse(context, safe=False) 
	else:
		return HttpResponseBadRequest('No get method')

def post_camponumerico(request):
	if request.method == 'POST':
		data = request.body
		solicitud = json.loads(data)
		usuario = solicitud["usuario"]
		password = solicitud["password"]
		numsolicitud = solicitud["solicitud"]
		campo = solicitud["campo"]
		valor = solicitud["valor"]
		try:
			db = cx_Oracle.connect(usuario, password, 'localhost:1522/XE')
			cursor = db.cursor()
			cursor.execute("insert into solicitudcamposolicitud (k_solicitud,k_camposolicitud,q_numerico) values ("+numsolicitud+","+campo+","+valor+")")
			db.commit()
			db.close()
		except cx_Oracle.DatabaseError as e:
			error, = e.args
			return HttpResponseBadRequest('Error: '+error.message)
		return HttpResponse('successful') 
	else:
		return HttpResponseBadRequest('No post method')

def post_campobooleano(request):
	if request.method == 'POST':
		data = request.body
		solicitud = json.loads(data)
		usuario = solicitud["usuario"]
		password = solicitud["password"]
		numsolicitud = solicitud["solicitud"]
		campo = solicitud["campo"]
		valor = solicitud["valor"]
		try:
			db = cx_Oracle.connect(usuario, password, 'localhost:1522/XE')
			cursor = db.cursor()
			cursor.execute("insert into solicitudcamposolicitud (k_solicitud,k_camposolicitud,i_booleano) values ("+numsolicitud+","+campo+",'"+valor+"')")
			db.commit()
			db.close()
		except cx_Oracle.DatabaseError as e:
			error, = e.args
			return HttpResponseBadRequest('Error: '+error.message)
		return HttpResponse('successful') 
	else:
		return HttpResponseBadRequest('No post method')

def post_campostring(request):
	if request.method == 'POST':
		data = request.body
		solicitud = json.loads(data)
		usuario = solicitud["usuario"]
		password = solicitud["password"]
		numsolicitud = solicitud["solicitud"]
		campo = solicitud["campo"]
		valor = solicitud["valor"]
		try:
			db = cx_Oracle.connect(usuario, password, 'localhost:1522/XE')
			cursor = db.cursor()
			cursor.execute("insert into solicitudcamposolicitud (k_solicitud,k_camposolicitud,n_valorcampo) values ("+numsolicitud+","+campo+",'"+valor+"')")
			db.commit()
			db.close()
		except cx_Oracle.DatabaseError as e:
			error, = e.args
			return HttpResponseBadRequest('Error: '+error.message)
		return HttpResponse('successful') 
	else:
		return HttpResponseBadRequest('No post method')

def get_solicitud(request):
	if request.method == 'GET':
		r = request.GET.get
		usuario = (r('usuario'))
		password = (r('password'))
		codigo = (r('password'))
		try:
			db = cx_Oracle.connect(usuario, password, 'localhost:1522/XE')
			cursor = db.cursor()
			respuesta = []
			for c in cursor.execute("select k_solicitud,f_solicitud,k_idconvocatoria,i_estadosolicitud from solicitud where k_codestudiante='"+codigo+"'"):
				context = {}
				context['k_solicitud'] = c[0]
				context['f_solicitud'] = c[1]
				context['k_idconvocatoria'] = c[2]
				context['i_estadosolicitud'] = c[3]
				respuesta.append(context)
			db.close()
		except cx_Oracle.DatabaseError as e:
			error, = e.args
			return HttpResponseBadRequest('Error: '+error.message)
		return JsonResponse(respuesta, safe=False) 
	else:
		return HttpResponseBadRequest('No get method')