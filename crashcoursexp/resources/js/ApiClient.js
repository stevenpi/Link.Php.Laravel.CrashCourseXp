import axios from 'axios'

export default class ApiClient {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "http://localhost:8000/api/",
            timeout: 30000,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }
        })
    }

    async login(email, password) {
        console.log("Attempt to login...");
        let token;
        let user;
        await this.axiosInstance.post('auth/login', {
            email: email,
            password: password,

        })
        .then((response) => {
            token = response.data['access_token'];
            this.axiosInstance.defaults.headers['Authorization'] = "Bearer " + token;
            user =  {
                id: response.data['user']['id'],
                name: response.data['user']['name'],
                email: response.data['user']['email'],
            };
            console.log("logged in user");
            console.log(user);

        })
        .catch(function (error) {
            console.log('Login Failed');
            console.log(error);
        });
        return user;
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
