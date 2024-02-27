from django.shortcuts import render
from django.db import IntegrityError
from rest_framework import generics, status
from .serializers import ReservationSerializer
from rest_framework.response import Response
from .models import Reservation, ALL_AVAILABLE_TIMES
from rest_framework.views import APIView

# Create your views here.

class AllReservationsView(generics.ListAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

class CreateReservationView(generics.CreateAPIView):
    serializer_class = ReservationSerializer

    def post(self, request, *args, **kwargs):
        serialized_request = self.serializer_class(data=request.data)
        
        if serialized_request.is_valid():
            reservation_data = serialized_request.validated_data
            
            try:
                reservation = Reservation.objects.create(**reservation_data)
                return Response(ReservationSerializer(reservation).data, status=status.HTTP_201_CREATED)
            except IntegrityError:
                return Response({"message": "A reservation already exists on the selected date and time."}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serialized_request.errors, status=status.HTTP_400_BAD_REQUEST)




class TimeCalculatorView(APIView):
    """
    Receive a date, calculate available times, and send them back. 
    """
    
    
    
    def get(self, request):
        available_times = [x for (x, x) in ALL_AVAILABLE_TIMES]
        ifEntered = False
        date_received = request.GET.get('date', 'error')
        print(date_received)
        if date_received != 'error':
            ifEntered = True
            reservations = Reservation.objects.filter(reservation_date=date_received)
            print(reservations)
            for reservation in reservations:
                time = str(reservation.reservation_time)[0:5]
                if time in available_times:
                    available_times.pop(available_times.index(time))
                    print("Whoa this worked!")
        return Response( { "date_received" : date_received, "available_times" : available_times} )
    