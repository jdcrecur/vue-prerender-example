<template>
    <div>
        <h2>Lazy loaded and not pre-rendered & with ajax content</h2>
        <ul>
            <li v-for="item in ajaxContent">
                {{ item.name }}
            </li>
        </ul>
        <msg msg="hello world"></msg>
    </div>
</template>

<script>
  import axios from 'axios'
  import Msg from './Msg.vue'
  export default {
    name: 'About',
    mounted () {
      axios.get('http://vue.test/otherdata.php').then((response) => {
          this.ajaxContent = response.data.items
      }).catch((error)=>{
        console.log(error)
      })
    },
    data () {
      return {
        ajaxContent: []
      }
    },
    components: {
      msg: Msg
    }
  }
</script>