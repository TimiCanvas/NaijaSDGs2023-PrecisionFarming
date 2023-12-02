from rest_framework import serializers

class DataSerializer(serializers.Serializer):
    temperature = serializers.FloatField()
    humidity = serializers.FloatField()
    ph = serializers.FloatField()
    water_level = serializers.FloatField()
    crop = serializers.CharField()
    country = serializers.CharField()