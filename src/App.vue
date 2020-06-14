<template>
<div class="ui-dashboard">
  <!-- end /.ui-dashboard-->
    
    <SideBar />
    <NavBar />

    <div class="ui-main">
      <div class="container-fluid " >
          <div class="row">
              <router-view />
          </div>
      </div>
    </div>

    <FootBar />

  <!-- end /.ui-dashboard-->
</div>
</template>
<script>
import SideBar from './components/layout/SideBar'
import NavBar from './components/layout/NavBar'
import FootBar from './components/layout/FootBar'

export default {
  name: 'App',
  components:{
        SideBar,
        NavBar,
        FootBar
    }
}
</script>

