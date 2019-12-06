import React, { PureComponent } from 'react';
import ReactGA from 'react-ga';
import Helmet from 'react-helmet';

// import Router from './Router';

function asDisplayString(value) {
  if (typeof value === 'string') return `'${value}'`;
  return value.toString();
}

function renderConfigString(config, indent = '') {
  return [
    '{',
    ...Object.keys(config).map((key) => {
      if (config[key] === undefined || config[key] === null) return '';
      return `\t${key}: ${asDisplayString(config[key])}`;
    }).filter(value => value),
    '}'
  ].reduce(
    (result, element, index, array) => {
      return `${result}${indent}${element}${index < array.length - 1 ? '\n' : ''}`;
    },
    ''
  );
}



const DEFAULT_CONFIG = {
  trackingId: 'UA-154121766-1',
  debug: true,
  // testMode: true,
  gaOptions: {
    cookieDomain: 'none'
  },
  // standardImplementation: true
};

export default class GoogleAnalytics extends PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      reactGaInitialised: false,
      configs: [DEFAULT_CONFIG]
    };
  }

  filteredConfigs = () => {
    return this.state.configs.filter(({ trackingId: id }) => id);
  };

  initReactGA = (event) => {
    event.preventDefault();
    if (this.filteredConfigs().length === 0) {
      return;
    }
    ReactGA.initialize(this.state.configs);
    // Send initial test view
    ReactGA.pageview('test-init-pageview');
    this.setState({ reactGaInitialised: true });
  };

  addConfig = () => {
    this.setState({
      configs: [...this.state.configs, DEFAULT_CONFIG]
    });
  };

  updateConfig = (configIndex, key, type, event) => {
    const config = this.state.configs[configIndex];
    let value;
    if (type === 'checkbox') {
      value = !config[key];
    } else {
      value = event.target.value;
    }
    const newConfig = {
      ...config,
      [key]: value
    };
    this.setState({
      configs: [
        ...this.state.configs.slice(0, configIndex),
        newConfig,
        ...this.state.configs.slice(configIndex + 1)
      ]
    });
  };

  renderConfigs = () => {
    const configs = this.filteredConfigs();
    if (configs.length === 0) return '';
    if (configs.length === 1) {
      const { trackingId, ...options } = configs[0];
      return `'${trackingId}'${Object.values(options).filter(val => val).length ? `, ${JSON.stringify(options)}` : ''}`;
    }
    return `[\n${
      configs.reduce((result, config, index, array) => {
        const configString = renderConfigString(config, '\t');
        return `${result}${result ? '\n' : ''}${configString}${index < array.length - 1 ? ',' : ''}`;
      }, '')
    }\n]`;
  };

  render() {
    const { configs, reactGaInitialised } = this.state;
    if (reactGaInitialised) {

      ReactGA.ga('send', 'pageview', '/my-initted-page');
      ReactGA.pageview('screenscholar.local');

      
      return (
        <div>
          <h4>App is Initialised. Refresh page to reset.</h4>
          {/* <Router /> */}
        </div>
      );
    }
    let initializationDebug = (
      <pre>
        ReactGA.initialize({this.renderConfigs()});
      </pre>
    );
    if (this.filteredConfigs().length === 0) {
      initializationDebug = <p>No Valid Configs set.</p>;
    }
    return (
      <form onSubmit={this.initReactGA}>

        {/* <Helmet
        script={[{ 
          type: 'text/javascript', 
          innerHTML: `(function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
              (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date(); a = s.createElement(o),
              m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
          })(window, document, 'script', '<%=htmlWebpackPlugin.options.analyticsURL%>', 'ga');
          ga('create', 'UA-XXX-X', 'auto');
          ga('send', 'pageview');`
        }]}
        />
         */}

        <p>Input your configs below:</p>
        {configs.map(({ trackingId, debug }, index) => (
          <div key={index}>
            <div>
              TrackingID:&nbsp;
              <input value={trackingId} onChange={this.updateConfig.bind(this, index, 'trackingId', 'text')} />
              &nbsp;Debug&nbsp;
              <input
                type="checkbox"
                checked={debug || false}
                onChange={this.updateConfig.bind(this, index, 'debug', 'checkbox')}
              />
            </div>
          </div>
        ))}
        <button type="button" onClick={this.addConfig}>Add Config</button>
        <button type="submit" disabled={configs.length < 1}>
          {configs.length < 1 ? 'Add Configs first' : 'Run the initialize function as below'}
        </button>
        {initializationDebug}
      </form>
    );
  }
}