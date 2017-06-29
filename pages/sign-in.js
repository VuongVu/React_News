import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import FormLayout from '../components/Form/Authenticate/FormLayout';
import Header from '../components/Form/Authenticate/Header';
import Input from '../components/Form/Authenticate/Input';
import Avatar from '../components/Form/Authenticate/Avatar';
import Button from '../components/Form/Authenticate/Button';

export default class extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Sign In - Life stories</title>
        </Head>

        <Layout>
          <div style={{ marginTop: '-20px' }}>
            <FormLayout
              avatar={<Avatar url="/static/images/flower-heart-love-romance.png" alt="avatar" />}
            >
              <Header
                title="Sign in to Life Story"
                subTitle="Come with us :)"
              />
              <Input
                label="Username"
                inputIcon="pt-icon pt-icon-person"
                inputType="text"
                inputClass="pt-input"
                helperText="This is your username."
              />
              <Input
                label="Password"
                inputIcon="pt-icon pt-icon-lock"
                inputType="password"
                inputClass="pt-input"
                helperText="This is your password."
              />
              <Button
                className="pt-button pt-intent-success"
                content="Sign in"
                icon="pt-icon-standard pt-icon-arrow-right pt-align-right"
              />
            </FormLayout>
          </div>
        </Layout>
      </div>
    );
  }
}
