import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default class extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>New Story - Life stories</title>
        </Head>

        <Layout>
          <h4>Stories page</h4>
        </Layout>
      </div>
    );
  }
}
