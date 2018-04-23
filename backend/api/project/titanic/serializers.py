from rest_framework import serializers

from .models import TitanicPeople


class TitanicPeopleSerializer(serializers.ModelSerializer):

    class Meta:
        model = TitanicPeople
        fields = '__all__'