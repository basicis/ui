<template>
        
<div class="ui-page-container">

    <div class="ui-page ui-100p100">
        <div class="ui-page-body"  >
            <h1>{{msg}}</h1>
            <br>
            <a v-bind:href="btn.link" class="ui-btn-primary2">{{btn.text}}</a>
        </div>

    </div>
</div>    
</template>
<script>
export default {
    name: 'NotFound',
    props:{
        btn:{
            type: Object,
            default: {
                text: 'Back to Home',
                link:'/',
            }
        },
        msg: {
            type: Object,
            default: 'Page not Found!'
        }
    }
}
</script>