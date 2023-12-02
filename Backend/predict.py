import joblib
from django.conf import settings
from sklearn.preprocessing import LabelEncoder
import numpy as np
import pandas as pd

le = LabelEncoder()


def predict_time(data):
    model = joblib.load('nb_pipeline.pkl')
    preprocessor = joblib.load('preprocessor_artifact.joblib')
    cleaned_data = pd.DataFrame({
        'temperature': data['temperature'],
        'humidity': data['humidity'],
        'ph': data['ph'],
        'water availability': data['water_level'],
        'label': data['crop'],
        'Country': data['country']
    }, index=[0])
    preprocessed_data = preprocessor.transform(cleaned_data).toarray()
    prediction = model.predict(preprocessed_data)
    return prediction[0]