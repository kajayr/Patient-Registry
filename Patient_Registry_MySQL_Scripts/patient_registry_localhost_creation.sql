CREATE USER 'patientRegistry'@'localhost' IDENTIFIED BY 'patientRegistry';

GRANT ALL PRIVILEGES ON * . * TO 'patientRegistry'@'localhost';

ALTER USER 'patientRegistry'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin';