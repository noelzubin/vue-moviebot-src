<template lang="pug">
  div#SendMessage 
    input(type="text" placeholder="your message here.")
    img(src="../assets/sendArrow.svg").send
</template>

<script>
export default {
  name: 'SendMessage',
  data() {
    return { };
  },
};
</script>

<style scoped lang="sass">
#SendMessage 
  background: #423C62
  grid-row: 2
  grid-column: 2
  display: flex
  input
    border: none
    height: 75%
    margin: auto
    margin-left: 30px
    font-size: 1em
    width: 100%
    background: transparent
    color: #c3c3c3
    &:focus
      color: #c3c3c3
      outline: none
  .send
    height: 45%
    width: 50px
    margin: auto 25px auto 10px    

@media (max-width: 750px) 
  #SendMessage
    grid-column: 1
    

</style>
