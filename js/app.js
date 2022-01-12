// $(document).ready(function (){
    let screenHeight=$(window).height();

    $(window).scroll(function (){
        let scrollHeight=$(this).scrollTop();
        if(scrollHeight>=screenHeight-90){
            $(".site-nav").addClass("site-nav-scroll")
        }else{
            $(".site-nav").removeClass("site-nav-scroll");
            setActive("home")
        }
    });
    function setActive(current){
        $(".nav-link").removeClass("active");
        $(`.nav-link[href="#${current}"]`).addClass("active")
    };

   function navScroll(){
       let currentSection=$("section[id]");
       currentSection.waypoint(function (direction){
           if(direction == "down"){
               let currentSectionId=$(this.element).attr('id');
               setActive(currentSectionId);
           }
       },{offsets:'150px'});
       currentSection.waypoint(function (direction){
           if(direction == "up"){
               let currentSectionId=$(this.element).attr('id');
               setActive(currentSectionId);
           }
       },{offsets:'150px'})
   }
   navScroll();
$(window).on("load",function () {
    $('.loader-screen').fadeOut(500,function () {
        $(this).remove();
    });
});
// })