<template>
  <div class="font-brandon">
    <div class="bg-black text-white text-xs flex justify-end py-2 px-8">
        <div class="flex space-x-8 uppercase font-bold">
          <span>Operaciones@agroexportelohim.com</span>
          <span>(+51) 950 009 769</span>
        </div>
    </div>
    <Menu />
    <Banner />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'IndexPage',
  components: { Menu, Banner },
}
</script>
