import axios from 'axios';

// export const get = () => (
//     axios.get('./data/Menu.js')
//         .then(function ({ data }) {
//             return data;
//         })
// );
export const get = () => (
    axios.get('./data/card.json')
        .then(function ( data ) {
            return data;
        })
);
