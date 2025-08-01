create procedure GetErrorInfo
as 
begin 
select 
	ERROR_NUMBER() as ErrorNumber
	,ERROR_SEVERITY() as ErrorSeverity
	,ERROR_STATE() AS ErrorState
	,ERROR_PROCEDURE() AS ErrorProcecure
	,ERROR_LINE() AS ErrorLine
	,ERROR_MESSAGE() AS ErrorMessage;
END;
