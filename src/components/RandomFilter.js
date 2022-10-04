import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


function RandomFilter() {
    
    // 1. Find a way to confirm which checkboxes have been selected. This way the user is generating the Genre they selected. (In future find a way to filter it while multiple checkboxes have been selected)

    //2. Use the selected checkbox to make the correct API call based on the genre. Finding a way to connect what's been checked, the API, and a button to load everything.

    function actionFilter(generateAction) {
        const filterAction = document.getElementById('action')
    }
    

    
    




    


    return(
        <div>
            <div class="container">
                <h1 class="title">Anime Generator</h1>
                    <div id="animeGenerator" class="form">
                                  
                         <label>Action</label>
                            <input 
                              type="checkbox" 
                              name="options" 
                              value="action" 
                              id="action"
                              
                              />

                              <label>Adventure</label>
                              <input 
                              type="checkbox"  
                              name="options" 
                              value="adventure" 
                              id="adventure"
                              />

                              <label>Comedy</label>
                              <input 
                              type="checkbox"  
                              name="options" 
                              id="comedy"
                              />

                              <label>Drama</label>
                              <input 
                              type="checkbox"  
                              name="options" 
                              id="drama"
                              />

                              <label>Slice of Life</label>
                              <input 
                              type="checkbox"  
                              name="options" 
                              id="sliceOfLife"
                              />

                              <label>Fantasy</label>
                              <input 
                              type="checkbox"  
                              name="options" 
                              id="fantasy"
                              />

                              <label>Romance</label>
                              <input 
                              type="checkbox"  
                              name="options" 
                              id="romance"
                              />

                              <label>Sci-Fi</label>
                              <input 
                              type="checkbox"  
                              name="options" 
                              id="sciFi"
                              /> 
                              
                        </div>  
                        <div>
                            <Link to="randomanime">
                                <Button variant="outlined">Generate</Button>
                            </Link>
                        </div>
                    </div>
        </div>
    );
}

export default RandomFilter;