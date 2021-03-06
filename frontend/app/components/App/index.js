// @flow

import 'App/normalize.css';

import React from 'react';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router';
import Home from 'Home';
import Sessions from 'Sessions';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Humans from '!file-loader?name=humans.txt!./humans.txt';
import NewsOverview from 'NewsOverview';
import SplatRouter from 'SplatRouter';
import Typekit from 'react-typekit';
import styles from './styles.css';

const App = (): React.Element<any> =>
  (<div className={styles.wrapper}>
    <Helmet
      titleTemplate="Texas Camp 2018 - %s"
      defaultTitle="Texas Camp 2018"
    />
    <Typekit kitId="yde7xbz" />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sessions" component={Sessions} />
      <Route exact path={Humans} />
      <Route exact path="/news/:page?/" component={NewsOverview} />
      <Route exact path="*" component={SplatRouter} />
    </Switch>
  </div>);

export default App;
