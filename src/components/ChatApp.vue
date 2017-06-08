<template lang="pug">
  div#ChatApp 
    div.scrollContainer
      div.simplyfor(v-for="message in reversedMessages")
        div.userMessageBlock.clearfix( v-if="message.type=='user'" )
          div.userMessage {{ message.dialogue }}
        div.BotMessageBlock.clearfix(v-else)
          div.BotMessage 
            span.phrase {{ message.dialogue }}
            span.movie {{ message.movie }}
     
      

</template>

<script>
export default {
  name: 'ChatApp',
  data() {
    return {};
  },
  props: [
    'messages',
  ],
  computed: {
    reversedMessages() {
      return this.messages.slice().reverse();
    },
  },
};
</script>

<style scoped lang="sass">
#ChatApp
  grid-row: 1
  grid-column: 2
  width: 100%
  max-height: calc(100vh - 60px)
  height: 100%
  overflow: hidden
  .scrollContainer
    height: 100%
    width: 100%
    overflow: auto
    padding-right: 15px
    display: flex
    flex-direction: column-reverse
    padding-bottom: 20px
    transform: translateY(-20px)
  .userMessageBlock
    width: 100%
    color: #3c3c3c
    display: block
    height: 
    margin-bottom: 5px
    .userMessage
      box-shadow: 3px 3px 15px rgba(0,0,0,0.3)
      margin: 20px
      float: right 
      max-width: 80%
      background: white
      display: inline-block
      padding: 20px
      margin-right: 0
  .BotMessageBlock
    width: 100%
    display: block
    float: left
    margin-bottom: 5px
    .BotMessage
      box-shadow: 3px 3px 15px rgba(0,0,0,0.3)
      float: left
      max-width: 80%
      background: rgba(10,102,223,1);
      background: linear-gradient(to right, #A67DFA 0%, #7f7dfa 100%)
      padding: 20px
      color: white
      .movie
        display: block
        font-size: .8em
        text-align: right
        padding-left: 10px

.clearfix:after 
  content: ""
  display: table
  clear: both

@media (max-width: 750px) 
  #ChatApp
    grid-column: 1
    .userMessageBlock
      .userMessage
        margin-right: 10px
    .BotMessageBlock
      .BotMessage
        margin-left: 10px

</style>
