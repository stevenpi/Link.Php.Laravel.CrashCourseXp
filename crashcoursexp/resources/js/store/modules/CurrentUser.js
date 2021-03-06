import ApiClient from "../../ApiClient";

const state = {
    id: null,
    name: null,
    email: null,
};

const client = new ApiClient();

const getters = {
    userId: state => state.id,
    userName: state => state.name,
    userEmail: state => state.email,
};

const actions = {
    async login({ commit }, credentials) {
        await client.login(credentials.email, credentials.password).then((user) => {
            if (user) {
                commit('login', user);
                Vue.toasted.info(`Hello ${user.name}!`);
            }
            else {
                console.log(`login FAILED, user is ${user}` );
            }
        });
    },
    async logout({ commit }) {
        await client.logout();

        commit('logout');
    },
};

const mutations = {
    login: (state, user) => {
        state.id = user.id;
        state.name = user.name;
        state.email = user.email;
    },
    logout: (state) => {
        state.id = null;
        state.name = null;
        state.email = null;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
