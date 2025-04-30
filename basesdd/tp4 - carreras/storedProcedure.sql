create Procedure I_persona
    @apellido varchar(64),
    @nombre varchar(64),
    @dni integer,
    @dni int out 
as
begin
    begin try
        insert into persona (apellido, nombre, dni)
        values (@apellido, @nombre, @dni)
        set @dni = @@identity
    end try
    Begin catch
        select
            error_number() as error_number,
            error_message() as error_message,
            error_severity() as error_severity,
            error_state() as error_state,
            error_line() as error_line
        return
    end catch
end
