import axious from 'axios';
import { apiKey, giphyURL } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {

        try {
            // Example http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
            const results = await axious(`${giphyURL}${this.query}&api_key=${apiKey}&limit=30`);
            this.result = results.data.data;
            console.log(this.result);

        } catch(error) {
            alert(error);
        }
    }
}
