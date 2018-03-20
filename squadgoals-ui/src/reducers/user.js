import { PLATFORMS, REGIONS } from '../constants';

const _ = require('lodash');

export const user = (state = {platform: PLATFORMS[0].value, region: REGIONS[2].value }, action) => {
    switch(action.type) {
        case 'UPDATE_USER':
            let user = _.cloneDeep(action.user);
            let result = {platform: '', region: ''};
            result.platform = PLATFORMS.find((p) => p.value === user.platform).value;
            result.region = REGIONS.find((r) => r.value === user.region).value;
            return result;
        default:
            return state;
    }
}