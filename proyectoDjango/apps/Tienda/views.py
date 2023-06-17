from django.shortcuts import render,redirect
from .models import *

import os
from django.conf import settings 
# Create your views here.

def cargarInicio(request):
    return render(request,"index.html");


def cargarSeguimiento(request):
    return render(request,"seguimientoo.html")


def cargarSuscripcion(request):
    return render(request,"suscripcionn.html")   


def cargarProductos(request):
    productos=Producto.objects.all()
    cate_producto_plantas=Producto.objects.filter(categoriaId= 1)
    cate_producto_jardineria=Producto.objects.filter(categoriaId= 2)
    return render(request,"productos.html",{"producto":productos,"cate_plantas":cate_producto_plantas,"cate_jardineria":cate_producto_jardineria})


def cargarAgregar(request):
    categorias=Categoria.objects.all()
    productos = Producto.objects.all()
    return render(request,"agregarProductos.html",{"cate":categorias,"prod": productos})



def agregarProducto(request):
    """ print("AGREGAR PRODUCTOS",request.POST) """
    v_categoria=Categoria.objects.get(idCategoria=request.POST['cmbCategoria'])

    v_sku=request.POST['txtSku']
    v_nombre=request.POST['txtNombre']
    v_precio=request.POST['txtPrecio']
    v_stock=request.POST['txtStock']
    v_imagen=request.FILES['txtImagen']

    Producto.objects.create(sku=v_sku,nombre=v_nombre,precio=v_precio,stock=v_stock,imagenUrl=v_imagen,categoriaId=v_categoria)

    return redirect('/agregarProductos.html') 


def cargarEditarProducto(request,sku):
    prod = Producto.objects.get(sku = sku)
    cate = categorias=Categoria.objects.all()
    return render(request,"editarProducto.html",{"prod":prod,"cate":categorias})