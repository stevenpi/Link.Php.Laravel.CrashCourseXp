import ApiClient from "../../ApiClient";

const state = {
    id: null,
    name: null,
    email: null,
};

const getters = {
    userId: state => state.id,
    userName: state => state.name,
    userEmail: state => state.email,
};

const actions = {
    async login({ commit }, credentials) {
        let client = new ApiClient();
        console.log(`attempt to login with email ${credentials.email} and pw ${credentials.password}`);
        let user = await client.login(credentials.email, credentials.password);
        // client.login(credentials.email, credentials.password).then((user) => {
            if (user) {
                commit('login', user);
            }
            else {
                console.log(`login FAILED, user is ${user}` );
            }
        // });
    },
};

const mutations = {
    login: (state, user) => {
        state.id = user.id;
        state.name = user.name;
        state.email = user.email;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
