<template>
  <HeaderComponent/>
  <nav>
    <RouterLink to="/">index(Eric)</RouterLink>
    <RouterLink to="/about/user">Abou user(Eric)</RouterLink>
    <RouterLink to="/about/group">Abou group(Eric)</RouterLink>
    <RouterLink to="/about/news">Abou news(Eric)</RouterLink>
  </nav>
  <RouterView/>
  <FooterComponent/>
</template>

<script >
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent, FooterComponent,
  },
}
</script>
