<template>
  <nav class="bg-white relative z-10">
    <div class="relative my-0 px-10 flex justify-between items-center">
      <hamburguer-menu />
      <a href="#" class="logo">
        <img src="~/assets/images/logoA.png" alt="Elohim" />
      </a>
      <ul class="flex w-full justify-evenly py-1  font-bold">
        <li v-for="(item, index) in menu" :key="index" class="uppercase">
          {{ item.name }}
        </li>
      </ul>
      <ul class="w-48 flex justify-evenly py-2">
        <li class="flex items-center">
          <a id="esp" href="#"></a>
        </li>
        <li class="flex items-center">
          <a id="eng" href="#"></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import HamburguerMenu from './HamburguerMenu.vue'
export default {
  name: 'MegaMenu',

  components: { HamburguerMenu },
  data() {
    return {
      menu: [
        { name: 'Inicio' },
        { name: '¿Quienes Somos?' },
        { name: 'Catálogo' },
        { name: 'Encuéntranos' },
        { name: 'Mundo' },
      ],
    }
  },
}
</script>

<style scoped>
.logo {
  position: absolute;
  width: 129px;
  height: 108px;
  top: -20px;
  left: 46%;
}

nav ul li:nth-child(3) {
  margin-right: 250px;
}

#esp {
  width: 35px;
  height: 35px;
  display: inline-block;
  background-image: url('~/assets/images/ESP.svg');
}
#eng {
  width: 35px;
  height: 35px;
  display: inline-block;
  background-image: url('~/assets/images/ENG.svg');
}

@media (max-width: 960px) {
  nav ul:nth-of-type(1) li {
    display: none;
  }
  .logo {
    left: 40%;
    width: 90px;
    top: -5px;
  }
}
</style>

