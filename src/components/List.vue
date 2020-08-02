<template>
  <li
    class="list-group-item list-group-item-action"
    :item="item"
    :descricao="descricao"
    :valor="valor"
  >
    <span class="mr-3 float-left">
      <slot></slot>
    </span>
    <span class="badge badge-success badge-pill float-right">
      {{ descricao }}
      {{ valor }}
    </span>
  </li>
</template>

<script>
export default {
  name: "list",
  props: {
    descricao: String,
    valor: [String, Number],
    item: Object,
  },
};
</script>

<style scoped></style>