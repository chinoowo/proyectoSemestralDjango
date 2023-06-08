from django.db import models

# Create your models here.
class Categoria(models.Model):
    idCategoria = models.IntegerField(primary_key=True)
    nombre_categoia = models.CharField(max_length=22)

    def __str__(self):
        txt = "{0}  -  {1}"
        return txt.format(self.idCategoria,self.nombre_categoia)






class Producto(models.Model):
    sku = models.CharField(primary_key=True,max_length=15)
    nombre = models.CharField(max_length=50)
    precio = models.IntegerField()
    stock = models.IntegerField()
    imagenUrl = models.CharField(max_length=120)
    categoriaId = models.ForeignKey(Categoria, on_delete=models.CASCADE)


    def __str__(self):
        txt = "Producto N° {0}  -  Stock {1}  -  Precio {2}  -  Fecha {3}"
        return txt.format(self.sku, self.stock, self.precio, self.fecha)