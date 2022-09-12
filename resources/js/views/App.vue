<template>
<div>
    <TheNavbar></TheNavbar>

    <main>
        <TheHeader></TheHeader>
    <!--contenuto pagina-->
    <!--simile allo @yield di blade-->
    <router-view></router-view>
    <!--<Home v-if="page === 'home'"></Home>-->
    <!--<About v-else-if="page === 'about'"></About>-->
    <!--<Contact v-else-if="page === 'contact'"></Contact>-->


    </main>

    <TheFooter></TheFooter>
</div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue';
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';

export default {
    components: {
        TheNavbar,
        TheFooter,
        Home,
        About,
        Contact,
        TheHeader
    },
    data(){
        return{
            page: "home"

        }
    }
    
}
</script>