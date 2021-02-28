<template>
  <div class="column is-one-third">
    <div class="card">
      <header class="card-header">
        <div>
          <img :src="`https://strapi-portfolio-kayoshi.herokuapp.com${this.post.cover.formats.medium.url}`" :alt="this.post.cover.alternativeText">
        </div>
      </header>
      <div class="card-content">
        <div class="content px-5">
          <h2 class="has-text-grey-darker is-text-ellipsis is-size-5">{{post.title}}</h2>

          <div class="has-text-right">
            <NuxtLink :to="`/blog/post/${post.id}`" href="#"><b-button class="has-text-grey-dark">Voir</b-button></NuxtLink>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item is-justify-content-start px-5">
          <p class="has-text-grey-light">{{post.published_at}}</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    post: {
      type: Object,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 15px;
  position: relative;
  top: 0;
  transition: all 0.2s ease-out;

  &:hover {
    transition: all 0.2s ease-out;
    top: -4px;
    box-shadow: 0 4px 8px rgba(38, 38, 38, 0.2);
  }

  .card-header {
    box-shadow: none;

    img {
      border-radius: 15px;
    }
  }

  .card-content {
    padding: 0;

    button {
      border-radius: 13px;
    }
  }

  .card-footer {
    border: 0;
  }
}

</style>
