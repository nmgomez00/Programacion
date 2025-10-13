using Auth.Models.User;
using Auth.Models.User.Dto;
using Auth.Repositories;
using Auth.Utils;
using AutoMapper;
using Microsoft.AspNetCore.Identity;

namespace Auth.Services
{
    public class UserServices
    {
        private readonly IUserRepository _repo;
        private readonly IMapper _mapper;
        private readonly IEncoderServices _encoderServices;


        public UserServices(IUserRepository repo, IMapper mapper, IEncoderServices encoderServices)
        {
            _repo = repo;
            _mapper = mapper;
            _encoderServices = encoderServices;
        }
        // solucionar el error logico de que puede haber dos usuarios con el mismo username
        async public Task<User> GetOneByEmailOrUserName(string? email, string? username)
        {
            User user;
            if ( !string.IsNullOrEmpty(email))
            {
                user = await _repo.GetOneAsync(x => x.Email == email);

            }
            else if (!string.IsNullOrEmpty(username))
            {
                user = await _repo.GetOneAsync(x => x.UserName == email);

            }
            else
            {
                throw new HttpResponseError(System.Net.HttpStatusCode.BadRequest, "Email and Username are empty");
            }
            return user;
        }

        async public Task<User> CreateOne(RegisterDTO register)
        {
            var user = _mapper.Map<User>(register);
            user.Password = _encoderServices.Encode(register.Password);
            await _repo.CreateOneAsync(user);
            return user;
        }

    }
}
