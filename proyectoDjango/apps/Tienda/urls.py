from django.urls import path
from . import views

urlpatterns = [
    path('',views.cargarInicio),

    path('index.html',views.cargarInicio),


    path('seguimientoo.html',views.cargarSeguimiento),


    path('suscripcionn.html',views.cargarSuscripcion),


    path('productos.html',views.cargarProductos),


    path('agregarProductos.html',views.cargarAgregar),


    path('editarProductos.html',views.cargarEditar),


    path('listarProductos.html',views.cargarListar),

    path('agregarProductosForm',views.agregarProducto)


]