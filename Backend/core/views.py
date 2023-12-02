from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import DataSerializer
import predict

class PrecisionAPIView(APIView):
    """
    API view class for handling prediction data.

    This class defines a POST method to receive data, validate it using a DataSerializer,
    and then use a prediction model to calculate and return the predicted season.

    Attributes:
    - None

    Methods:
    - post(request): Handles the incoming POST request and returns precision-related predictions.

    """
    def post(self, request):
        """
        Handles the incoming POST request for data for prediction.

        Parameters:
        - request (rest_framework.request.Request): The incoming HTTP request.

        Returns:
        rest_framework.response.Response: A response containing the response.

        Raises:
        rest_framework.serializers.ValidationError: If the input data is invalid.

        Example Usage:
        ```python
        # Make a POST request with data to obtain precision-related predictions
        response = PrecisionAPIView().post(request)
        ```
        Sample Request:
    ```json
       {
            "temperature": 23.48,
            "humidity" : 82,
            "ph" : 7.03,
            "water_level" :278.964 ,
            "crop" : "chickpea",
            "country" : "Nigeria"
        }
    ```

        Sample Response:
        ```json
        {
            "data": "Rainy"
        }
    ```
        """
        serializer = DataSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            prediction = predict.predict_time(serializer.data)
            return Response(
                {
                    "data" : prediction
                }, status=status.HTTP_200_OK
            )
# Create your views here.
