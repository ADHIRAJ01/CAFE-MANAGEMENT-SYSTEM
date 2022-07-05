-- 4 
-- creating schema for database
create table user{
    id int primary key AUTO_INCREMENT,
    name varchar(250),
    contactNumber varchar(20),
    email varchar(30),
    password varchar(20),
    status varchar(20),
    role varchar(20),
    UNIQUE (email)
};


-- create user by inserting values into mysql db 
insert into user( name , contactNumber , email , password , status , role ) values ( 'admin' , 9506341076 , 'admin@gmail.com' , 'true' ' admin');
