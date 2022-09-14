<template>
<div class="sfocatura">
    <div
    class="bg-section d-flex justify-content-center align-items-center"
    :style="`background-image: url('/img/${$route.meta.sectionBg}')`">
    <div class="section text-white">
        <div class="container">
            <div class="row row-cols-md-1 text-center">
                <div class="col text-center mb-5">
                    <div class="colortext"><h1>Le nostre caratteristiche</h1></div>
                    <div class="">
                        <h4>Il cliente è il nostro obbiettivo</h4>
                    </div>
                </div>
            </div>
            <div class="row row-cols-lg-3 row-cols-md-2 px-5">
                <div class="col d-flex mb-5 px-5" v-for="element in listaPeculiarita" :key="element.img">
                    <div>
                    <!--<img :src="require('../assets/img/icon-'+ element.img +'.png')" width="40" alt="">-->
                    <img :src="('/img/'+ element.img +'.png')" width="60" alt="">
                    </div>
                    <div class="text-start px-4">
                        <div>
                            <h2 class="colortext-3">{{element.title}}</h2>
                        </div>
                        <div>
                            <div>{{element.paragraph}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <div class="p-3">
                        <router-link :to="{name: 'contact.index'}"><button type="button" class="btn bgbuttom text-white">Collabora con noi</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="ondina-bg section-2 ">
        <div class="container">
            <div class="row px-5 text-center">
                <div class="col mb-5 spacing">
                    <div class=" colortext-2"><h1 class="title-size">lascia la tua impronta</h1></div>
                    <div >
                        <h4>Le nostre soluzioni</h4>
                    </div>
                </div>
            </div>
            <div class="row row-cols-lg-3 row-cols-md-1">
                <div class="col  d-flex justify-content-center mb-4" v-for="element in caratteristicheCard" :key="element.img">
                    <div class="card-slim bgcard mx-3 shadow-lg"  style="width: 18rem; background-color: #e9966d;">
                        <video :src="('/img/'+element.img+'.mp4')" width=288  height=240 autoplay muted loop poster="immaginedianteprima.jpg">
                                Il video non può essere riprodotto sul tuo browser.<br>
                                Fai partire il download del video cliccando <a href="URL">qui</a>. 
                        </video>
                        <!--<img :src="require('../assets/img/home-business-service-slide-'+ element.img +'-480x298.jpg')" class="card-img-top" alt="...">-->
                        <div class="card-body  text-center">
                            <div><h3 class="colortext-3">{{element.title}}</h3></div>
                            <p class="card-text colrtext-mini">{{element.paragraph}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section-2" :style="`background-image: url('/img/${$route.meta.sectionBg}')`">
        <div class="container">
            <div class="row row-cols-2 text-center px-5 align-items-center">
                <div class="col text-start">
                    <div>
                        <h1 class="colortext-2 title-size">Il nostro obiettivo sei <strong class="text-white">TU</strong></h1>
                    </div>
                    <div>
                        <p class="colrtext-mini">
                            lo studio che facciamo dietro ogni nostro cliente è improntato a creare la sua identità digitale, unica nel suo
                            genere.
                        </p>
                    </div>
                </div>
                <div class="col">
                        <img src="/img/logo-bianco-impronta.png" width="200" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class=" ondina-bg section-2">
        <div class="container">
            <div class="row px-5 text-center">
                <div class="col px-5 mb-5 spacing">
                    <div class="px-5 colortext-2"><h1 class="title-size">lascia la tua impronta</h1></div>
                    <div class="px-5">
                        <h4>I nostri pacchetti</h4>
                    </div>
                </div>
            </div>
            <div class="row row-cols-lg-3 row-cols-md-1 justify-content-center">
            <div class="col d-flex justify-content-center mb-3">
            <div class="skill-card text-center">
                <header class="skill-card__header"><img class="skill-card__icon" src="/img/16.png" alt="HTML5 Logo"/></header>
                    <section class="skill-card__body ">
                        <h2 class="skill-card__title p-2">servizi</h2><span class="skill-card__duration">Inizia da qui</span>
                        <ul class="skill-card__knowledge ">
                            <li>Sito vetrina</li>
                            <li>Gestione canali Social</li>
                        </ul>
                    </section>
            </div>
            </div>
            <div class="col d-flex justify-content-center mb-3">
            <div class="skill-card text-center">
                <header class="skill-card__header"><img class="skill-card__icon" src="/img/17.png" alt="HTML5 Logo"/></header>
                    <section class="skill-card__body">
                        <h2 class="skill-card__title p-2">servizi</h2><span class="skill-card__duration">Fai il grande passo</span>
                        <ul class="skill-card__knowledge">
                            <li>Sito vetrina</li>
                            <li>Gestione canali Social</li>
                            <li>Brand Identity</li>
                        </ul>
                    </section>
            </div>
            </div>
            <div class="col d-flex justify-content-center mb-3">
            <div class="skill-card text-center">
                <header class="skill-card__header"><img class="skill-card__icon" src="/img/18.png" alt="HTML5 Logo"/></header>
                    <section class="skill-card__body">
                        <h2 class="skill-card__title p-2">servizi</h2><span class="skill-card__duration">Abatti i tuoi copetitor</span>
                        <ul class="skill-card__knowledge">
                            <li>Sito e-commerce</li>
                            <li>Gestione canali Social</li>
                            <li>Gestione sito Web</li>
                            <li>Brand Identity</li>
                        </ul>
                    </section>
            </div>
            </div>
            </div>
        </div>
    </div>
    
</div>
</template>

<script>

export default {
    data(){
        return {
            listaPeculiarita: [
                {
                    title: "Trasparenza",
                    paragraph: "La nostra più totale trasparenza  e serietà nel lavoro non ha eguali, noi spingiamo per ottenere il massimo portando il nostro cliente ed anche noi stessi alla vittoria, avndo così un accordo WIN TO WIN.",
                    img: "transparency"
                },
                {
                    title: "Servizio",
                    paragraph: "Abbiamo un servizio clienti aperto 24h, per non lasciare mai soli i nostri clienti nel momento del bisogno.",
                    img: "fulltime"
                },
                {
                    title: "Unicità",
                    paragraph: "Orma inoltre non offre un servizio già pronto e uguale per tutti, ma bensì grazie ai numerosi freelance che si appoggiano ad essa, il prodotto che offriamo è sempre creato su misura del nostro cliente, preoccupandoci a renderlo unico",
                    img: "unique"
                },
                {
                    title: "Competenze",
                    paragraph: "Si danno per scontate ma non le sono, le competenze da noi offerte sono garantite proprio dal fatto che i nostri esperti sono dei freelance specializzati, nel loro settore, in modo tale da poter offrire il mioglior prodotto sul mercato.",
                    img: "skills"
                },
                {
                    title: "Al passo con i tempi",
                    paragraph: "Con Orma non avrete mai la paura di rimanere indietro, perché costantemente in base all'andamento del mercato aggiorneremo i nostri servizi offrendo così sempre il prodotto all'ultimo grido.",
                    img: "ontime"
                },
                {
                    title: "Personalità",
                    paragraph: "Il nostro intento non è solamente quello di far approdare il nostro cliente nel mondo digitale, ma anzi, ci preoccupiamo di creare la sua identità digitale, lasciando la sua impronta ben impresa nel WEB.",
                    img: "personality"
                },

            ],
            caratteristicheCard: [
                {
                    title: "Digitalizzazine",
                    paragraph: "Utilizzeremo i nostri studi e strumenti per creare la tua identità digitale.",
                    img: "digitalization"
                },
                {
                    title: "Selezione del Target di riferimento",
                    paragraph: "Tramite lo studio e l'analisi dei dati raccolti tramite i nostri strumenti, capiremo il target di client adatto alla tua attività.",
                    img: "target"
                },
                {
                    title: "Valorizzazione del prodotto/servizio",
                    paragraph: "Grazie alla nostra gestione dei tuoi canali e pagine web daremo la giusta visibilità al prodotto/servizio.",
                    img: "valorizzation"
                },

            ],
            caratteristicheCard2: [
                {
                    title: "BASE",
                    paragraph: "Learn to Write as a Professional Author.",
                    img: "16"
                },
                {
                    title: "PREMIUM",
                    paragraph: "Customer-centric Info-tech Strategies.",
                    img: "17"
                },
                {
                    title: "ELITE",
                    paragraph: "Open Programmming Courses for Everyone: Python.",
                    img: "18"
                },

            ]
        }
    }
}

</script>


<style scoped lang="scss">
    .section{
        margin-top: 100px;
    }
    .colortext{
        color: #E9966D;
    }
    .bgbuttom{
        background-color: #E9966D;

        &:hover{
            background-color: #cd784e;
            border: solid 1px #cd784e;
        }
    }
    .ondina-bg{
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-size: cover;
        background-image: url(/img/ondina.png);
    }
    .colortext-2{
        color: #dc8357;
    }
    .colortext-3{
        color: #424242;
    }
    .colrtext-mini{
        color: #e3e4e5
    }
    .ombre{
        box-shadow: 12px 19px 17px 4px rgb(0 0 0 / 38%);
    }
    .section-2{
        padding-top: 80px;
        padding-bottom: 80px;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-size: cover;
    }
    .bgcard{
        background-color:  #4b7f96;
        border-radius: 25px;
    }
    .bgcard2{
        background-color:  #4b7f96;
        border-radius: 25px;
    }
.card-slim{
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
      transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  cursor: pointer;
}

.card-slim:hover{
     transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}

.card-slim h3{
  font-weight: 600;
}

.card-slim img{
  position: absolute;
  top: 20px;
  right: 15px;
  max-height: 120px;
}

.card-1{
  background-image: url(https://ionicframework.com/img/getting-started/ionic-native-card.png);
      background-repeat: no-repeat;
    background-position: right;
    background-size: 80px;
}
.skill-card {
  padding: 20px;
  width: 15em;
  background-color: #FFF;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
}
.skill-card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.skill-card:hover .skill-card__header {
  height: 40px;
}
.skill-card:hover .skill-card__header .skill-card__icon {
  transform: translateX(-50%) translateY(-50%) scale(3);
}
.skill-card:hover .skill-card__body {
  height: 170px;
}
.skill-card:hover .skill-card__body .skill-card__knowledge li {
  transform: translateX(0);
  transition-timing-function: cubic-bezier(0, 1.5, 1, 1);
  transition-duration: 0.5s;
}
.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(1) {
  transition-delay: 0.25s;
}
.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(2) {
  transition-delay: 0.5s;
}
.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(3) {
  transition-delay: 0.75s;
}
.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(4) {
  transition-delay: 1s;
}
.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(5) {
  transition-delay: 1.25s;
}
.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(6) {
  transition-delay: 1.5s;
}
.skill-card .skill-card__header {
  position: relative;
  background-color: #E9966D;
  height: 170px;
  margin: -20px -20px 20px -20px;
  transition: height 0.5s;
  overflow: hidden;
}
.skill-card .skill-card__header .skill-card__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  display: block;
  width: 128px;
  height: 128px;
  transition: transform 0.5s;
}
.skill-card .skill-card__body {
  height: 40px;
  transition: height 0.5s;
  overflow: hidden;
}
.skill-card .skill-card__body .skill-card__title {
  font-size: 1.4em;
  font-weight: 600;
  text-transform: uppercase;
}
.skill-card .skill-card__body .skill-card__duration {
  color: #9E9E9E;
  font-style: italic;
}
.skill-card .skill-card__body .skill-card__knowledge {
  margin-top: 10px;
  color: #424242;
}
.skill-card .skill-card__body .skill-card__knowledge li {
  margin-top: 5px;
  transition-duration: 0;
  transition-delay: 0.5s;
  transform: translateX(-100%);
}
</style>


<!--
<div class="section-2">
        <div class="container">
            <div class="row px-5 text-center">
                <div class="col px-5 mb-5 spacing">
                    <div class="px-5 colortext-2"><h1>I nostri pacchetti</h1></div>
                    <div class="px-5">
                        <h4>Scopri cosa offriamo per la tua attività</h4>
                    </div>
                </div>
            </div>
            <div class="row row-cols-lg-3 row-cols-md-1">
                <div class="col mb-3" v-for="element in caratteristicheCard2" :key="element.img">
                    <div class="card ombre overflow-hidden text-white">
                        <img :src="('/img/'+ element.img +'.png')" class="card-img" alt="">
                        <!--<img :src="require('../assets/img/stock-full-hd-'+ element.img +'-443x600.jpg')" class="card-img" alt="...">
                        <div class="card-img-overlay d-flex justify-content-end flex-column align-items-start text-start ">
                            <h5 class="card-title colortext">{{element.price}}</h5>
                            <p class="card-text">{{element.paragraph}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>-->


<!--
            <div class="row row-cols-lg-3 row-cols-md-1">
                <div class="col-md-4 text-center" v-for="element in caratteristicheCard2" :key="element.img">
                    <div class="card-slim card-slim-1">
                        <h3>{{element.title}}</h3>
                        <p>{{element.paragraph}}.</p>
                    </div>
                </div>
            </div> -->