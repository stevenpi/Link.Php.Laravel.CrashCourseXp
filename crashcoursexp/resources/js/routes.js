import ExampleComponent from "./components/layouts/ExampleComponent";
import home from "./components/layouts/Home";
import UserDetail from "./components/layouts/UserDetail";

export const routes = [
    {
        name: 'Home',
        path: '/',
        component: home
    }, {
        name: 'ExamplePage',
        path: "/ex",
        component: ExampleComponent,
    }, {
        name: 'UserDetail',
        path: "/User",
        component: UserDetail,
    }
];
