from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=255)
    inventory_count = models.IntegerField(default=0)

    def __str__(self):
        return str(self.id) + ': ' + self.name
