import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import FormLayout from '../components/Form/Authenticate/FormLayout';
import Header from '../components/Form/Authenticate/Header';
import Input from '../components/Form/Authenticate/Input';
import Button from '../components/Form/Authenticate/Button';

export default class extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Sign Up - Life stories</title>
        </Head>

        <Layout>
          <FormLayout>
            <Header
              title="Join with us"
              subTitle="Create your personal account"
            />
            <Input
              label="Username"
              inputIcon="pt-icon pt-icon-person"
              inputType="text"
              inputClass="pt-input"
              helperText="This will be your username — you can enter your organization’s username next."
            />
            <Input
              label="Email Address"
              inputIcon="pt-icon pt-icon-envelope"
              inputType="text"
              inputClass="pt-input"
              helperText="Enter your email. We promise not to share your email with anyone."
            />
            <Input
              label="Password"
              inputIcon="pt-icon pt-icon-lock"
              inputType="password"
              inputClass="pt-input"
              helperText="This will be your password."
            />
            <Button
              type="submit"
              className="pt-button pt-intent-success"
              content="Create an account"
              icon="pt-icon-standard pt-icon-arrow-right pt-align-right"
            />
          </FormLayout>
        </Layout>
      </div>
    );
  }
}
