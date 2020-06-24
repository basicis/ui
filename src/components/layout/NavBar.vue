<template>
<div class="ui-navbar">

    <div class="ui-navbar-header">

        <!-- navbar Left -->
        <div class="ui-navbar-header-left">
            
            <ul>
                <li @click="toggleSideBar" class="ui-sidebar-toggle" > <fontawesome  icon="bars" /> </li>
                <li v-for="(item, key) in menuLeft" v-bind:key="key" class="item" > <a v-bind:href="item.link">{{item.text}}</a></li>
            </ul>

        </div>


         <!-- navbar Right -->
        <div class="ui-navbar-header-right">

            <ul>
                <li class=""> <i class="far fa-moon"></i> </li>
                <li class="item" > 
                    <fontawesome icon="bell"/> 
                    <span class="ui-tag-error">5</span>
                </li>

                <li  class="item" >
                    <fontawesome icon="list-ul"/>
                    <span class="ui-tag-warning">5</span>
                </li>

                <li  class="item" >
                    <fontawesome icon="envelope"/>
                    <span class="ui-tag-info">70</span>
                </li>

                <li  class="" > <img src="img/avatar.png" > </li>
                <li  class="" > <fontawesome icon="ellipsis-h"/> </li>
            </ul>

        </div>

    </div>


     <!-- navbar Footer -->
    <div class="ui-navbar-footer">
       <a class="destak" href="#"> Home</a> / <p>Dashboard </p>
    </div>
    
</div>
</template>
<script>
import $ from 'jquery' 
export default {
    name:'NavBar',
    props:{
        description: {
            type: String,
            default: 'Basicis UI'
        },
        menuLeft:{
            type: Array,
            default: []
        },
         menuRight:{
            type: Array,
            default: []
        }
    },
    methods:{
        toggleSideBar(){
            this.width = 75
            this.$emit('toggleSideBar')
        },
    }
}
</script>