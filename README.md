# Heart Failure Prediction Application

* Hargun Mujral - Full-stack and Machine Learning engineer
* Kushal Mujral - Frontend Engineer

## Dataset: 

We sourced our data from the following Kaggle dataset, to help train the machine learning model.
https://www.kaggle.com/datasets/andrewmvd/heart-failure-clinical-data?resource=download

## Purpose:

To create a web application where users can upload critical health information about 
their loved ones to get a preliminary assessment about their heart health risk. This
application is not meant to be a substitute to meeting a health care professional,
but simply a method more elaborate than publically available quizzes to give people
an idea of their risk. 

## Metrics:

Currently, the model attains an 86% accuracy after doing a 70/30 training-test split on the dataset of 300 patient records.
The dataset contains 12 datapoints for each patient, and uses a Logistic Regression model to work on user data

## Use instructions:

Simply create an account, and input the listed information into the frontend form. Then the backend will then store the information associated to your account to the sqlite database, and run the prediction to inform the user about their heart failure risk.

The following are the datapoints:

 *   age 
 *   anemia 
 *   cpk
 *   diabetes
 *   ejection fraction
 *   high blood pressure
 *   platelets 
 *   serum creatinine 
 *   serum sodium 
 *   sex
 *   smoking 
 *   time 

## Technologies:

* The frontend is written in JavaScript and React, with the use of the Material UI and Formik libraries
* The backend uses Django, SQLite and Python 
* The model is written in Python with the help of SKLearn

## To-do:

1. Add more detailed analytics (ie if serum sodium is above a certain fraction, or if the user is smoking, automatically give a warning on their result that explains they have higher risk)
2. Populate about page to give detailed information about how to input data, and what each field means
3. Create more backend apis for distinct purposes
4. Deploy to remote server and containerize
5. (if possible) refactor front-end into TypeScript
