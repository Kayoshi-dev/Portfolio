<template>
  <div class="section container" v-if="$fetchState.pending">
    Récupération des posts... 📰
  </div>
  <div v-else-if="$fetchState.error">
    Une erreur est survenue :(
  </div>
  <div v-else class="section container">
    <div class="columns is-multiline">
      <Card v-for="post of posts" :key="post.id" :post="post"></Card>
    </div>
  </div>
</template>

<script>
import Card from "../../components/Card";
export default {
  components: {Card},
  data() {
    return {
      posts: []
    }
  },
  async fetch() {
    await this.$axios.$get('https://strapi-portfolio-kayoshi.herokuapp.com/posts')
      .then(res => {
        this.posts = res;
      })
  }
}
</script>
