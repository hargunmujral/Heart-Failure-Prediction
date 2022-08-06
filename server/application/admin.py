from django.contrib import admin
from .models import HeartHealthInformation

class HeartHealthInformationAdmin(admin.ModelAdmin):
    list_display = ('patient_name', 'age', 'anemia', 'cpk', 'diabetes', 'ejection_fraction', 'high_blood_pressure', 'platelets',
     'serum_creatinine', 'serum_sodium', 'male', 'smoking', 'time', 'death')
    
# Register your models here.
admin.site.register(HeartHealthInformation, HeartHealthInformationAdmin)
