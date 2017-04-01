# PAAUD, proyecto de apoyo alimentario Universidad Distrital

Se trabajara la conexión a la bd mediante django, y se consumira a traves de angular2.

##Importante
Es indispensable tener la misma base de datos instalada localmente en oracle 11g express.

##Configuración Django app:

- (opcional) configurar un entorno virtual e instalar los requerimientos de python en él
- desde la carpeta raiz
- `pip install -r requirements.txt` cuando no se tengan instalados
- `cd servidor`
- `python manage.py runserver`

##Configuración Angular

Como pre-requisito se debe tener instalado angular-cli 

- desde la carpeta raiz
- `cd cliente`
- `npm install` si no se tienen instaladas las dependencias de node
- `ng serve`
- abrir el navegador e ir a `localhost:4200`