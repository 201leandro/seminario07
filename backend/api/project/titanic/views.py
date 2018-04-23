from rest_framework import viewsets

from .serializers import TitanicPeopleSerializer
from .models import TitanicPeople


class TitanicPeopleViewSet(viewsets.ModelViewSet):
    
    queryset = TitanicPeople.objects.all()
    serializer_class = TitanicPeopleSerializer
