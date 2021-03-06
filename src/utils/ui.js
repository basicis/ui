import $ from 'jquery'

const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
}

const sidebar = $('.ui-dashboard-left');


let screenWidthXLarge = function(){
    return ( $(document).width() >=  breakpoints.xl )
}

let screenWidthLarge = function(){
    return ( $(document).width() >=  breakpoints.lg ) && ( $(document).width() <  breakpoints.xl );
}

let screenWidthMedium = function(){
    return ( $(document).width() >=  breakpoints.md ) && ( $(document).width() <  breakpoints.lg );
}

let screenWidthSmall = function(){
    return ( $(document).width() >=  breakpoints.sm ) && ( $(document).width() <  breakpoints.md );
}

let screenWidthXSmall = function(){
    return ( $(document).width() >  breakpoints.xs ) && ( $(document).width() < breakpoints.sm );
}


let normalizeLayout = function(){

    if( sidebar.is(":visible") ){  

        if( screenWidthLarge() | screenWidthXLarge()  ) {
            //$(".ui-dashboard-right").css('width', '75%' )
            $(".ui-main").addClass('col-lg-9')
            $(".ui-main").addClass('offset-lg-3')
            $(".ui-navbar").addClass('col-lg-9')
            $(".ui-navbar").addClass('offset-lg-3')
            sidebar.addClass('col-lg-3')
        }else{
            $(".ui-dashboard-right").css('width', '100%' )
        }
        
    }else{
        //$(".ui-dashboard-right").css('width', '100%' )
        $(".ui-main").addClass('col-lg-9')
        $(".ui-main").addClass('offset-lg-3')
        $(".ui-navbar").addClass('col-lg-9')
        $(".ui-navbar").addClass('offset-lg-3')
        sidebar.removeClass('col-lg-3')
    }

}


let setTheme = function(theme = 'default'){

    if( theme == 'default' ){
        $('.ui-dashboard').removeClass('dark')
    }

    if( theme == 'dark'  ){
        $('.ui-dashboard').addClass('dark')
    }
    localStorage.setItem('theme', theme)
}


let copyClipboard = function(element){
    let textarea = document.createElement('textarea')
    textarea.textContent =  element.html()
    document.body.appendChild(textarea)
    let selection = document.getSelection()
    let range = document.createRange()
    range.selectNode(textarea)
    selection.removeAllRanges()
    selection.addRange(range)
    let copySucess = document.execCommand('copy')
    selection.removeAllRanges()
    document.body.removeChild(textarea)

    if(copySucess)  { 
        console.log('Copy Success: ', element.html())
        element.attr('data-before', element.html() )
    }
}



let jqueryReady  = function() {

    //Setting Theme Color
    setTheme(localStorage.getItem('theme'))    

    $('.ui-sidebar>.menu>.item').click(function(event){
       

        let toggleIfLG = function(){
            if( $(document).width() < breakpoints.lg ) 
            {
                sidebar.toggle("fast")
            }
        }

        if( !$(this).hasClass('ui-dropdown') )
        {
            toggleIfLG()
        }
        else 
        {
            event.preventDefault()

            let dropdownMenu = $($(event.target).parent().parent().children()[1])
            let id = '#'+dropdownMenu[0].getAttribute('id')
            let href = event.target.getAttribute('href')
    
            if( dropdownMenu.hasClass('ui-dropdown-menu') && ( id === href ) ){
                $('.ui-dropdown-menu'+id).toggle("fast");
            }else{
                toggleIfLG()
            } 

        }

        normalizeLayout()
    }) 



    $('.ui-dropdown-item').click(function(){
        $(this).parent().toggle("fast")
        normalizeLayout()
    })


    $('.ui-sidebar-toggle').click(function(){
        //.col-lg-9, .offset-lg-3
        $('.ui-sidebar').toggle('fast')
        console.log($('#sidebar').is(':visible'))

        if( !$('.ui-sidebar').is(':visible')) {
            $('.ui-navbar').removeClass('col-lg-9')
            $('.ui-navbar').removeClass('offset-lg-3')
            $('.ui-main').removeClass('col-lg-9')
            $('.ui-main').removeClass('offset-lg-3')
        }else{
            $('.ui-navbar').addClass('col-lg-9')
            $('.ui-navbar').addClass('offset-lg-3')
            $('.ui-main').addClass('col-lg-9')
            $('.ui-main').addClass('offset-lg-3')
        }
        //normalizeLayout()
    })


    $('.ui-dark-toggle').click(function(){
        if($('.ui-dashboard').hasClass('dark') ){
            setTheme('default')
        }else{
            setTheme('dark')
        }
    })


    $('.ui-code>.content').click(function(event){
        event.preventDefault()
        copyClipboard( $(event.target) )
    })

    $('.ui-sidebar>.menu.item').click(function(event){
        console.log('Click ui-sidebar.menu.item: ', event)
    })

    $('.ui-main').click(function(event){
        $('.ui-sidebar').hide()
    })


    $(this).mouseup(e => {
       if (!sidebar.is(e.target) && sidebar.has(e.target).length === 0) 
       { 
            sidebar.hide()
            normalizeLayout()
       }
      
    })
    

    $(this).scroll(function(){ 
        normalizeLayout() 
    })


    $(this).resize(function(){ 
        normalizeLayout() 
    })
    

}

$(document).ready(jqueryReady);

export default {jqueryReady:jqueryReady, jquery:$}