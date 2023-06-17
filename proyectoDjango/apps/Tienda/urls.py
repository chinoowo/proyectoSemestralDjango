from django.urls import path
from . import views

urlpatterns = [
    path('',views.cargarInicio),

    path('seguimientoo',views.cargarSeguimiento),


    path('suscripcionn',views.cargarSuscripcion),


    path('productos',views.cargarProductos),


    path('agregarProductos',views.cargarAgregar),

    path('editarProducto/<sku>',views.cargarEditarProducto),

    path('agregarProductosForm',views.agregarProducto),

    path('editarProductos',views.editarProducto)



]