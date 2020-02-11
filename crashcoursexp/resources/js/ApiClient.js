import axios from 'axios'

export default class ApiClient {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "http://localhost:8000/api/",
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }
        })
    }

    async login(email, password) {
        console.log("Attempt to login...");
        let token;
        this.axiosInstance.post('auth/login', {
            email: email,
            password: password,
        })
        .then(function (response) {
            token = response.data['access_token'];
            console.log('Login Successful');
            return true;

        })
        .catch(function (error) {
            console.log('Login Failed');
            return false;
        });
        this.axiosInstance.defaults.headers['Authorization'] = "Bearer " + token;
    }

    logout() {
        console.log("Attempt to logout...");
        this.axiosInstance.get('auth/logout/');
        this.axiosInstance.defaults.headers['Authorization'] = "";
        console.log("logout successful!");
    }

    signUpUser() {
        this.axiosInstance.post('auth/signup/', {
            name: 'ExampleName',
            email: 'asdasdasexample@email.com',
            password: '123456',
            password_confirmation: '1234567'
        })
        .then(function (response) {
            return true;
        })
        .catch(function (error) {
            console.warn(error);
            return false;
        })
    }
}
