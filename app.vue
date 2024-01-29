<template>
  <div>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script setup lang="ts">
  console.log('app setup')

  onMounted(() => {
    console.log('app mounted')
  })
</script>
