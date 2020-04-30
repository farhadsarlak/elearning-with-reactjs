import httpService from "./httpService";
import config from './config';

export const registerUser = user =>(
    httpService.post(`${config.api}/api/register`,JSON.stringify(user))
);

export const loginUser = user => (
    httpService.post(`${config.api}/api/login`,JSON.stringify(user))
);
