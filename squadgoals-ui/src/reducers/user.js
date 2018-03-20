import { PLATFORMS, REGIONS } from '../constants';

const _ = require('lodash');

export const user = (state = {platform: PLATFORMS[0].value, region: REGIONS[2].value, name: '', shard: `${PLATFORMS[0].value}-${REGIONS[2].value}` }, action) => {
    switch(action.type) {
        case 'UPDATE_USER':
            let user = _.cloneDeep(action.user);
            let result = {platform: '', region: '', name: '', shard: ''};
            result.platform = PLATFORMS.find((p) => p.value === user.platform).value;
            result.region = REGIONS.find((r) => r.value === user.region).value;
            result.name = user.name;
            result.shard = `${result.platform}-${result.region}`;
            return result;
        default:
            return state;
    }
}