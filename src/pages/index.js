import Loadable from "react-loadable";
import Loading from "common/loading";

export const Home = Loadable({
    loader: () => import("./home"),
    loading: Loading
})

export const Find = Loadable({
    loader: () => import("./find"),
    loading: Loading
})

export const Order = Loadable({
    loader: () => import("./order"),
    loading: Loading
})

export const Mine = Loadable({
    loader: () => import("./mine"),
    loading: Loading
})

export const Login = Loadable({
    loader: () => import("./login"),
    loading: Loading
})



export const Category = Loadable({
    loader: () => import("./category"),
    loading: Loading
})

export const FoodType = Loadable({
    loader: () => import("./foodType"),
    loading: Loading
})