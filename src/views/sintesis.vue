<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En el siguiente mapa conceptual, se resumen los conceptos vistos en este componente formativo.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema general del componente formativo, que enuncia las temáticas desarrolladas en el mismo y destaca aspectos clave estudiados. Tema central: servicios de voz sobre IP (VoIP). Tema integrador: sistemas con arquitectura modular")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
