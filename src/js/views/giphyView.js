import { elements } from '../base';

export const clearGiphy = () => {
    elements.resultValue.innerHTML = '';
}

export const renderGiphy = giphy => {
    const markUp = `
    <li>
        <div>
            <div class="image">
                <img src="${giphy.image}" alt="${giphy.title}" height="250" width="250">
            </div>
        
            <div class="giff__url">
                <span>${giphy.url}</span>
            </div>
        </div>
    </li>       
    `;

    elements.resultValue.insertAdjacentHTML('beforeend', markUp);
}


