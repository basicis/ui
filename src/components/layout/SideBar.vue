<template>
<div id="sidebar" class="ui-sidebar">

    <div class="ui-brand" >
        <img :src="logo"/> 
        <h1>{{description}}</h1>
    </div>

    <ul class="menu">

        <li v-for="(item, key) in menu" v-bind:key="key" class="item" 
        v-bind:class="[item.hasOwnProperty('list') ? 'ui-dropdown' : '',item.active ? 'active' : '']" 
        @click.prevent="setActive($event)"
        >

            <template  v-if="item.hasOwnProperty('list') === false" >
                <fontawesome v-bind:icon="item.icon"/>
                <a v-bind:href="item.link">{{item.text}}</a>
            </template>

             <template v-else >
                <div  class="ui-dropdown-header">
                    <fontawesome v-bind:icon="item.icon"/>
                    <a v-bind:href="'#ui-dropdown-menu-'+item.icon">{{item.text}}</a>
                </div>

                <ul v-bind:id="'ui-dropdown-menu-'+item.icon" class="ui-dropdown-menu" >
                    <li v-for="(subitem, skey) in item.list"  v-bind:key="skey" class="ui-dropdown-item">
                        <fontawesome v-bind:icon="subitem.icon"/>
                        <a href="#">{{subitem.text}}</a>
                    </li> 
                </ul>

             </template>

        </li>

    </ul>    

</div>
</template>
<script>
export default {
    name:'SideBar',
    props:{
        description: {
            type: String,
            default: 'Basicis UI',
        },
        logo:{
            type: String,
            default: require('./../../assets/logo.svg')
        },
        menu: {
            type: Array,
            default: []
        }
    },
    methods: {
        setActive(event){
            event.path[2].classList.add('active')
            console.log(document.querySelector('ui-sidebar'))
        }
    }
}
</script>