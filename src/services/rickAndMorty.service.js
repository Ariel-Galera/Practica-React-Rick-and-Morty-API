
import { API_RM } from './../constants/api.constants';
class RickAndMortyService {

async getAllCharacters(){
    const response = await fetch(API_RM.CHARACTERS());
    //Interceptor
    return response.json();
}
//ojo hay que pasarle entre parentesis el tipo de dato para que lo busque ej:id
async getCharacterById(id) {
    const response = await fetch(API_RM.CHARACTER_BY_ID(id));
    //Interceptor
    return response.json();
}


}

export default new RickAndMortyService();