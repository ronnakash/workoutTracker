import axios, {AxiosResponse} from 'axios'
import { parseUserFromLoginRequest, parseUserFromRegisterRequest } from './responseParser';
export const API_URL = 'http://localhost:5000';

const REGISTER_URL = `${API_URL}/auth/register`;
const LOGIN_URL = `${API_URL}/auth/login`;

export const registerUserRequest = axios.create({
    method: 'PUT',
    baseURL: REGISTER_URL,
    transformResponse: [parseUserFromRegisterRequest],
    timeout: 10000
  });


export const loginUserRequest = axios.create({
    method: 'POST',
    baseURL: LOGIN_URL,
    transformResponse: [parseUserFromLoginRequest],
    timeout: 10000
  });