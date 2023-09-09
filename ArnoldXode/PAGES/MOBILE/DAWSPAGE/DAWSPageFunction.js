DAWSPAGEFUNCTION = () => {

    const BEATSDIV = document.querySelector('#DAWSDiv');
  
    // SHUFFLE THE DATA
  
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };
  
    BEATSDIV.innerHTML = '';
  
    const loadingIcon = document.createElement('img');
    loadingIcon.src = '../ICONS/loading.png';
    loadingIcon.classList.add('Loading-Icon');
    BEATSDIV.appendChild(loadingIcon);
  
    fetch(ARNOLDXOIDE) // Replace 'YOUR_API_ENDPOINT_HERE' with the actual API endpoint
      .then((res) => res.json())
      .then((data) => {
        data.reverse();
        shuffleArray(data);
        BEATSDIV.innerHTML = ''; // Clear the container before appending new data
  
        data.forEach((element) => {
          // DIV to hold beats
          const BEATSDIVHOLDER = document.createElement('div');
          BEATSDIVHOLDER.classList.add('BEATSDIVHOLDER');
  
          const BEATSDIVHOLDERIMAGE = document.createElement('img');
          BEATSDIVHOLDERIMAGE.classList.add('BEATSDIVHOLDERIMAGE');
          BEATSDIVHOLDERIMAGE.src = element.BeatsPackageImage;

          //CLICK ON THE BEATS
          BEATSDIVHOLDER.addEventListener('click',()=>{

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
                
                    <img src='../ICONS/back.png' class='BackIcon' onclick='DAWSPAGE()' />

                    <h1 class='AppName'>Arnold Xode</h1>

                </div>

                `
            } else {
                alert('Buy It')
            }

            Download=()=>{

                open(element.BeatsPackageDownload)

            }

          })
  
          // APPEND THE DATA
          BEATSDIVHOLDER.appendChild(BEATSDIVHOLDERIMAGE);
          BEATSDIV.appendChild(BEATSDIVHOLDER);
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  