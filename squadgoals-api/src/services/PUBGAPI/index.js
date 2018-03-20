import { PUBG_API_URL } from '../../constants';

const Kitsu = require('kitsu');

class PUBGAPI {
    constructor() {
        this.api = new Kitsu({
            baseURL: PUBG_API_URL,
            headers: {
                Authorization: `Bearer ${process.env.PUBG_TOKEN}`,
                Accept: 'application/vnd.api+json'
            },
            pluralize: false
        });
    }

    getStatus() {
        return this.api.get('status').then(({data}) => data, (err) => {
            /* Define logging strategy */
            throw err;
        })
    };

}

export default PUBGAPI;