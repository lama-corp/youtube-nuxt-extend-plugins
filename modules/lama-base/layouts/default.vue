<template>
  <div class="header">
    <div class="p-4">
      <nuxt-link
        v-for="route in routes"
        :key="route.name"
        :to="{ name: route.name }"
        class="mr-3"
      >
        <strong>{{ route.label }}</strong>
        <span v-if="route.subLabel"> : {{ route.subLabel }}</span>
      </nuxt-link>
    </div>
    <div class="pt-12">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LayoutDefault',
  computed: {
    ...mapState({
      routes: (state) => state.routes
    })
  },
}
</script>
