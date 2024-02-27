import csv
import random
from datetime import datetime, timedelta
from api.models import Reservation
from django.utils import timezone
from django.db import IntegrityError

# List of fantasy character names
fantasy_characters = [
    "Frodo Baggins", "Harry Potter", "Hermione Granger", "Arya Stark", "Thor", "Wonder Woman", "Gandalf", "Dumbledore",
    "Luke Skywalker", "Princess Leia", "Spider-Man", "Batman", "Superman", "Wolverine", "Captain America", "Black Widow",
    "Iron Man", "Hulk", "Katniss Everdeen", "Bilbo Baggins", "Legolas", "Gimli", "Aragorn", "Dracula", "Medusa", "Zeus",
    "Odin", "Athena", "Poseidon", "Zeus", "Hades", "Loki", "Thor", "Hercules", "Perseus", "Achilles", "Hermes", "Apollo",
    "Artemis", "Hera", "Kratos", "Mjolnir", "Excalibur", "Frostmourne", "Sting", "Glamdring", "Andúril", "Stormbreaker", 
    "Naruto Uzumaki", "Goku", "Luffy", "Ichigo Kurosaki", "Light Yagami", "Edward Elric", "Gon Freecss", "Sailor Moon", 
    "Eren Yeager", "Inuyasha", "Saitama", "Vegeta", "Kenshin Himura", "Levi Ackerman", "Natsu Dragneel", "Sakura Haruno", 
    "Monkey D. Garp", "Rukia Kuchiki", "Yugi Muto", "Maka Albarn", "Narad Muni", "Vishwamitra", "Nandi", "Hanuman", "Jatayu"
]

# List of available time slots
available_times = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30']

# Function to generate mock reservations for a given month
def generate_mock_reservations(year, month):
    reservations = []
    # Get the number of days in the month
    if month == 12:
        num_days = 31
    else:
        num_days = (datetime(year, month + 1, 1) - datetime(year, month, 1)).days
    
    # Generate reservations for each day
    for day in range(1, num_days + 1):
        date = f"{year}-{month:02d}-{day:02d}"
        # On Sundays, reserve all time slots for up to 2 Sundays per month
        if datetime(year, month, day).weekday() == 6 and random.random() < 0.2:
            for time in available_times:
                reservations.append([random.choice(fantasy_characters), f"{random.choice(fantasy_characters).split()[0]}@example.com", date, time, random.randint(1, 10), random.choice(["Birthday", "Business Meet", "Anniversary", "Casual/Other"])])
        else:
            # Generate random reservations for weekends
            if datetime(year, month, day).weekday() in [4, 5]:
                num_reservations = random.randint(1, 3)
            else:
                num_reservations = random.randint(0, 1)
            for _ in range(num_reservations):
                time = random.choice(available_times)
                reservations.append([random.choice(fantasy_characters), f"{random.choice(fantasy_characters).split()[0]}@example.com", date, time, random.randint(1, 10), random.choice(["Birthday", "Business Meet", "Anniversary", "Casual/Other"])])
    
    return reservations

# Generate reservations for the year 2024
all_reservations = []
for month in range(1, 13):
    all_reservations.extend(generate_mock_reservations(2024, month))

for reservation in all_reservations:
    reservation_instance = Reservation.objects.create(
        name = reservation[0],
        email = reservation[1],
        reservation_date = reservation[2],
        reservation_time = reservation[3],
        guest_count = reservation[4],
        occasion = reservation[5]
    )
    try:
        reservation_instance.save()
        print(reservation_instance)
    except IntegrityError:
        print("Couldn't be saved because of integrity error")
        
    








# # Write reservations to CSV file
# with open('mock_reservations_2024.csv', 'w', newline='') as csvfile:
#     writer = csv.writer(csvfile)
#     writer.writerow(['Name', 'Email', 'Reservation Date', 'Reservation Time', 'Guest Count', 'Occasion'])
#     writer.writerows(all_reservations)

# # print("Mock reservations generated and saved to 'mock_reservations_2024.csv'.")
# # print(all_reservations)
# print("Luke Skywalker".split()[0])
# print("Aragorn".split()[0])