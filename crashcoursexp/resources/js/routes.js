import ExampleComponent from "./components/layouts/ExampleComponent";
import home from "./components/layouts/Home";

export const routes = [
    {
        name: 'Home',
        path: '/',
        component: home
    }, {
        name: 'ExamplePage',
        path: "/ex",
        component: ExampleComponent,
    }
];
