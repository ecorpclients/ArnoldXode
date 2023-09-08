MOBILEHOMEPAGE=()=>{
    DIV.innerHTML=`
    
        <div class='HomePageDiv'></div>

        <div class='MenuDiv'>${MENUDATA}</div>
    
        <div class='HeaderPage'>${HomeHeaderPage}</div>

    `;
    //DISPLAY DATA ON WEB PAGE
    HOMEPAGEDATADISPLAY()

    // Call the toggleHeaderOnScroll function to enable header visibility toggling
    toggleHeaderOnScroll();

    // Call the MENUSCROLLINGCLOSE function to close the menu on scroll
    MENUSCROLLINGCLOSE();

}

