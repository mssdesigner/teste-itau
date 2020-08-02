<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-5">
      <div class="card text-center">
        <div class="card-body">
          <h3 class="card-title">{{ titulo }}</h3>
          <ul class="list-group mt-2">
            <template v-for="item in medias">
              <list
                :key="item.id"
                descricao="Price: $"
                :valor="item.price"
              >{{ item.neighbourhood_group }}</list>
            </template>
          </ul>
        </div>
      </div>
      <div class="mt-3">
        <button type="button" class="btn btn-info btn-block" @click="voltar">Back</button>
      </div>
    </div>
  </div>
</template>
<script>
import List from "@/components/List";
export default {
  name: "medias",
  components: {
    list: List,
  },
  computed: {
    medias() {
      return this.$store.getters.getMedias;
    },
  },
  data: () => ({
    titulo: "Average Price",
  }),
  mounted() {
    this.$store.dispatch("setMedias");
  },
  methods: {
    voltar() {
      this.$router.push({ name: "residencias" });
    },
  },
};
</script>