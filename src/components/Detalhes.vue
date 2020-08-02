<template>
  <div class="row justify-content-center text-center">
    <div class="col-12 col-lg-5">
      <div class="card">
        <div class="card-header cabecalho">
          <h5 class="card-title m-0">Details</h5>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            <strong>{{ detalhe.name }}</strong>
          </h5>
          <h6 class="card-title">{{ detalhe.host_name }}</h6>
          <h6 class="card-title">{{ detalhe.neighbourhood }} - {{ detalhe.neighbourhood_group }}</h6>
          <p class="card-text">
            {{ detalhe.room_type }}
            <span
              class="badge badge-success badge-pill"
            >Price: $ {{detalhe.price}}</span>
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Number of Reviews: {{ detalhe.number_of_reviews }}</small>
        </div>
      </div>
      <div class="mt-3">
        <button type="button" class="btn btn-info btn-block" @click="voltar">Back</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detalhes",
  props: {
    title: String,
  },
  data: () => ({
    detalhe: {},
  }),
  created() {
    this.detalhe = this.$route.params.item;
  },
  mounted() {
    if (!this.$route.params.item) {
      this.voltar();
    }
  },
  methods: {
    voltar() {
      this.$router.push({ name: "residencias" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cabecalho {
  background-color: lightseagreen;
  color: white;
}
</style>
