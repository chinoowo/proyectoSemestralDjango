from django.shortcuts import render
from .models import *
# Create your views here.

def cargarInicio(request):
    return render(request,"index.html");


def cargarSeguimiento(request):
    return render(request,"seguimientoo.html")


def cargarSuscripcion(request):
    return render(request,"suscripcionn.html")   


def cargarProductos(request):
    productos=Producto.objects.all()
    return render(request,"productos.html",{"producto":productos})


def cargarAgregar(request):
    return render(request,"agregarProductos.html")

def cargarEditar(request):
    return render(request,"editarProductos.html")


def cargarListar(request):
    return render(request,"listarProductos.html")