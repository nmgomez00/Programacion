SELECT 
    a1.nombre AS asignatura,
    a2.nombre AS correlativa,
    c.tipo_correlativa
FROM Correlativas c
JOIN Asignatura a1 ON c.asignatura_id = a1.id
JOIN Asignatura a2 ON c.correlativa_id = a2.id
ORDER BY a1.nombre, c.tipo_correlativa;
insert into Institucion(nombre, domicilio)
values ('UTN Facultad Regional San Nicolás', 'Colón 332, San Nicolás, Buenos Aires (2900)');
GO
insert into TipoCarrera(nombre) values ('Tecnicatura Universitaria');
insert into TipoCarrera(nombre) values ('Ingeniería');
GO
insert into ModalidadCarrera(nombre) values ('Presencial');
insert into ModalidadCarrera(nombre) values ('A distancia');
GO
insert into Carrera(institucion_id, tipocarrera_id, modalidadcarrera_id, nombre, duracion)
values (1, 1, 1, 'Tecnicatura Universitaria en Programación',2);
GO
insert into Regimen(nombre) values ('Anual');
insert into Regimen(nombre) values ('Cuatrimestral');
insert into Regimen(nombre) values ('Proyecto Final');
GO
insert into Area(nombre) values ('Ciencias Básicas');
insert into Area(nombre) values ('Disciplinas Tecnológicas');
insert into Area(nombre) values ('Disciplinas Complementarias');
insert into Area(nombre) values ('Integración Multidisciplinaria');
GO
insert into PlanEstudio(nombre, carrera_id, fecha_inicio)
values ('Nuevo Plan 2018',1,'01/01/2018');
GO
insert into Cuatrimestre(numero, descripcion) values (1, 'Primer');
insert into Cuatrimestre(numero, descripcion) values (2, 'Segundo');
insert into Cuatrimestre(numero, descripcion) values (3, 'Proyecto Final');
GO
insert into Nivel(numero, descripcion) values (1, 'Primer Año');
insert into Nivel(numero, descripcion) values (2, 'Segundo Año');
GO
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(2,1,'Programación I', 8, 128, 13);
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(2,1,'Arquitectura y Sistemas Operativos', 4, 64, 5);
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(1,1,'Matemática', 4, 64, 5);
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(3,1,'Organización empresarial', 4, 64, 5);
GO
--SEGUNDO CUATRIMESTRE
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(2,1,'Programación II' , 8, 128, 13);
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(1,1,'Probabilidad y Estadística' , 4, 64, 5);
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(2,1,'Base valuesde Datos I' , 4, 64, 5);
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(3,1,'Inglés I' , 4, 64, 5);
GO
--TERCER valuesCUATRIMESTRE
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(2,1,'Programación III' , 8, 128, 13);
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(2,1,'Base de Datos II' , 4, 64, 5);
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(2,1,'Metodología de Sistemas I' , 4, 64, 5);
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(3,1,'Inglés II' , 4, 64, 5);
GO
--CUARTO CUATRIMESTRE
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(2,1,'Programación IV' , 8, 128, 13);
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(2,1,'Metodología de  Sistemas II' , 4, 64, 5);
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(2,1,'Introducción al análisis de datos' , 2, 32, 2);
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(3,1,'Legislación' , 2, 32, 2);
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(2,1,'Gestión de desarrollo de software' , 4, 64, 5);
insert into Asignatura(area_id, regimen_id, nombre,	horassemana, horascuatrimestre, creditos)
values(3,4,'Trabajo Final Integrador', 0, 95, 9);
GO
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,1,1,1);
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,2,1,1);
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,3,1,1);
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,4,1,1);
GO
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,5,1,2);
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,6,1,2);
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,7,1,2);
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,8,1,2);
GO
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,9,2,1);
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,10,2,1);
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,11,2,1);
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,12,2,1);
GO
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,13,2,2);
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,14,2,2);
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,15,2,2);
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,16,2,2);
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,17,2,2);
GO
insert into MateriasPlan(plan_id,asignatura_id,nivel_id,cuatrimestre_id) values (1,18,2,3);
GO



select * from Correlativas;
SELECT 
    a1.nombre AS asignatura,
    a2.nombre AS correlativa,
    c.tipo_correlativa
FROM Correlativas c
JOIN Asignatura a1 ON c.asignatura_id = a1.id
JOIN Asignatura a2 ON c.correlativa_id = a2.id
ORDER BY a1.nombre, c.tipo_correlativa;


-- Declare variable to capture the output ID from the stored procedure
DECLARE @ID INT;

-- Programación II (ID 5) prerequisites
-- Requires Programación I (ID 1) and Arquitectura y Sistemas operativos (ID 2) for enrollment ('C')
EXEC I_Correlativas @ID OUTPUT, 5, 1, 'C';
EXEC I_Correlativas @ID OUTPUT, 5, 2, 'C';
-- Requires Programación I (ID 1) and Arquitectura y Sistemas operativos (ID 2) to be passed ('A')
EXEC I_Correlativas @ID OUTPUT, 5, 1, 'A';
EXEC I_Correlativas @ID OUTPUT, 5, 2, 'A';

