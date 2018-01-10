<template>
	<div>
		<h2>About Page</h2>
		<div>Static content: {{staticVar}}</div>
		<div>Ajax content pre-rendered:
			<msg :msg="ajaxContent"></msg>
		</div>
	</div>
</template>

<script>
  import axios from 'axios'
  import Msg from './Msg.vue'
  let name = 'time'
  export default {
    name: 'About',
    created () {
      axios.get('http://vue.test/aboutcontent.php').then((response) => {
        this.ajaxContent = response.data.name
      }).catch((error) => {
        console.log(error)
      })
    },
    data () {
      return {
        ajaxContent: name,
        staticVar: 'Static variable string'
      }
    },
    components: {
      Msg: Msg
    }
  }
</script>