<template>
  <div
    class="bg-section d-flex"
    :style="`background-image: url('/img/${$route.meta.sectionBg}')`"
  >
    <div class="container d-flex justify-content-center align-items-center">
      <div class="container px-4 px-lg-5">
        <div class="row row-cols-lg-2 row-cols-md-1">
                <div class="col mb-5" style=" text-align: -webkit-center;">
                <div class="gallery">
  <img style="background-color: white; object-fit: fill;" src="/img/home-bg.png" alt="a hot air balloon">
  <img style="background-color: white;" src="/img/logo-blue-impronta.png" alt="a clock">
  <img style="background-color: white;" src="/img/logo-impronta-arancione.png" alt="a sky photo of an old city">
  <img style="background-color: white;" src="/img/logo-blue-impronta.png" alt="a small boat">
  <img style="background-color: white;" src="/img/logo-impronta-arancione.png" alt="a lonely man :(">
  <img style="background-color: white;" src="/img/logo-blue-impronta.png" alt="a forest">
</div>

            </div>
          <div class="col-lg-6 mt-5">
            <h2 class="text-white mb-4">Se vuoi saperene di più scrivici: </h2>
            <p class="text-white-50">
              La nostra più totale trasparenza e serietà nel lavoro non ha
              eguali, noi spingiamo per ottenere il massimo portando il nostro
              cliente ed anche noi stessi alla vittoria, insomma il nostro sarà
              un accordo WIN TO WIN. Un altra caratteristica è la nostra età,
              siamo tutti ragazzi giovani con molta grinta e soprattutto chi
              meglio di noi può portarti nel mondo digitale nel miglior modo
              possibile ? Orma inoltre non offre un servizio già pronto e uguale
              per tutti, ma bensì grazie ai numerosi freelance che si appoggiano
              ad essa, il prodotto che offriamo è sempre creato su misura del
              nostro cliente, occupandoci per renderlo unico. Ultimo ma non meno
              importante, con Orma non avrete mai la paura di rimanere indietro,
              perché costantemente in base all'andamento del mercato
              aggiorneremo i nostri servizi offrendo così sempre il prodotto
              all'ultimo grido
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>


<style  scoped>
.gallery {
  --s: 250px; /* the size */

  display: grid;
  width: var(--s);
  aspect-ratio: 1;
  transform-style: preserve-3d;
  --_p: perspective(calc(2.5 * var(--s)));
  animation: r 9s infinite cubic-bezier(0.5, -0.5, 0.5, 1.5);
}
.gallery img {
  grid-area: 1/1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: var(--_t) translateZ(calc(var(--s) / 2));
}
.gallery img:nth-child(2) {
  --_t: rotateX(-90deg);
}
.gallery img:nth-child(3) {
  --_t: rotateY(90deg) rotate(-90deg);
}
.gallery img:nth-child(4) {
  --_t: rotateX(180deg) rotate(90deg);
}
.gallery img:nth-child(5) {
  --_t: rotateX(90deg) rotate(90deg);
}
.gallery img:nth-child(6) {
  --_t: rotateY(-90deg);
}

@keyframes r {
  0%,
  3% {
    transform: var(--_p) rotateX(0deg) rotate(0deg) rotateY(0deg) rotateX(0deg)
      rotate(0deg) rotateY(0deg);
  }
  14%,
  19% {
    transform: var(--_p) rotateX(90deg) rotate(0deg) rotateY(0deg) rotateX(0deg)
      rotate(0deg) rotateY(0deg);
  }
  31%,
  36% {
    transform: var(--_p) rotateX(90deg) rotate(90deg) rotateY(0deg)
      rotateX(0deg) rotate(0deg) rotateY(0deg);
  }
  47%,
  52% {
    transform: var(--_p) rotateX(90deg) rotate(90deg) rotateY(-90deg)
      rotateX(0deg) rotate(0deg) rotateY(0deg);
  }
  64%,
  69% {
    transform: var(--_p) rotateX(90deg) rotate(90deg) rotateY(-90deg)
      rotateX(90deg) rotate(0deg) rotateY(0deg);
  }
  81%,
  86% {
    transform: var(--_p) rotateX(90deg) rotate(90deg) rotateY(-90deg)
      rotateX(90deg) rotate(90deg) rotateY(0deg);
  }
  97%,
  to {
    transform: var(--_p) rotateX(90deg) rotate(90deg) rotateY(-90deg)
      rotateX(90deg) rotate(90deg) rotateY(-90deg);
  }
}


@keyframes b {
  0%,
  3% {
    background: #774f38;
  }
  14%,
  19% {
    background: #c5e0dc;
  }
  31%,
  36% {
    background: #036564;
  }
  45%,
  55% {
    background: #b38184;
  }
  64%,
  69% {
    background: #424254;
  }
  81%,
  86% {
    background: #4dbce9;
  }
  97%,
  to {
    background: #774f38;
  }
}



</style>