<template lang="pug">
  .image-view(:style="{ 'background-image': `url(${require('../assets/image/' + this.$route.params.id + '.jpg')})` }")
</template>

<script>

export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.image-view
  height 100vh
  width 100vw 
  background-attachment fixed
  background-position center
  background-repeat no-repeat
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
</style>
