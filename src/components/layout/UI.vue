<template>
<div class="ui-dashboard">
  <!-- end /.ui-dashboard-->
    
    <SideBar 
      v-if="sidebarShow" 
      v-bind:description="appDescription"
      v-bind:menu="sideBarMenu" 
      v-bind:class="[sidebarShow ? 'col-lg-3': '' ]"
     />

    <NavBar  
      @toggleSideBar="handleToggleSideBar" 
      v-bind:menuLeft="navBarMenuLeft"  
      v-bind:menuRight="navBarMenuRight" 
      v-bind:class="[sidebarShow ? 'col-lg-9 offset-lg-3': '' ]" 
    />

    <div class="ui-main" v-bind:class="[sidebarShow ? 'col-lg-9 offset-lg-3': '' ]"  >
      <div class="container-fluid " >
          <div class="row">
              <component v-bind:is="page" ></component>
          </div>
      </div>
    </div>

    <FootBar 
      v-bind:description="appDescription" 
      v-bind:class="[sidebarShow ? 'col-lg-12': '' ]" 
     />
  <!-- end /.ui-dashboard-->
</div>
</template>
<script>
import $ from 'jquery'
import SideBar from './SideBar'
import NavBar from './NavBar'
import FootBar from './FootBar'
import Dashboard from './../Dashboard'
import Login from './../Login'
import Form from './../Form'

export default {
    name: 'UI',
     props:{
       page: String
     },
     components:{
        SideBar,
        NavBar,
        FootBar,
        Dashboard,
        Login,
        Form,
     },
     data : function (){
       return {
        appDescription: 'Basicis UI',
        sidebarShow: false,

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
  },

  methods:{
    handleToggleSideBar(){
      this.sidebarShow = !this.sidebarShow
      if(this.sidebarShow){  
          //if( $(document).width() >  992  ) {
              //$(".ui-dashboard-right").css('width', '75%' )
              $(".ui-main").addClass('col-lg-9')
              $(".ui-main").addClass('offset-lg-3')
              $(".ui-navbar").addClass('col-lg-9')
              $(".ui-navbar").addClass('offset-lg-3')
              $(".ui-sidebar").addClass('col-lg-3')
         // }
      }else{
          //$(".ui-dashboard-right").css('width', '100%' )
          $(".ui-main").addClass('col-lg-9')
          $(".ui-main").addClass('offset-lg-3')
          $(".ui-navbar").addClass('col-lg-9')
          $(".ui-navbar").addClass('offset-lg-3')
          $(".ui-sidebar").removeClass('col-lg-3')
      }
    }
  }


}
</script>