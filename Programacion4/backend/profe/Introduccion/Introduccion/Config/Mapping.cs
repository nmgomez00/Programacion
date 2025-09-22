using System;
using AutoMapper;
using Introduccion.Models.Cine;
using Introduccion.Models.Cine.DTO;

namespace Introduccion.Config;

public class Mapping : Profile
{
    public Mapping()
    {
        CreateMap<bool?, bool>().ConvertUsing(src => src ?? false);
        CreateMap<String?, String>().ConvertUsing(src => src ?? String.Empty);
        CreateMap<Cine, CinesDTO>().ReverseMap();
        CreateMap<CreateCineDTO, Cine>().ReverseMap();
        CreateMap<UpdateCineDTO, Cine>().ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));
    }

}
