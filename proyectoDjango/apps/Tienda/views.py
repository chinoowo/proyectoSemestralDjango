from django.shortcuts import render

# Create your views here.

def cargarInicio(request):
    return render(request,"index.html");


def cargarSeguimiento(request):
    return render(request,"seguimientoo.html")


def cargarSuscripcion(request):
    return render(request,"suscripcionn.html")   


def cargarProductos(request):
    return render(request,"productos.html")


def cargarAgregar(request):
    return render(request,"agregarProductos.html")

def cargarEditar(request):
    return render(request,"editarProductos.html")


def cargarListar(request):
    return render(request,"listarProductos.html")