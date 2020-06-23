<template>
<div class="ui-dashboard">
  <!-- end /.ui-dashboard-->
    <SideBar v-bind:description="appDescription" v-bind:menu="sideBarMenu" />
    <NavBar  v-bind:menuLeft="navBarMenuLeft"  v-bind:menuRight="navBarMenuRight" />
    <div class="ui-main">
      <div class="container-fluid " >
          <div class="row">
              <component v-bind:is="page" ></component>
          </div>
      </div>
    </div>
    <FootBar v-bind:description="appDescription"  />
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
     },
     data : function (){
       return {
        appDescription: 'Basicis UI',

        navBarMenuLeft: [
          {
            text: 'Dashboard',
            link: '/dashboard',
            active: true
          },

          {
            text: 'Users',
            link: '#',
            active: false
          },

          {
            text: 'Settings',
            link: '#',
            active: false
          },
        ],

        navBarMenuRight: [

        ],

        sideBarMenu: [
                {
                    text: 'Home',
                    icon: 'home',
                    link: '/',
                    active: false
                },

                {
                    text: 'Dashboard',
                    icon: 'tachometer-alt',
                    link: '/dashboard',
                    active: true
                },

                {
                    text: 'Users',
                    icon: 'users',
                    link: '#',
                    active: false,
                    list: [
                        {
                            text: 'New',
                            icon: 'plus',
                            link: '#',
                        },
                        {
                            text: 'List',
                            icon: 'list',
                            link: '#',
                        }
                    ]
                },

                {
                    text: 'Settings',
                    icon: 'cogs',
                    link: '#',
                    active: false,
                    list: [
                        {
                            text: 'New',
                            icon: 'plus'
                        },
                        {
                            text: 'List',
                            icon: 'list'
                        }
                    ]
                },
            ]
       }
     }
}
</script>