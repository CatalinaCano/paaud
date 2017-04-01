import json
import datetime
from django.db import connection
from django.http import JsonResponse, HttpResponseBadRequest, HttpResponse

def get_ultimatransaccion(request):
	if request.method == 'GET':
		try:
			cursor = connection.cursor()
			respuesta = []
			for c in cursor.execute("select MAX(T.num_transaccion) from transaccion T"):
				context = {}
				context['numero'] = c[0] 
				respuesta.append(context)
		except:
			return HttpResponseBadRequest('Bad request')
		return JsonResponse(context, safe=False) 
	else:
		return HttpResponseBadRequest('No get method')