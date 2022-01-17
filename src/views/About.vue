<template>
<div>
  <p>این صفحه بزودی تکمیل خواهد شد... :)</p>
</div>
</template>


<script>
import {useStore} from 'vuex'
export default {
  name : "AboutUs",
  
  setup(){
    const store = useStore();
    const data = store.state.user;
    
    return{
      data,
    }
    
  }
}
</script>

<style scoped>
p {
  text-align: center;
}
</style>