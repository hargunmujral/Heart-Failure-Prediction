# Creating a neural network to predict a patient's
# chance of death by heart failure. Using the
# Logistic Regression model.

import numpy as np
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Dataset loading

data = pd.read_csv("heart_failure_clinical_records_dataset.csv")
X_data = data.drop(['DEATH_EVENT'], axis=1)
Y_data = data.DEATH_EVENT
X_train, X_test, Y_train, Y_test = train_test_split(X_data, Y_data, test_size=0.3, random_state=2)

# Training the model
Model = LogisticRegression(max_iter = 10000)
Model.fit(X_train, Y_train)
model_prediction = Model.predict(X_test)

# Accuracy score
accuracy = accuracy_score(Y_test, model_prediction)
print(str(accuracy * 100) + "% Accuracy")

# Running the mode on user input

def input():
    input_data = []
    input_data.append(input("Age: "))
    input_data.append(input("Anemia: "))
    input_data.append(input("CPK: "))
    input_data.append(input("Diabetes: "))
    input_data.append(input("Ejection Fraction: "))
    input_data.append(input("High Blood Pressure: "))
    input_data.append(input("Platelets: "))
    input_data.append(input("Serum Creatinine: "))
    input_data.append(input("Serum Sodium: "))
    input_data.append(input("Sex: "))
    return input_data
    # Note to self: add more helpful explanation 
    # to explain what user should input

def run_model(input_data):
    input_data = np.array(input_data)
    input_data = input_data.reshape(1, -1)
    prediction = Model.predict(input_data)
    return prediction

def metadata(data):
    print(data.columns)
    print(data.info())
    print(data.describe())
    print("Death Event count")
    print(data['DEATH_EVENT'].value_counts())
