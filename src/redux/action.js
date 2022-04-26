
import { TOKEN } from './type';





export function getToken(token) {
    console.log(token)
    return {
        type: TOKEN,
        payload: token
    }
}