import { PLATFORMS, REGIONS } from '../constants';

const _ = require('lodash');

export const user = (state = {platform: PLATFORMS[0].value, region: REGIONS[2].value, name: '' }, action) => {
    switch(action.type) {
        case 'UPDATE_USER':
            let user = _.cloneDeep(action.user);
            let result = {platform: '', region: '', name: ''};
            result.platform = PLATFORMS.find((p) => p.value === user.platform).value;
            result.region = REGIONS.find((r) => r.value === user.region).value;
            result.name = user.name;
            return result;
        default:
            return state;
    }
}