<template>
    <div class="container-fluid  col-11 col-md-6 col-lg-5 col-xl-4  ">

        <div class="ui-box" style="margin-top:80px !important; " >

            
            <div class="ui-box-header">
                <img src="/assets/img/default/md-logo2.png">
                <h1 class="text-center"><b>Basicis UI</b></h1>  <p>Login</p>
            </div>
         

            <div class="ui-box-content" >
 
                <form class="ui-form" method="POST" action="/login">

                    <div class="ui-form-group">
                        <label for="username">Username</label>
                        <input class=""  placeholder="@username" type="text" name="username" value=""/>
                        <p class="error-msg" >Username error!</p>   
                    </div>

                    <div class="ui-form-group">
                        <label for="pass">Pass</label>
                        <input class="" placeholder="******"  type="password" name="pass" />
                        <p v-if="errors.pass" class="error-msg" >Password error!</p>
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