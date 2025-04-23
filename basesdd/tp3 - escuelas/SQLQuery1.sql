CREATE TABLE Sector(id integer primary key identity(1,1), nombre varchar(64) not
 null);
CREATE TABLE Ambito(id integer primary key identity(1,1), nombre varchar(64) not
 null);
CREATE TABLE Jurisdiccion(id integer primary key identity(1,1), nombre varchar
(64) not null);
CREATE TABLE Departamento(id integer primary key identity(1,1), nombre varchar(64) not null,
jurisdiccion_id int not null, foreign key (jurisdiccion_id) references Jurisdiccion(id));
CREATE TABLE Codigo_de_area(id integer primary key identity(1,1), nombre varchar
(64) not null);
CREATE TABLE Localidad(id integer not null primary key identity(1,1),
codigo_localidad  int not null unique,
nombre varchar(255) not null,
 departamento_id int not null,
foreign key(departamento_id) references Departamento(id));
CREATE TABLE Codigo_postal(id integer not null primary key identity(1,1)
, nombre varchar(64) not null unique, localidad_id int not null, foreign key
(localidad_id) references Localidad(id));
CREATE TABLE Escuela(id integer not null primary key identity(1,1), nombre
varchar(64) not null, cue_anexo int not null unique check(cue_anexo>0),
sector_id int not null, ambito_id int not null, codigo_de_area_id int not null,
localidad_id int not null,
domicilio varchar(255)
not null, telefono varchar(255) not null, codigo_postal_id int not null,
mail varchar(255),
foreign key (sector_id) references Sector(id),
foreign key (ambito_id) references Ambito(id),
foreign key (localidad_id) references Localidad(id),
foreign key (codigo_postal_id) references Codigo_postal(id),
foreign key (codigo_de_area_id) references Codigo_de_area(id));
CREATE TABLE Localidad_Codigo_de_area(id integer not null primary key
identity(1,1), localidad_id int not null, codigo_de_area_id int not null, foreign
key (localidad_id) references Localidad(id), foreign key (codigo_de_area_id)
references Codigo_de_area(id));

select *  from Escuela;

insert into Sector(nombre) 
select distinct 
Sector 
from base order by 1;

select * from Ambito;

insert into Ambito(nombre) 
select distinct 
Ámbito
from Base where Ámbito is not null order by 1;

insert into Jurisdiccion(nombre) 
select distinct 
Jurisdicción
from Base where Jurisdicción is not null order by 1;

insert into Departamento(nombre, jurisdiccion_id) select distinct b.Departamento, 
j.id from base b inner join Jurisdiccion j ON b.Jurisdicción = j.nombre;

insert or ignore into Localidad(codigo_localidad, nombre, departamento_id) 
select distinct 
b."Código localidad", b.Localidad, d.id 
from base b inner join Departamento d ON b.Departamento = d.nombre;



