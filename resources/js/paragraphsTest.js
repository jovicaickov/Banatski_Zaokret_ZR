/* test funkcija, radi
$(document).ready(function () {
    $(".topic-paragraph").each(function( index ) {
        $( this ).addClass("hide");

        console.log( index + ": " + $( this ).hasClass("hide"));
      });
});
 */

function toggleParagraph(elementIndex) {
    $(".topic-paragraph").each(function ( index ) {
        if(elementIndex == index) {
            if( !($(this).hasClass("hide")) && ($(this).hasClass("show")) ) //if shown, hide
            {
                $(this).addClass("hide");
                $(this).removeClass("show"); 

            }else if( !($(this).hasClass("show")) && ($(this).hasClass("hide")) ) // if hidden, show
            {
                $(this).addClass("show");
                $(this).removeClass("hide");
            }
        }
    })
    $(".btn-toggle-paragraph").each(function ( index ) {
         
       if(elementIndex == index) {
            if( $(this).text() == "Прикажи више") {
                $(this).text("Прикажи мање");
                console.log("Sakriven")
            }else if ( $(this).text() == "Прикажи мање") {
                $(this).text("Прикажи више");
                console.log("Otkriven");
            }
        }
    })
    $(".btn-toggle-paragraph-eng").each(function ( index ) {
        if(elementIndex == index) {
            if( $(this).text() == "Show More") {
                $(this).text("Show Less");
                console.log("Sakriven")
            }else if ( $(this).text() == "Show Less") {
                $(this).text("Show More");
                console.log("Otkriven");
            }
        }
    })
}