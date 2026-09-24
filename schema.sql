CREATE DATABASE chicola_rentals
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE chicola_rentals;

CREATE TABLE drivers (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    vehicle_type ENUM('Viatura' , 'Motorizada'),
    PRIMARY KEY(id)
) DEFAULT CHARSET utf8;

CREATE TABLE vehicles (
    id INT NOT NULL AUTO_INCREMENT,
    disponibility BOOLEAN,
    type ENUM('Viatura' , 'Motorizada'),
    brand VARCHAR(20),
    model VARCHAR(20),
    color VARCHAR(20),
    status VARCHAR(15),
    price DECIMAL(10,2),
    rental_period ENUM('Semanal' , 'Mensal'),
    PRIMARY KEY(id)
) DEFAULT CHARSET utf8;

CREATE TABLE rentals (
    id INT NOT NULL AUTO_INCREMENT,
    driver_id INT NOT NULL,
    vehicle_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    payment_status ENUM('Pendente' , 'Pago' , 'Atrasado'),
    PRIMARY KEY(id),
    FOREIGN KEY (driver_id) REFERENCES drivers(id),
    FOREIGN KEY (vehicle_id) REFERENCES vehicles(id)
) DEFAULT CHARSET utf8;

SELECT * FROM drivers;
SELECT * FROM vehicles;

INSERT INTO drivers (name, phone, vehicle_type)
VALUES ('Kelvin Arcanjo', '+244943567154', 'Motorizada');

INSERT INTO vehicles (disponibility, type, brand, model, color, status, price, rental_period )
VALUES (TRUE , 'Motorizada' , 'Yango' , 'GS150' , 'Vermelho' , 'Boa' , 80000.00, 'Mensal');

INSERT INTO rentals (driver_id, vehicle_id, start_date)
VALUES (1, 1, '2026-09-25');



