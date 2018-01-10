<template>
    <div>
        <h2>About Page</h2>
        <msg :msg="ajaxContent"></msg>
    </div>
</template>

<script>
  import axios from 'axios'
  import Msg from './Msg.vue'

  let name = 'Tim'

  export default {
    name: 'About',
    created () {
      axios.get('http://vue.test/aboutcontent.php').then((response) => {
        this.ajaxContent = response.data.name
      }).catch((error)=>{
        console.log(error)
      })
    },
    data () {
      return {
        ajaxContent: name
      }
    },
    components: {
      Msg: Msg
    }
  }
</script>