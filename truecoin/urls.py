from django.conf.urls import patterns, include, url
from demo.models import Product
from demo.serializers import ProductSerializer
from rest_framework import viewsets, routers

from django.contrib import admin
admin.autodiscover()

class ProductViewSet(viewsets.ModelViewSet):
    model = Product
    serializer_class = ProductSerializer

router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'truecoin.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include(router.urls))
)
