import AdminHome from './components/admin/AdminHome'
import CategoryList from "./components/admin/category/List";

export const routes = [
    {path: '/home', component: AdminHome},
    // CATEGORY
    {path: '/category-list', component: CategoryList},
]
