<template>
  <nav aria-label="..." class="mt-2">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <span class="page-link link" @click="primeiraPagina">First</span>
      </li>
      <li class="page-item link">
        <span class="page-link" @click="paginaAnterior">Previous</span>
      </li>
      <li class="page-item px-1">
        <input type="text" class="form-control text-center" style="background-color: #007bff;color: white;" @keypress.enter="paginacao" v-model="paginaAtual">
        <!-- <span class="page-link">{{ paginaAtual }}</span> -->
      </li>
      <li class="page-item link">
        <span class="page-link" @click="proximaPagina">Next</span>
      </li>
      <li class="page-item link">
        <span class="page-link" @click="ultimaPagina">Last</span>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "paginacao",
  data: () => ({
    limitePaginas: 10,
    paginaAtual: 1,
  }),
  computed: {
    residencias() {
      return this.$store.getters.getResidencias;
    },
  },
  created() {
    this.totalPaginas();
  },
  mounted() {
    this.$store.dispatch("setResidencias");
  },
  methods: {
    primeiraPagina() {
      this.paginaAtual = 1;
      this.paginacao();
    },
    paginaAnterior() {
      this.paginaAtual--;
      if (this.paginaAtual < 1) {
        this.paginaAtual++;
      }
      this.paginacao();
    },
    proximaPagina() {
      this.paginaAtual++;
      if (this.paginaAtual > this.totalPaginas()) {
        this.paginaAtual--;
      }
      this.paginacao();
    },
    ultimaPagina() {
      this.paginaAtual = this.totalPaginas();
      this.paginacao();
    },
    totalPaginas() {
      let total = this.residencias.length / this.limitePaginas;
      return Math.ceil(total);
    },
    paginacao() {
      this.$eventBus.$emit("paginacao", {
        paginaAtual: this.paginaAtual,
        limitePaginas: this.limitePaginas,
      });
    },
  },
};
</script>
<style>
.link {
  cursor: pointer;
}
</style>