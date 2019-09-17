export default class Giphy{
    constructor(id, title, url, image) {
        this.id = id,
        this.title = title
        this.url = url,
        this.image = image
    }

    splitImageURL () {
        this.image = this.image.split('?')[0];
        console.log(this.image[0]);
    }
}

