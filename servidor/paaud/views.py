import json
import datetime
from django.db import connection
from django.http import JsonResponse, HttpResponseBadRequest, HttpResponse
import cx_Oracle

#funcion para implementar el login de la aplicacion
def login(request):
	if request.method == 'GET':
		r = request.GET.get
		usuario = (r('usuario'))
		password = (r('password'))
		datos_usuario = {}
		try:
			#verifica que el usuario exista
			db = cx_Oracle.connect('U'+usuario, password, 'localhost:1522/XE')
			db.close()
			#obtiene el rol del usuario conectado
			db = cx_Oracle.connect('system', 'oracle', 'localhost:1522/XE')
			cursor = db.cursor()
			respuesta = []
			for atributo in cursor.execute("select granted_role from dba_role_privs where grantee=upper('U"+usuario+"')"):
				respuesta.append(atributo[0])
			db.close()
			#obtiene los datos del usuario dependiendo su rol
			if "R_ESTUDIANTE_PAAUD" in respuesta:
				datos_usuario['rol'] = "ESTUDIANTE"
				datos_usuario['datos'] = datos_estudiante(usuario)
			elif "R_ADMIN_PAAUD" in respuesta:
				datos_usuario['rol'] = "ADMINISTRADOR"
				datos_usuario['datos'] = datos_usuario(usuario)
			elif "R_ASISTENTE_PAAUD" in respuesta:
				datos_usuario['rol'] = "ASISTENTE"
				datos_usuario['datos'] = datos_usuario(usuario)
			elif "R_SUPERIOR_PAAUD" in respuesta:
				datos_usuario['rol'] = "SUPERIOR"
				datos_usuario['datos'] = datos_usuario(usuario)
			else:
				print "Rol no conocido"
		except cx_Oracle.DatabaseError as e:
			error, = e.args
			return HttpResponseBadRequest('Error: '+error.message)
		return JsonResponse(datos_usuario, safe=False) 
	else:
		return HttpResponseBadRequest('No get method')

#funcion para obtener todos los datos de un estudiante
def datos_estudiante(usuario):
	try:
		#Se debe cambiar por el usuario y la contrasenia correctos
		db = cx_Oracle.connect('paaud', 'paaud', 'localhost:1522/XE')
		cursor = db.cursor()
		context = {}
		for atributo in cursor.execute("select * from estudiante where k_codigo="+usuario):
			context['estado_consulta'] = "OK"
			context['codigo'] = atributo[0]
			context['nombres'] = atributo[1]
			context['email'] = atributo[2]
			context['estado'] = atributo[3]
			context['apellidos'] = atributo[4]
			context['identificacion'] = atributo[5]
			context['proyecto'] = atributo[6]
			context['valor_matricula'] = atributo[7]
			context['numero_celular'] = atributo[8]
			context['numero_fijo'] = atributo[9]
			context['facultad'] = atributo[10]
		db.close()
	except cx_Oracle.DatabaseError as e:
		error, = e.args
		context["estado_consulta"] = 'ERROR'
		context["error"] = 'Error: '+error.message
		return context
	return context

#funcion para obtener el nombre y apellido de un usuario diferente a un estudiante
def datos_usuario(usuario):
	try:
		#Se debe cambiar por el usuario y la contrasenia correctos
		db = cx_Oracle.connect('paaud', 'paaud', 'localhost:1522/XE')
		cursor = db.cursor()
		context = {}
		for atributo in cursor.execute("select n_nombreusuario, n_apellidousuario from usuario where k_cedula="+usuario):
			context['estado_consulta'] = "OK"
			context['nombres'] = atributo[0]
			context['apellidos'] = atributo[1]
		db.close()
	except cx_Oracle.DatabaseError as e:
		error, = e.args
		context["estado_consulta"] = 'ERROR'
		context["error"] = 'Error: '+error.message
		return context
	return context

#funcion para realizar el registro de un estudiante en la bd
def sigin(request):
	if request.method == 'GET':
		r = request.GET.get
		usuario = (r('usuario'))
		password = (r('password'))
		retorno = {}
		try:
			#verifica si el estudiante existe en la base de datos
			db = cx_Oracle.connect('paaud', 'paaud', 'localhost:1522/XE')
			cursor = db.cursor()
			respuesta = []
			for atributo in cursor.execute("select k_codigo from estudiante where k_codigo="+usuario):
				respuesta.append(atributo[0])
			db.close()
			#si el estudiante existe, crea el usuario en la base de datos, 
			#le asigna el privilegio de conectarse y el rol de estudiante 
			#y retorna true de lo contrario retorna false
			if len(respuesta) > 0:
				db = cx_Oracle.connect('dba_paaud', 'dba_paaud', 'localhost:1522/XE')
				cursor = db.cursor()
				cursor.execute("CREATE USER u"+usuario+" IDENTIFIED BY "+password+" DEFAULT TABLESPACE paaud_users TEMPORARY TABLESPACE paaud_temp")
				cursor.execute("GRANT CREATE SESSION, r_estudiante_paaud TO U"+usuario)
				retorno['respuesta'] = True
				db.close()
			else:
				retorno['respuesta'] = False
		except cx_Oracle.DatabaseError as e:
			error, = e.args
			return HttpResponseBadRequest('Error: '+error.message)
		return JsonResponse(retorno, safe=False) 
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

def get_solicitudes(request):
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

def get_facultades(request):
	if request.method == 'GET':
		r = request.GET.get
		usuario = (r('usuario'))
		password = (r('password'))
		try:
			db = cx_Oracle.connect(usuario, password, 'localhost:1522/XE')
			cursor = db.cursor()
			respuesta = []
			for c in cursor.execute("select k_idfacultad,n_nombrefacultad from facultad"):
				context = {}
				context['k_idfacultad'] = c[0]
				context['n_nombrefacultad'] = c[1]
				respuesta.append(context)
			db.close()
		except cx_Oracle.DatabaseError as e:
			error, = e.args
			return HttpResponseBadRequest('Error: '+error.message)
		return JsonResponse(respuesta, safe=False) 
	else:
		return HttpResponseBadRequest('No get method')