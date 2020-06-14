<template>
    <div class="ui-100p100 " >
    <div class="container-fluid  col-md-6 col-lg-4 col-11 ">


        <div class="ui-box">

            
            <div class="ui-box-header">
                <img src="/assets/img/default/md-logo2.png">
                <h1 class="text-center"><b>{{description}}</b></h1>  <p>Login</p>
            </div>
         

            <div class="ui-box-content" >
            

                <div v-if="log.msg" :class="'alert alert-'.log.class == 'error' ? 'danger' : log.class">
                    <p>{{log.msg}}</p>
                </div>
  
                <form class="ui-form" method="POST" action="/login">

                    <div class="ui-form-group">
                        <label for="username">Username</label>
                        <input :class="errors.username ? errors.username.class : ''"  placeholder="@username" type="text" name="username" value=""/>
                        <p v-if="errors.username" class="error-msg" >{{errors.username.msg}}</p>   
                    </div>

                    <div class="ui-form-group">
                        <label for="pass">Pass</label>
                        <input :class="errors.pass.class ? errors.pass.class : ''" placeholder="******"  type="password" name="pass" />
                        <p v-if="errors.pass" class="error-msg" >{{errors.pass.msg }}</p>
                    </div>


                    <div class="form-control">
                        <p><input type="checkbox" id="remember"  /> <label for="remember">Remember you?</label> </p>
                    </div>

                    <div class="ui-form-btn-group">
                    <input class="" type="submit" value="Sign in">
                    <input class="" type="reset" value="Cancel">
                    </div>

                    
                    <div class="ui-form-btn-group">
                        <a href="#">
                            <small class="destak">Forgot you password</small>
                        </a>    
                    </div>

                </form>
               

            </div>


        
        </div>



    </div>    

</div>

</template>
<script>
export default {
    name: 'Login',
    data: function(){
        return{
            description: "Basicis UI",
            log: {
                msg: ""
            },
            errors: {},

        }
    }
}
</script>