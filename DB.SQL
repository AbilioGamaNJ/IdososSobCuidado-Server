create table idoso (
  ididoso serial primary key,
  nome_idoso varchar(100),
  email_idoso varchar(100),
  celular_idoso char(11),
  cpf_idoso char(11) 
  senha_idoso varchar(50),
  confirmar_senha_idoso varchar(50),
  
);
create table cuidador (
 idcuidador serial primary key,
  nome_cuidador varchar(100),
  email_cuidador varchar(100),
  celular_cuidador char(11),
  cpf_cuidador char(11), 
  senha_cuidador varchar(50),
  confirmar_senha_cuidador varchar(50),
);