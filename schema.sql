drop table if exists usuarios;

drop table if exists financas;

create table usuarios (
    id serial primary key,
    nome text not null,
    email text not null unique,
    senha text not null
);

create table meses (
    id serial primary key,
    nome text not null
);

create table financas (
    id serial primary key,
    tipo text not null,
    descricao text not null,
    valor integer not null,
    usuario_id integer references usuarios(id),
    mes_referencia integer references meses(id),
    ano_referencia integer not null,
);