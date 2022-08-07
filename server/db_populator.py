# populate the sqlite database with data from the csv file
# This file is never run, instead it is used to populate the database directly
# from the manage.py shell

from application.models import HeartHealthInformation

with open("../heart_failure_clinical_records_dataset.csv", "r") as source:
    data = source.readlines()
    for index, line in enumerate(data):
        if index == 0:
            continue
        line = line.split(",")
        HeartHealthInformation.objects.create(patient_name="dataset-patient"+str(index), age=line[0], anemia=(int(line[1])==1), 
            cpk=line[2], diabetes=(int(line[3])==1), ejection_fraction=line[4], high_blood_pressure=(int(line[5])==1), 
            platelets=line[6], serum_creatinine=line[7], serum_sodium=line[8], male=(int(line[9])==1), 
            smoking=(int(line[10])==1), time=line[11], death=(int(line[12])==1)).save()
