<template>
<div>
    <!--:style="`background-image: url('/img/${$route.meta.bgImage}')`"-->
    <!--<a class="btn btn-primary" href="#about">Get Started</a>-->
    <header style="background-position: center; background-repeat: no-repeat; background-size: contain;" :style="`background-image: url('/img/${$route.meta.bgImage}')`">
        <div class="masthead">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <h1   class="mx-auto text-uppercase">{{$route.meta.title}}</h1>
                        <h2 class="text-secondary opacity-50 mx-auto mt-2 mb-5">{{$route.meta.subtitle}}</h2>
                    </div>
                </div>
            </div>
        </div>
            
        </header>
</div>
    
</template>

<script>
export default {
    
}
</script>


<style>
.masthead{
        height: 100vh;
        padding: 0;
        position: relative;
    width: 100%;
    height: auto;
    min-height: 45rem;
    padding: 15rem 0;
    background-image: linear-gradient(to bottom, rgb(255 255 255 / 0%) 0%, rgb(76 127 150 / 0%) 75%, rgb(79 128 150) 100%);
}
.masthead h1{
    font-size: 2.5rem;
    line-height: 6.5rem;
    letter-spacing: 0.8rem;
}

</style>