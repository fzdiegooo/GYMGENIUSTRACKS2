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

select * from usuarios;
insert into cursos (nombre_curso, descripcion_curso, url_img, id_nivel, id_objetivo) values ("PLAN 12 SEMANAS","Aumenta tu masa muscular con este plan avanzado de empuje-tracción-pierna","https://t1.uc.ltmcdn.com/es/posts/2/8/2/rutina_de_ejercicios_en_casa_dia_1_49282_0_600.jpg",3,2);
insert into cursos (nombre_curso, descripcion_curso, url_img, id_nivel, id_objetivo) values ("Recomposición muscular","Logra perder grasa corporal y ganar masa muscular al mismo tiempo","https://fitnessreal.es/wp-content/uploads/2022/01/recomposicio%CC%81n-corporal-scaled.jpg",1,3);
insert into cursos (nombre_curso, descripcion_curso, url_img, id_nivel, id_objetivo) values ("Programa Abdominales","Trabaja tus abdominales con rutinas específicas de la parte central del cuerpo","https://siken.es/wp-content/uploads/2020/03/mejores-ejercicios-abdominales.png",2,1);
insert into cursos (nombre_curso, descripcion_curso, url_img, id_nivel, id_objetivo) values ("Aumento de masa muscular","Realiza ejercicios pesados pero controlados hasta llegar al fallo.","https://media.revistagq.com/photos/5e563cd217bf00000837e0f1/16:9/w_2560%2Cc_limit/como%2520ganar%2520masa%2520muscular.jpg",1,4);

CREATE TABLE clases(
	id_clase int auto_increment primary key,
    nombre_clase varchar(50) not null,
    descripcion_clase varchar(2000) not null,
    url_video varchar(250),
    duracion_clase int
);

select cl.nombre_clase, cl.descripcion_clase, cl.url_video from cursos c
inner join curso_clase cc on c.id_curso = cc.id_curso
inner join clases cl on cc.id_clase = cl.id_clase where c.id_curso = 1;

insert into clases(nombre_clase, descripcion_clase, url_video) values ("Press Banca","Ejercicio de fuerza que trabaja principalmente los músculos del pecho, tríceps y deltoides. Se realiza acostado en un banco plano, levantando una barra con pesas desde el pecho hasta que los brazos están extendidos, y luego bajándola nuevamente al pecho", "https://res.cloudinary.com/dar3rtsty/video/upload/v1720572337/press-banca.mp4");
insert into clases(nombre_clase, descripcion_clase, url_video) values ("Curl Biceps","Ejercicio de entrenamiento con pesas que se centra en los músculos bíceps del brazo. Se realiza levantando una pesa desde la posición de brazo extendido hasta que el antebrazo esté en posición vertical, flexionando el codo", "https://res.cloudinary.com/dar3rtsty/video/upload/v1720572336/curl-biceps.mp4");

CREATE TABLE curso_clase(
    id_curso INT,
    id_clase INT,
    PRIMARY KEY (id_curso, id_clase),
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso),
    FOREIGN KEY (id_clase) REFERENCES clases(id_clase)
);

insert into curso_clase(id_curso, id_clase) values (1,2);

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
select * from cursos;

insert into cursos (nombre_objetivo) value ("Tonificar")


