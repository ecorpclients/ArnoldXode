HOMEPAGEDATADISPLAY=()=>{

  //SHUFFLE THE DATA
  const shuffleArray = (array) => {

        
    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1)); // Changed (i + 2) to (i + 1)
        [array[i], array[j]] = [array[j], array[i]];
        
    }

};
    const HOMEDIV=document.querySelector('.HomePageDiv')

    HOMEDIV.innerHTML=``;

    const loadingIcon = document.createElement('img');

    loadingIcon.src = '../ICONS/loading.png';

    loadingIcon.classList.add('Loading-Icon');

    HOMEDIV.appendChild(loadingIcon);

    fetch(ARNOLDXOIDE)
    .then(res=>res.json())
    .then(data=>{

        data.reverse();

        shuffleArray(data);

        data.forEach(element => {

            HOMEDIV.innerHTML=``;

            //Create DIV FOR THE MAIN PRODUCT DISPLAY

            const MAINPRODUCT=document.createElement('div')
            MAINPRODUCT.classList.add('MAINPRODUCT')
            MAINPRODUCT.innerHTML=
            `

            <img src='${element.BeatsPackageImage}' class='MainImage'/>

            <div class='MainDownload' onclick='DownloadKit()'>

                <h1 class='MainTitle'>Get Early Access</h1>

            </div>

            `
            DownloadKit=()=>{
                if (element.Subscription==='') {
                    DIV.innerHTML=`

                    <div class='HomePageDiv1'>

                        <img src='${element.BeatsPackageImage}' class='MainImage'/>

                        <div class='BeatDescription'>
                            
                            <div class='beatsTitle'>

                            <h1 class='BeatsName'>${element.BeatsPackages}</h1>
                            
                            </div>

                            <div class='beatsTitle'>

                            <h1 class='BeatsName'>Made By: ${element.MadeBy}</h1>
                            
                            </div>

                            <div class='beatsTitle'>

                            <h1 class='BeatsName'>Release Date : ${element.year}</h1>
                            
                            </div>
                        
                        </div>

                        <div class='MainDownload1' onclick='Download()'>

                            <h1 class='MainTitle'>Download Kit</h1>
        
                        </div>
                    
                    </div>
    
                    <div class='HeaderPage'>
                    
                        <img src='../ICONS/back.png' class='BackIcon' onclick='MOBILEHOMEPAGE()' />

                        <h1 class='AppName'>Arnold Xode</h1>

                    </div>

                    `
                } else {
                    alert('Buy It')
                }

                Download=()=>{

                    open(element.BeatsPackageDownload)

                }
            }

            //APPEND THE DATA
          
            HOMEDIV.append(MAINPRODUCT);
            
        });
    })
}