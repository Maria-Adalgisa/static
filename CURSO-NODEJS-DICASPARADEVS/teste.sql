/*INSERT INTO usuarios(nome, email, idade) VALUES(
"Filipe de Souza Peixoto",
"email@teste.com",
34
);

INSERT INTO usuarios(idade, nome, email ) VALUES(
3,
"Maria Clara",
"mariaemail@.com"
);*/

SELECT * FROM usuarios WHERE idade = 3;
SELECT * FROM usuarios WHERE nome = "Filipe de Souza Peixoto";
SELECT * FROM usuarios WHERE idade >= 34;
DELETE FROM usuarios WHERE nome = "Maria Clara";
UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Maria Clara";