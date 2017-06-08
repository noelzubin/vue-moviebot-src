<template lang="pug">
  div#SendMessage(v-bind:style='{background: inputFocused ? "#5b5384" : "#423c62"}')
    form(v-on:submit.prevent="submitDialogue")
      input(type="text" placeholder="your message here." v-model="dialogue" v-on:focus="focus" v-on:blur="unfocus" )
      button(type="submit" style="visibility:hidden")
    img(src="../assets/sendArrow.svg" v-on:click="submitDialogue").send 
</template>

<script>

export default {
  name: 'SendMessage',
  data() {
    return {
      dialogue: '',
      inputFocused: false,
    };
  },
  methods: {
    submitDialogue() {
      if (this.dialogue.trim() === '') {
        return;
      }
      this.$emit('askDialogue', this.dialogue);
      this.dialogue = '';
    },
    focus() {
      this.inputFocused = true;
    },
    unfocus() {
      this.inputFocused = false;
    },
  },
};
</script>

<style scoped lang="sass">
#SendMessage 
  background: #423C62
  grid-row: 2
  grid-column: 2
  display: flex
  form
    width: 100%
    margin: auto
    input
      border: none
      height: 75%
      margin: auto
      margin-left: 30px
      width: 80%
      font-size: 1.2em
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
