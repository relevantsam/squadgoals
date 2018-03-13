import React, { Component } from 'react';

import './styles.css';

import {PLATFORMS, REGIONS} from '../constants';

export default class Onboarding extends Component {
    state = {
        platform: PLATFORMS[1].value,
        region: REGIONS[2].value
    }
    getShard = () => this.state.platform + "-" + this.state.region;
    render = () => 
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
                                        <select value={this.state.platform} onChange={(e) => this.setState({platform: e.target.value})}>
                                            {PLATFORMS.map((platform) => 
                                                <option key={platform.value} value={platform.value}>{platform.display}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field column">
                                <label className="label">Global Region:</label>
                                <div className="control">
                                    <div className="select">
                                        <select value={this.state.region} onChange={(e) => this.setState({region: e.target.value})}>
                                            {
                                               REGIONS
                                                    .filter((region) => region.supportedOn.indexOf(this.state.platform) > -1)
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
                        <div class="field is-grouped is-grouped-multiline">
                            <div class="control">
                                <div class="tags has-addons">
                                <span class="tag is-dark is-title-font">SHARD</span>
                                <span class="tag is-info">{this.getShard()}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </article>;
}