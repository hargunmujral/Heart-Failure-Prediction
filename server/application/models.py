from django.db import models

# Create your models here.

class HeartHealthInformation(models.Model):
    patient_name = models.CharField(max_length=100 , default='')
    age = models.FloatField()
    anemia = models.BooleanField(default=False)
    cpk = models.FloatField()
    diabetes =  models.BigIntegerField(default=False)
    ejection_fraction = models.FloatField()
    high_blood_pressure =  models.BooleanField(default=False)
    platelets = models.FloatField()
    serum_creatinine =  models.FloatField()
    serum_sodium = models.FloatField()
    male =  models.BooleanField(default=False)
    smoking = models.BooleanField(default=False)
    time = models.FloatField()
    death = models.BooleanField(default=False)

#str
    def __str__(self):
        return self.patient_name
