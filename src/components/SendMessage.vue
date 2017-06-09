<template lang="pug">
  div.wrapper
    svg(xmlns="http://www.w3.org/2000/svg" version="1.1")
      defs
        filter(id="goo")
          feGaussianBlur(in="SourceGraphic" stdDeviation="10" result="blur")
          feColorMatrix(in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo")
          feBlend(in="SourceGraphic" in2="goo")
    div.loadingAnimation(v-show="showAnim")
      div.platform
      div.ball.ball1
      div.ball.ball2
      div.ball.ball3
    div#SendMessage(v-bind:style='{background: inputFocused ? "#5b5384" : "#423c62"}')     
      form(v-on:submit.prevent="submitDialogue")
        input(type="text" placeholder="your message here." v-model="dialogue" v-on:focus="focus" v-on:blur="unfocus")
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
  props: [
    'showAnim',
  ],
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
.wrapper
  grid-row: 2
  grid-column: 2
  height: 100%
#SendMessage 
  z-index: 0
  background: #423C62
  width: 100%
  height: 100%
  display: flex
  position: relative
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
  .wrapper
    grid-column: 1
    
.loadingAnimation 
  background:yellow
  filter: url('#goo')
  position: absolute
  padding-top: 100px
  margin-top: -100px
  z-index: 0
  .ball
    width: 20px
    height: 20px
    border-radius: 50%
    background: #5b5384
    position: relative
  .platform 
    border-radius: 0%
    width: 200px
    background: #5b5384
    position: absolute
    height: 20px
  .ball1 
      left: 40px
      animation: move ease-in-out .6s infinite .0s alternate 
  .ball2 
      left: 80px
      margin-top: -20px
      animation: move ease-in-out .6s infinite .2s alternate
  .ball3 
      left: 120px
      margin-top: -20px
      animation: move ease-in-out .6s infinite .4s alternate
svg
  position: fixed
  z-index: -50
  @keyframes move 
    0%
      transform: translateY(0px)
    100% 
      transform: translateY(-40px)

</style>
