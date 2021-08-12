const routes = [
    {
        path:'/login', component:login

    },
    {
        path:'/cadastro', component:cadastro

    },
    {
        path:'/home', component:home

    }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')
