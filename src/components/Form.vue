<template>
    <div class="container-fluid  col-11 col-md-6 col-lg-5 col-xl-4  ">

        <div class="ui-box" style="margin-top:80px !important; " >

            
            <div class="ui-box-header">
                <h1 class="text-center"><b>Form</b></h1>  <p>My form</p>
            </div>
         

            <div class="ui-box-content" >
  
                <form class="ui-form" method="POST" action="/login">

                    <div class="ui-form-group">
                        <label for="username">Text</label>
                        <input class=""  placeholder="Your Text Here!" type="text" name="mytext" value=""/>
                        <p class="error-msg" >mytext error!</p>   
                    </div>

                    <div class="ui-form-group">
                        <label for="pass">Pass</label>
                       <select class="ui-sidebar">
                            <option value="" >Select one Option</option>
                            <option value="1" >Option 1</option>
                            <option value="2" >Option 1</option>
                            <option value="3" >Option 1</option>
                       </select>
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
    name: 'Form',
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