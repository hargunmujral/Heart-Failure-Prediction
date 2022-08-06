from django.db import models

# Create your models here.

class HeartHealthInformation(models.Model):
    patient_name = models.CharField(max_length=100)
    age = models.BigIntegerField()
    anemia = models.BigIntegerField()
    cpk = models.BigIntegerField()
    diabetes =  models.BigIntegerField()
    ejection_fraction = models.BigIntegerField()
    high_blood_pressure =  models.BigIntegerField()
    platelets = models.BigIntegerField()
    serum_creatinine =  models.BigIntegerField()
    serum_sodium = models.BigIntegerField()
    sex =  models.BigIntegerField()
    smoking = models.BigIntegerField()
    time = models.BigIntegerField()
    death = models.BooleanField()

#str
    def __str__(self):
        return self.patient_name
