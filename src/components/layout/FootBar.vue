<template>
<div class="ui-footer">

    <div class="ui-footer-left" >
       <b>&copy;</b> 
       <p> Desenvolvido por </p> 
       <a class="destak"  target="_black" href="https://messiadias.cf/">Messias Dias</a> 
    </div>

    <div class="ui-footer-right">
        <a class="destak" target="_black" href="https://github.com/messiasdias/php-framework/tree/master/docs">{{description}}</a> | <p>UI Admin Panel v1.0 </p>
    </div>
</div>
</template>
<script>
export default {
    name: "FootBar",
    props:{
        description: {
            type: String,
            default: 'Basicis UI'
        }
    },
}
</script>