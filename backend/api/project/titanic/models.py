from django.db import models

# Create your models here.

class TitanicPeople(models.Model):

    passengerid = models.PositiveIntegerField(
        primary_key=True
    )
    survived = models.BooleanField(
        default=False
    )
    pclass = models.IntegerField(
        blank=True,
        null=True
    )
    name = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )
    sex = models.CharField(
        max_length=6,
        blank=True,
        null=True
    )
    age = models.IntegerField(
        blank=True,
        null=True
    )
    Sibsp = models.IntegerField(
        blank=True,
        null=True
    )
    parch = models.IntegerField(
        blank=True,
        null=True
    )
    ticket = models.CharField(
        max_length=20,
        blank=True,
        null=True
    )
    fare = models.DecimalField(
        max_digits=12,
        decimal_places=4,
        blank=True, 
        null=True
    )
    cabin = models.CharField(
        max_length=20,
        blank=True,
        null=True
    )
    embarked = models.CharField(
        max_length=1,
        blank=True,
        null=True
    )
