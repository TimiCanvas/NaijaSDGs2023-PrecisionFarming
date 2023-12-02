from django.urls import path
from .views import PrecisionAPIView

urlpatterns = [
    path('result', PrecisionAPIView.as_view(), name='precision')
]
