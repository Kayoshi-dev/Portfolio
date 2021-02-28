<template>
  <p v-if="$fetchState.pending">Récupération des montagnes... ⛰️</p>
  <p v-else-if="$fetchState.error">Une erreur est survenue :(</p>
  <div v-else class="section container">
    <div class="columns is-multiline">
      <Card v-for="post of posts" :key="post.id" :post="post"></Card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  async fetch() {
    let id = this.$route
    await this.$axios.$get('https://strapi-portfolio-kayoshi.herokuapp.com/posts')
      .then(res => {
        this.posts = res;
      })
  }
}
</script>
