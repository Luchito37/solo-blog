import Vue from "vue"
import App from "./views/App.vue"
import router from "./router"


new Vue({
    el: "#app",
    render: (renderComponent) => renderComponent(App),
    // router deve avere come valore un istanz adi vue router
    router
})