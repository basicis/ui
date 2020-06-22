<template>
<div class="ui-dashboard">
  <!-- end /.ui-dashboard-->
    <SideBar />
    <NavBar />

    <div class="ui-main">
      <div class="container-fluid " >
          <div class="row">
              <component v-bind:is="page" ></component>
          </div>
      </div>
    </div>
    <FootBar />
  <!-- end /.ui-dashboard-->
</div>
</template>
<script>
import SideBar from './SideBar'
import NavBar from './NavBar'
import FootBar from './FootBar'
import Dashboard from './../Dashboard'
import Login from './../Login'

export default {
    name: 'DashboardLayout',
     props:{
       page: String
     },
     components:{
        Login,
        Dashboard,
        SideBar,
        NavBar,
        FootBar
     }
}
</script>