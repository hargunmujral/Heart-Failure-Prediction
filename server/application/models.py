from django.db import models

# Create your models here.

class HeartHealthInformation(models.Model):
    patient_name = models.CharField(max_length=100 , default='')
    age = models.BigIntegerField()
    anemia = models.BigIntegerField()
    cpk = models.BigIntegerField()
    diabetes =  models.BigIntegerField()
    ejection_fraction = models.BigIntegerField()
    high_blood_pressure =  models.BigIntegerField()
    platelets = models.BigIntegerField()
    serum_creatinine =  models.FloatField()
    serum_sodium = models.BigIntegerField()
    male =  models.BooleanField(default=False)
    smoking = models.BigIntegerField()
    time = models.BigIntegerField()
    death = models.BooleanField(default=False)

#str
    def __str__(self):
        return self.patient_name
