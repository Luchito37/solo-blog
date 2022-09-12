<template>
  <div
    class="bg-section d-flex"
    :style="`background-image: url('/img/${$route.meta.sectionBg}')`">
    

    <div class="container d-flex justify-content-center align-items-center">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8">
            <h2 class="text-white mb-4">Built with Bootstrap 5</h2>
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
export default {};
</script>

<style lang="scss" scoped>

.bg-section {
  background-image: linear-gradient(
    to bottom,
    #4c7f95 0%,
    rgb(97 140 161 / 53%) 75%,
    rgb(255 255 255 / 66%) 100%
  );
  min-height: 600px;
}

</style>