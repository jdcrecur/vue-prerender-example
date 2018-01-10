<template>
    <span>This is the message: {{msg}}</span>
</template>
<script>
  export default {
    name: 'Msg',
    props: [
      'msg'
    ]
  }
</script>