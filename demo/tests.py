from django.test import TestCase
from demo.models import Product
from rest_framework.test import APISimpleTestCase


def create_product(self):
    self.product = Product.objects.create(
        name='First Product',
        description='This is the description for the first product.',
        inventory_count=15
    )


# TODO: take another pass at this and assert the response data against the factory output
# class APITestCase(APISimpleTestCase):
#     def setUp(self):
#         create_product(self)
#
#     def test_product_get(self):
#         request = self.client.get('/products/' + str(self.product.id))
#         self.assertEqual(request.status_code, 200)
#         # self.assertEqual(request.data.name, self.product.name)


class SanityCheckTestCase(TestCase):
    def setUp(self):
        create_product(self)

    def test_djangoWorks(self):
        product = Product.objects.all()[0]
        self.assertEqual(product, self.product)

