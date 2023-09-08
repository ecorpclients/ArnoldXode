OPENMENU=()=>{

    const MENUDIV=document.querySelector('.MenuDiv');

    MENUDIV.style.display='block';

    const MENUCLOSEICON=document.querySelector('.MenuCloseIcon')

    MENUCLOSEICON.style.display='block';

    const MENUOPENICON=document.querySelector('.MenuIcon')

    MENUOPENICON.style.display='none';

}

CLOSEMENU=()=>{

    const MENUDIV=document.querySelector('.MenuDiv');

    MENUDIV.style.display='none';

    const MENUCLOSEICON=document.querySelector('.MenuCloseIcon')

    MENUCLOSEICON.style.display='none';

    const MENUOPENICON=document.querySelector('.MenuIcon')

    MENUOPENICON.style.display='block';

}

//Scroll the home div to close the men
MENUSCROLLINGCLOSE=()=>{

    const MENUDIV=document.querySelector('.MenuDiv');

    const HOMEDIV=document.querySelector('.HomePageDiv')

    HOMEDIV.addEventListener('scroll',()=>{

        CLOSEMENU()

    })
    
}

// Function to toggle the header visibility based on scroll direction
toggleHeaderOnScroll=()=>{

    let lastScrollTop = 0; // Store the previous scroll position

    const HOMEHEADER = document.querySelector('.HeaderPage');
    const HOMEDIV = document.querySelector('.HomePageDiv');

    HOMEDIV.addEventListener('scroll', () => {

        const scrollTop = HOMEDIV.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            HOMEHEADER.style.display='none';
        } else {
            // Scrolling up
            HOMEHEADER.style.display='inline-flex';
        }

        lastScrollTop = scrollTop;

    });
    
}

