from django.db import models



OCCASION_CHOICES = [("Birthday", "Birthday"), ("Business Meet", "Business Meet"), ("Anniversary", "Anniversary"), ("Casual/Other", "Casual/Other")]
ALL_AVAILABLE_TIMES = [('17:00','17:00'), ('17:30', '17:30'),('18:00', '18:00'), ('18:30', '18:30'), ('19:00', '19:00'), ('19:30', '19:30'), ('20:00', '20:00'), ('20:30', '20:30'), ('21:00', '21:00'), ('21:30', '21:30'), ('22:00', '22:00'), ('22:30', '22:30')]


class Reservation(models.Model):
    
    class Meta:
        unique_together = ['reservation_date', 'reservation_time']
        
    name = models.CharField( max_length=60, )
    email = models.EmailField()
    reservation_date = models.DateField()
    reservation_time = models.CharField( max_length=6, choices=ALL_AVAILABLE_TIMES, )
    guest_count = models.IntegerField()
    occasion = models.CharField( max_length=30, choices=OCCASION_CHOICES, )
    created_at = models.DateTimeField( auto_now_add=True, )
    
    def __str__(self) -> str:
        return f'{str(self.name)}, {str(self.reservation_date)}, {str(self.reservation_time)}' 
    