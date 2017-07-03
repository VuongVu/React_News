import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { EditableText } from '@blueprintjs/core';

export default class extends Component {
  state = {
    intent: 2,
    maxLength: 50
  }

  render() {
    return (
      <div>
        <Head>
          <title>New Story - Life stories</title>
        </Head>

        <Layout>
          <h1>
            <EditableText
              intent={this.state.intent}
              maxLength={this.state.maxLength}
              placeholder="Title"
            />
          </h1>
        </Layout>
      </div>
    );
  }
}
