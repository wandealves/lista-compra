CREATE TABLE produtos (
	id SERIAL NOT NULL PRIMARY KEY,
	nome VARCHAR (150) NOT NULL,
	valor decimal NOT null,
	descricao VARCHAR (300)
);

CREATE TABLE usuarios (
	id SERIAL NOT NULL PRIMARY KEY,
	nome VARCHAR (150) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
  senha VARCHAR (100) NOT NULL
);

CREATE TABLE compras (
  id serial PRIMARY KEY,
  nome VARCHAR (150) NOT NULL,
  total decimal NULL,
  idUsuario integer NOT null,
  
  FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

CREATE TABLE items (
  id serial PRIMARY KEY,
  idCompra integer NOT NULL,
  idProduto integer NOT null,
  
  FOREIGN KEY (idCompra) REFERENCES compras(id),
  FOREIGN KEY (idProduto) REFERENCES produtos(id)
);