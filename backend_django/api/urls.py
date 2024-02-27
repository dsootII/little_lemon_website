from django.contrib import admin
from django.urls import path, include
from .views import TimeCalculatorView, AllReservationsView, CreateReservationView

app_name = 'api'

urlpatterns = [
    path('', AllReservationsView.as_view()),
    path('available', TimeCalculatorView.as_view()),
    path('create', CreateReservationView.as_view()),
]