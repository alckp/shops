<template>
  <Layout>
    <template #hero>
      <section class="hero is-primary is-halfheight hero-background">
        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">
              {{ $context.data.title }}
            </p>
            <p class="subtitle">
              {{ $context.data.subTitle }}
            </p>
          </div>
        </div>
      </section>
      <br />
      <br />
    </template>

    <template #content>
      <section id="bio">
        <h1 class="title">{{ $context.data.bioTitle }}</h1>
        <p v-html="$context.data.bio"></p>
        <br />
        <g-link
          v-for="cta of $context.data.ctas"
          :key="cta.link"
          class="button mr-4 mb-4"
          :to="cta.link"
        >
          {{ cta.text }}
        </g-link>
        <hr />
        <br />
      </section>

      <section id="featured-products">
        <h1 class="title">Latest Products</h1>
        <div class="columns is-multiline is-mobile">
          <div
            class="column is-half-mobile mb-4"
            v-for="product of $context.featuredProducts.slice(0, 4)"
            :key="product.slug"
          >
            <ProductCard
              :product="product"
              buy-label="Add to cart"
              product-url-prefix="/shop/"
            />
          </div>
        </div>
        <hr />
      </section>
    </template>
  </Layout>
</template>

<script>
import ProductCard from 'pinelab-storefront-client/lib/buefy-components/ProductCard';
import { hydrate } from 'pinelab-storefront-client';

export default {
  components: {
    ProductCard,
  },
  async mounted() {
    await this.$vendure.getActiveOrder();
    await hydrate(this.$context.products, this.$vendure);
  },
};
</script>
<style>
.hero-background {
  background-image: url('/img/ben-de-boef-tattoo.jpeg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
}
</style>
