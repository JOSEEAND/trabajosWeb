Create database datos;
go

use datos;
go

create table datos(
			id smallint not null identity(1,1) primary key,
			texto varchar(50) not null,
			descripcion varchar(120) not null
		);
		go

insert into datos(texto, descripcion) 
        values('Godzilla', 'Dinosaurio radiactivo protector de Tokio.'),
              ('Poletergeish','Fantasmas que estan atrapados en la realidad.'),
              ('Valiente','Historia de lazos rotos y restaurados.'),
              ('Dark','Relato de la paradoja del tiempo y espacio');
        go