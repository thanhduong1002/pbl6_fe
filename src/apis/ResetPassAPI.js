
import axios from 'axios';

export default async function resetPass(method = 'post', body) {
    return await axios({
        baseURL: 'http://localhost:8080/sendMail',
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
    });
}