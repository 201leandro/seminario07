from django.urls import path, include

from rest_framework import routers

from project.titanic.views import TitanicPeopleViewSet


router = routers.DefaultRouter()

router.register(r'titanic', TitanicPeopleViewSet)

urlpatterns = [
    path('', include('rest_framework.urls')),
    path('', include(router.urls)),
]