-- Probabilidad y Estadística (ID 6) prerequisites
-- Requires Matemática (ID 3) for enrollment ('C')
EXEC I_Correlativas @ID OUTPUT, 6, 3, 'C';

-- Base de Datos I (ID 7) prerequisites
-- Requires Programación I (ID 1) and Arquitectura y Sistemas operativos (ID 2) for enrollment ('C')
EXEC I_Correlativas @ID OUTPUT, 7, 1, 'C';
EXEC I_Correlativas @ID OUTPUT, 7, 2, 'C';
-- Requires Programación I (ID 1) to be passed ('A')
EXEC I_Correlativas @ID OUTPUT, 7, 1, 'A';

-- Programación III (ID 9) prerequisites
-- Requires Programación II (ID 5) and Base de Datos I (ID 7) for enrollment ('C')
EXEC I_Correlativas @ID OUTPUT, 9, 5, 'C';
EXEC I_Correlativas @ID OUTPUT, 9, 7, 'C';
-- Requires Programación I (ID 1) to be passed ('A')
EXEC I_Correlativas @ID OUTPUT, 9, 1, 'A';

-- Base de Datos II (ID 10) prerequisites
-- Requires Base de Datos I (ID 7) for enrollment ('C')
EXEC I_Correlativas @ID OUTPUT, 10, 7, 'C';
-- Requires Programación I (ID 1) to be passed ('A')
EXEC I_Correlativas @ID OUTPUT, 10, 1, 'A';

-- Metodología de Sistemas I (ID 11) prerequisites
-- Requires Programación II (ID 5) and Base de Datos I (ID 7) for enrollment ('C')
EXEC I_Correlativas @ID OUTPUT, 11, 5, 'C';
EXEC I_Correlativas @ID OUTPUT, 11, 7, 'C';
-- Requires Programación I (ID 1) and Arquitectura y Sistemas operativos (ID 2) to be passed ('A')
EXEC I_Correlativas @ID OUTPUT, 11, 1, 'A';
EXEC I_Correlativas @ID OUTPUT, 11, 2, 'A';

-- Inglés II (ID 12) prerequisites
-- Requires Inglés I (ID 8) for enrollment ('C')
EXEC I_Correlativas @ID OUTPUT, 12, 8, 'C';

-- Programación IV (ID 13) prerequisites
-- Requires Programación III (ID 9), Base de Datos II (ID 10), and Metodología de Sistemas I (ID 11) for enrollment ('C')
EXEC I_Correlativas @ID OUTPUT, 13, 9, 'C';
EXEC I_Correlativas @ID OUTPUT, 13, 10, 'C';
EXEC I_Correlativas @ID OUTPUT, 13, 11, 'C';
-- Requires Programación II (ID 5) and Base de Datos I (ID 7) to be passed ('A')
EXEC I_Correlativas @ID OUTPUT, 13, 5, 'A';
EXEC I_Correlativas @ID OUTPUT, 13, 7, 'A';

-- Metodología de Sistemas II (ID 14) prerequisites
-- Requires Programación III (ID 9), Base de Datos II (ID 10), and Metodología de Sistemas I (ID 11) for enrollment ('C')
EXEC I_Correlativas @ID OUTPUT, 14, 9, 'C';
EXEC I_Correlativas @ID OUTPUT, 14, 10, 'C';
EXEC I_Correlativas @ID OUTPUT, 14, 11, 'C';
-- Requires Programación II (ID 5) and Base de Datos I (ID 7) to be passed ('A')
EXEC I_Correlativas @ID OUTPUT, 14, 5, 'A';
EXEC I_Correlativas @ID OUTPUT, 14, 7, 'A';

-- Introducción al análisis de datos (ID 15) prerequisites
-- Requires Programación III (ID 9) and Base de Datos II (ID 10) for enrollment ('C')
EXEC I_Correlativas @ID OUTPUT, 15, 9, 'C';
EXEC I_Correlativas @ID OUTPUT, 15, 10, 'C';
-- Requires Programación II (ID 5) and Base de Datos I (ID 7) to be passed ('A')
EXEC I_Correlativas @ID OUTPUT, 15, 5, 'A';
EXEC I_Correlativas @ID OUTPUT, 15, 7, 'A';

-- Legislación (ID 16) prerequisites
-- Requires Metodología de Sistemas I (ID 11) for enrollment ('C')
EXEC I_Correlativas @ID OUTPUT, 16, 11, 'C';
-- Requires Programación I (ID 1) to be passed ('A')
EXEC I_Correlativas @ID OUTPUT, 16, 1, 'A';

-- Gestión de desarrollo de software (ID 17) prerequisites
-- Requires Programación III (ID 9), Base de Datos II (ID 10), and Metodología de Sistemas I (ID 11) for enrollment ('C')
EXEC I_Correlativas @ID OUTPUT, 17, 9, 'C';
EXEC I_Correlativas @ID OUTPUT, 17, 10, 'C';
EXEC I_Correlativas @ID OUTPUT, 17, 11, 'C';
-- Requires Programación II (ID 5) and Base de Datos I (ID 7) to be passed ('A')
EXEC I_Correlativas @ID OUTPUT, 17, 5, 'A';
EXEC I_Correlativas @ID OUTPUT, 17, 7, 'A';