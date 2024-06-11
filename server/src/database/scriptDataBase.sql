create database gymgeniustracks;
use gymgeniustracks;

CREATE TABLE objetivos(
	id_objetivo INT AUTO_INCREMENT PRIMARY KEY,
    nombre_objetivo varchar(30)
);

CREATE TABLE niveles(
	id_nivel int auto_increment primary key,
    nombre_nivel varchar(30)
);

CREATE TABLE planes(
	id_plan int auto_increment primary key,
    nombre_plan varchar(30) not null,
    descripcion_plan varchar(100) not null,
    duracion_plan int not null,
    precio_plan int not null
);

CREATE TABLE cursos(
	id_curso int auto_increment primary key,
    nombre_curso varchar(50) not null,
    descripcion_curso varchar(250),
    url_img varchar(250),
    id_nivel int,
    id_objetivo int,
    foreign key (id_nivel) references niveles(id_nivel),
    foreign key (id_objetivo) references objetivos(id_objetivo)
);

CREATE TABLE clases(
	id_clase int auto_increment primary key,
    nombre_clase varchar(50) not null,
    descripcion_clase varchar(250) not null,
    url_video varchar(250),
    duracion_clase int
);

CREATE TABLE curso_clase(
    id_curso INT,
    id_clase INT,
    PRIMARY KEY (id_curso, id_clase),
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso),
    FOREIGN KEY (id_clase) REFERENCES clases(id_clase)
);

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    altura int,
    peso int,
    fecha_nacimiento date,
    id_plan int,
    id_objetivo int,
    id_nivel int,
    foreign key (id_plan) references planes(id_plan),
    foreign key (id_objetivo) references objetivos(id_objetivo),
    foreign key (id_nivel) references niveles(id_nivel)
);

select * from usuarios where email = "diego@gmail.com";
