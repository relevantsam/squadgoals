import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions';

import './styles.css';

import {PLATFORMS, REGIONS} from '../constants';

const Onboarding = ({user, updateUser}) => {
    const getShard = () => {
        let region = REGIONS.find(r => r.value === user.region).display;
        let platform = PLATFORMS.find(p => p.value === user.platform).display;
        return `${platform} - ${region}`;
    }
    return ( 
        <article className="onboarding">

            <h2 className="title">
                Welcome, soldier
            </h2>
            <div className="card">
                <div className="card-content">
                    <form>
                        <div className="columns">
                            <div className="field column">
                                <label className="label">Your weapon of choice:</label>
                                <div className="control">
                                    <div className="select">
                                        <select value={user.platform} 
                                                onChange={(e) => updateUser({...user, platform: e.target.value})}>
                                            {PLATFORMS.map((p) => 
                                                <option key={p.value} value={p.value}>{p.display}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field column">
                                <label className="label">Global Region:</label>
                                <div className="control">
                                    <div className="select">
                                        <select value={user.region} 
                                                onChange={(e) => updateUser({...user, region: e.target.value})}>
                                            {
                                               REGIONS
                                                    .filter((region) => region.supportedOn.indexOf(user.platform) > -1)
                                                    .sort((a, b) => a.display > b.display ? 1 : (a.display < b.display ? -1 : 0) )
                                                    .map((region) => 
                                                        <option key={region.value} value={region.value}>{region.display}</option>
                                                    )
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <section>
                        <div className="field is-grouped is-grouped-multiline">
                            <div className="control">
                                <div className="tags has-addons">
                                <span className="tag is-dark is-title-font">SHARD</span>
                                <span className="tag is-info">{getShard()}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </article>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);