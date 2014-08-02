from django.test import TestCase
from demo.models import Product


class SanityCheckTestCase(TestCase):
    def setUp(self):
        self.product = Product.objects.create(
            name='First Product',
            description='This is the description for the first product.',
            inventory_count=15
        )

    def test_djangoWorks(self):
        product = Product.objects.all()[0]
        self.assertEqual(product, self.product)

