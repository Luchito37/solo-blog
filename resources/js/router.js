import Vue from "vue";
import VueRouter from "vue-router";
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';
import PageNotFound from './pages/PageNotFound.vue';
// deve comunicare a vue che utilisseremo questa libreria
Vue.use(VueRouter)
/**
 * 
 * @type {import("vue-router").RouteConfig[]}
 */


// dobbaimo creare un array con le rotte
const routes = [
    /*
    path = URI da scrivere nella barra di indirizzo
    */
   {
       path: "/", component: Home, name: "home.index",
       meta: {
           subtitle: "",
           bgImage: "home-bg.png",
           sectionBg: "bg-section.png"
       }
   },
   {path: "/chi-siamo", component: About, name: "about.index",
   meta: {
    title: "Chi siamo ",
    subtitle: "scopri di più su di noi",
    bgImage: "",
    sectionBg: "bg-section.png"
}},
   {path: "/contatti", component: Contact, name: "contact.index",
   meta: {
    title: "Contattaci",
    subtitle: "",
    bgImage: "",
    sectionBg: "bg-section.png"
}},
   {path: "*", component: PageNotFound },
]

//dobbiamo esportare un istanza di Vuerouter() con kle eventuali configurazone

const router = new VueRouter({
    //deve contenere un array di rotte
    routes,
    made: "history"
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ?? "home";

    next()
})

export default router 

