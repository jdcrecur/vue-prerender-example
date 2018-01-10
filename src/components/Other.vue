<template>
	<div>
		<h2>Other data not pre-rendered</h2>
		<ul>
			<li v-for="item in ajaxContent">
				{{ item.name }}
			</li>
		</ul>
	</div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'About',
    mounted () {
      axios.get('http://vue.test/otherdata.php').then((response) => {
        setTimeout(() => {
          this.ajaxContent = response.data.items
        }, 1000)
      }).catch((error) => {
        console.log(error)
      })
    },
    data () {
      return {
        ajaxContent: []
      }
    }
  }
</script>