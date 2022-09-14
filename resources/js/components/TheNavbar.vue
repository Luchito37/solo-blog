<template>
<div>

    <nav style="background-color:rgba(225, 225, 225, 0.1);" class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#page-top">
                    <img src="/img/logo-impronta-arancione.png" width="40px" alt="">
                </a>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><router-link class="nav-link" :to="{name: 'home.index'}">Home</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" :to="{name: 'about.index'}">About</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" :to="{name: 'contact.index'}">Contact</router-link></li>
                    </ul>
            </div>
        </nav>

</div>
</template>

<script>
export default {
    
}
</script>
