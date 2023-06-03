import { baseApi } from '@/plugins/axios';

const api = '/auth';

const login = (body) => baseApi.post(`${api}/login`, body);
const register = (body) => baseApi.post(`${api}/register`, body);
const logout = (body) => baseApi.post(`${api}/logout`, body);

export { login, register, logout };
