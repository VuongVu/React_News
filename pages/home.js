import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default class extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Life stories</title>
        </Head>
        <Layout>
          <h4>hello world</h4>
        </Layout>
      </div>
    );
  }
}