export const TYPES = Object.freeze({
    DAYS:"CAMBIAR_DIA",
    HOUR: "CAMBIAR_HORA",
    MINUTES: "CAMBIAR_MINUTOS",
    SECOND: "CAMBIAR_SEGUNDOS",
    RESET: "RESET"
  })
export const initialValue = {
    days:0,
    hours:0,
    minutes:0,
    seconds:0,
  }
export function timeReducer(state,action){
    const {type, payload} = action;
    switch(type){
        case TYPES.DAYS:{
            return {
              days:payload,
              hours:payload*24,
              minutes:payload *(60 *24),
              seconds:payload * (3600*24),
            };
          }
      case TYPES.HOUR:{
        return {
            days:payload/24,
          hours:payload,
          minutes:payload * 60,
          seconds:payload * 3600,
        };
      }
      case TYPES.MINUTES:{
        return{
            days:payload/ (24*60),

          hours:payload / 60,
          minutes:payload,
          seconds:payload * 60,
        }
      }
      case TYPES.SECOND:{
        return{
            days:payload/ (24*3600),
          hours:payload / 3600,
          minutes:payload/ 60,
          seconds:payload,
        }
      }
      case TYPES.RESET:{
        return{
            days:0,
            hours:0,
            minutes:0,
            seconds:0,
        }
      }
      default:
        return state;
    }
  }