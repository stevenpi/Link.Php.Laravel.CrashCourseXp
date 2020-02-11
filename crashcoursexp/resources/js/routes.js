import ExampleComponent from "./components/ExampleComponent";
import home from "./components/Home";

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
