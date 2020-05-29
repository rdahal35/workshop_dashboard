from django.contrib.auth.models import User

from django.db import models
from django.urls import reverse


class Branch(models.Model):
    name = models.CharField(max_length=500)
    address = models.CharField(max_length=500)
    city = models.CharField(max_length=500)
    state = models.CharField(max_length=500)
    country = models.CharField(max_length=500)
    phone_no = models.CharField(max_length=50)
    pan_no = models.CharField(max_length=50)

    class Meta:
        verbose_name = ("Branch")
        verbose_name_plural = ("Branches")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Branch_detail", kwargs={"pk": self.pk})


class BranchManager(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    branch = models.ForeignKey(
        "users.Branch", on_delete=models.SET_NULL, null=True)
    join_date = models.DateField(auto_now_add=True)
    phone_no = models.CharField(max_length=50)

    class Meta:
        verbose_name = ("BranchManager")
        verbose_name_plural = ("BranchManagers")

    def __str__(self):
        return self.branch

    def get_absolute_url(self):
        return reverse("BranchManager_detail", kwargs={"pk": self.pk})


class Customer(models.Model):
    ID_CHOICES = [
        ('CT', 'Citizenship'),
        ('PS', 'Passport'),
        ('DL', "Driving Licence"),
        ('OT', 'Others')
    ]

    first_name = models.CharField(max_length=250)
    middle_name = models.CharField(max_length=500, blank=True, null=True)
    last_name = models.CharField(max_length=250)
    address = models.CharField(("Address"), max_length=500)
    phone_number = models.CharField(("Phone Number"), max_length=15)
    email = models.EmailField(("Email"), max_length=254)
    id_type = models.CharField(choices=ID_CHOICES, max_length=2)
    id_no = models.CharField(max_length=50)
    vehicle_no = models.CharField(max_length=20)
    vehicle_model = models.CharField(max_length=50, unique=True)
    image = models.ImageField(
        upload_to="customers/", null=True, blank=True)
    blood_group = models.CharField(max_length=50)
    family_contact = models.CharField(max_length=50)
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = ("Customer")
        verbose_name_plural = ("Customers")

    def __str__(self):
        return '{0} {1}'.format(self.first_name, self.last_name)

    def get_absolute_url(self):
        return reverse("Customer_detail", kwargs={"pk": self.pk})


class Supplier(models.Model):
    name = models.CharField(max_length=500)
    address = models.CharField(max_length=500)
    city = models.CharField(max_length=500)
    state = models.CharField(max_length=500)
    country = models.CharField(max_length=500)
    postal_code = models.CharField(max_length=50, null=True, blank=True)
    vat_no = models.CharField(max_length=50, null=True)
    image = models.ImageField(
        upload_to="suppliers/", null=True, blank=True)
    phone_number = models.CharField(max_length=50)
    email = models.EmailField(max_length=250)
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = ("Supplier")
        verbose_name_plural = ("Suppliers")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Supplier_detail", kwargs={"pk": self.pk})
