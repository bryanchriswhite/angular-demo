# from django.forms import widgets
from rest_framework import serializers
from demo.models import Product


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    # pk = serializers.Field()
    # name = serializers.CharField(max_length=50, unique=True)
    # description = models.CharField(max_length=255)
    # inventory_count = models.IntegerField(default=0)
    class Meta:
        model = Product
        fields = ('url', 'id', 'name', 'description', 'inventory_count')
