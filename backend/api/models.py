from django.db import models

class Dealer(models.Model):
    name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    image = models.URLField()

    def __str__(self):
        return self.name

class Car(models.Model):
    name = models.CharField(max_length=200)
    year = models.IntegerField()
    price = models.CharField(max_length=50)
    image = models.URLField()
    dealer = models.ForeignKey(Dealer, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.name

class Lead(models.Model):
    LEAD_TYPES = [
        ("test_drive", "Test Drive"),
        ("sell", "Sell"),
        ("contact", "Contact"),
    ]
    lead_type = models.CharField(max_length=20, choices=LEAD_TYPES)
    name = models.CharField(max_length=120, blank=True)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=50, blank=True)
    message = models.TextField(blank=True)
    car = models.ForeignKey(Car, null=True, blank=True, on_delete=models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.lead_type} - {self.created_at}"