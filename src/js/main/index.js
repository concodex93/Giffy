import * as SearchView from '../views/searchView';
import * as GiphyView from '../views/giphyView';
import { elements } from '../base';
import Search from '../models/Search';
import Giphy from '../models/Giphy';


/*
    SEARCH CONTROLLER
*/

const state = {};
let giphyIndex;

const controlSearch = async (giphyIndex) => {
    // Get Query from UI
    const query = SearchView.getSearchValue();
    console.log(query);

    if (query){
        // Create Search Obj
        state.search = new Search(query);
        console.log(state.search);

        
        try{
            // Call API and get data
            await state.search.getResults();
            
            let giphyList = [];
            state.search.result.forEach(result => {
                // Create Giphy Objs from response
                state.giphy = new Giphy(result.id, result.title, result.url, result.images.original.url)
                state.giphy.splitImageURL();
                giphyList.push(state.giphy);
            });

            // Render Objects
            GiphyView.clearGiphy();
            GiphyView.renderGiphy(giphyList[giphyIndex]);
            
        } catch(error) {
            console.log(error);
        }
    }
    // Render on UI
};

/*
    EVENT LISTENERS
*/

elements.searchElement.addEventListener('click', e => {
    const btn = e.target.closest('.search__btn');
    if (btn) {
        giphyIndex =  Math.floor(Math.random() * 29);
        controlSearch(giphyIndex);
    }
});

