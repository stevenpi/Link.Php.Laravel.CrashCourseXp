import ExampleComponent from "./components/ExampleComponent";
import home from "./components/home";

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
