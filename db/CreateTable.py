import psycopg2

connection = psycopg2.connect(
    host = 'localhost',
    user = 'postgres',
    password = 'kabs',
    port = '5432',
    database = 'HOTEL'
)
cursor = connection.cursor()

create_table_query = """
    CREATE TABLE customers(
    customerID SERIAL PRIMARY KEY,
    firstName char(50) NOT NULL, 
    lastName char(50) NOT NULL,
    Email varchar(255) NOT NULL,
    Gender varchar(255) NOT NULL,
    Nationality varchar(255) NOT NULL,
    phoneNumber varchar(100) NOT NULL
    )
"""


create_table_query = """
    CREATE TABLE register(
    userID SERIAL PRIMARY KEY,
    firstname varchar(255) NOT NULL, 
    lastname varchar(255) NOT NULL, 
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL
    )
"""
create_table_query = """
    CREATE TABLE bookings(
    booking_id SERIAL PRIMARY KEY,
    userid INT NOT NULL,
    checkin date NOT NULL, 
    checkout date NOT NULL,
    room_number INT NOT NULL,
    FOREIGN KEY (userID) REFERENCES register(userID)
    )
"""
create_table_query = """
    CREATE TABLE reservations(
    reservation_id SERIAL PRIMARY KEY,
    status varchar(255) NOT NULL,
    booking_id INT,
    room_number INT NOT NULL,
    FOREIGN KEY (booking_id) REFERENCES bookings(booking_id)
    )
"""
cursor.execute(create_table_query) 
connection.commit()

