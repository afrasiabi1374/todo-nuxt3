<script setup lang="ts">
  const {data} = useFetch('/api/todo') 
</script>
<template>
  <div>
  {{data}}
    <div class="n-card n-card-base">
      sdsdsd
      <slot />
    </div>
    <NuxtWelcome />
  </div>
</template>
