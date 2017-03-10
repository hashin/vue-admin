<template>
  <div class="content has-text-centered">
    <p>
      <img width="200" src="~assets/logo.svg" :alt="description">
    </p>

    <h1 class="is-title is-bold">Asthra IoT</h1>

    <p>
      <strong>{{ description }}</strong>,
      <a :href="homepage">Freezer Monitoring Solution.</a>
    </p>

    <p>Demo for Dubai Municipality.</p>
  </div>
</template>

<script>
export default {

  data () {
    return this.$store.state.pkg
  }

}
</script>

<style lang="scss" scoped>
.is-title {
  text-transform: capitalize;
}
</style>
