<template>
    
<div class="ui-page-container">

<div class="ui-page">

    <div class="ui-page-header" >

            <ul class="menu">
                <li class="active"> <a href="/" >Twig</a> </li>
                <li> <a href="/2" >Vue.Js</a> </li>
                <li> <a href="#" target="_blank" rel="noreferrer" >UI</a> </li>
            </ul> 

    </div>


            
    <div class="ui-page-body"  >


         <div class="row">

            <div class="ui-page-body-left">
                
                <h1 >{{description}}</h1>
                <p>Welcome with Twig Template Engine</p>


                <div class="btn-group">
                    <a class="ui-btn-primary" href="#getstarted">Get Started</a>
                    <a class="ui-btn-primary2"  href="#docs">Documentation</a>
                </div>

            </div>

            <div class="ui-page-body-right">
               <img  src="img/development2.svg" /> 
            </div>

         </div>  
         


         <div class="ui-page-section" id="getstarted">
            
            <h2>Get Started</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                Integer scelerisque, nisi in tristique rutrum, augue elit congue nulla, non gravida.
            </p>    
                
            <br>
            
            <div class="ui-code">    
                <h4 class="title">Install via<a href="#" >Composer</a> <i class="fas fa-link"></i></h4>
                <p class="content" title="Click to Copy!"  >composer create-project -s dev messiasdias/php-framework  project_name </p>
            </div>    

            <div class="ui-code">
                <h4 class="title">Clone the repository with <a href="#">Git</a> <i class="fas fa-link"></i> </h4>
                <p class="content" title="Click to Copy!" >git clone https://github.com/messiasdias/php-framework.git  project_name</p>
            </div>     
  
         </div>




        <div class="ui-page-section" id="docs">
            
            <h2>Documentation</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                Integer scelerisque, nisi in tristique rutrum, augue elit congue nulla, non gravida.
            </p>   

             <a class="ui-btn-primary" target="_blank" href=" https://github.com/messiasdias/php-framework/tree/master/docs" >View Documentation <i class="fab fa-github"></i></a>  
        </div> 
        
        

        <div class="ui-page-section" id="contrib">
            
            <h2>Contributors</h2>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                Integer scelerisque, nisi in tristique rutrum, augue elit congue nulla, non gravida.
            </p>  
            
            <div class="row" id="contributors">

                <div class="ui-profile-box">
                    <img class="avatar" src="img/avatar-m1.jpg" alt="Messias Dias - Foto">
                    <h1 class="name">Messias Dias</h1>
                    <h2 class="login">@messiasdias</h2>
                    <p class="contribs">Dev | Contributions <span class="ui-tag-info">50</span></p>
                </div>


                <div class="ui-profile-box active">
                    <img class="avatar" src="img/avatar-m2.png" alt="Messias Dias - Foto">
                    <h1 class="name">Mr Jean D.</h1>
                    <h2 class="login">@mjeadd</h2>
                    <p class="contribs">Dev | Contributions <span class="ui-tag-info">2</span></p>
                </div>

                <div class="ui-profile-box">
                    <img class="avatar" src="img/avatar-f2.png" alt="Messias Dias - Foto">
                    <h1 class="name">Ane Marie</h1>
                    <h2 class="login">@anemarie</h2>
                    <p class="contribs">Dev | Contributions <span class="ui-tag-info">12</span></p>
                </div>


            </div>



            <h4>learn more how to contribute to the project...</h4>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                Integer scelerisque, nisi in tristique rutrum, augue elit congue nulla, non gravida.
            </p>  
           

        </div>

    </div>


    <div class="ui-page-footer"  >
        <p> I love it all very much <b><i class="far fa-smile-wink"></i></b></p>
        <p>|<a href="https://github.com/messiasdias/" target="_blank" >@messiasdias</a></p>
    </div>

</div>



</div>
</template>
<script>
export default {
    name: 'Home',
     data: function(){
        return {
            description: 'Basicis UI'
        }
    }
}
</script>