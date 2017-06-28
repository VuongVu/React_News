import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default class extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Sign Up - Life stories</title>
        </Head>

        <Layout>
          <div className="sign-up-modal">
            <div className="middle">
              <div className="avatar">
                <img src="/static/images/flower-heart-love-romance.png" alt="avatar"/>
              </div>
              <div className="pt-card pt-elevation-1 pt-interactive modal-content">
                <h2 className="text-center">Join with us</h2>              
                <p className="text-center pt-ui-text-large">Create your personal account</p>
                <div className="pt-form-group">
                  <label className="pt-label">Username</label>
                  <div className="pt-form-content">
                    <div className="pt-input-group">
                      <span className="pt-icon pt-icon-person"></span>
                      <input className="pt-input" type="text" dir="auto"/>
                    </div>
                    <div className="pt-form-helper-text">This will be your username — you can enter your organization’s username next.</div>
                  </div>
                </div>
                <div className="pt-form-group">
                  <label className="pt-label">Email Address</label>
                  <div className="pt-form-content">
                    <div className="pt-input-group">
                      <span className="pt-icon pt-icon-envelope"></span>
                      <input className="pt-input" type="text" dir="auto"/>
                    </div>
                    <div className="pt-form-helper-text">Enter your email. We promise not to share your email with anyone.</div>
                  </div>
                </div>
                <div className="pt-form-group">
                  <label className="pt-label">Password</label>
                  <div className="pt-form-content">
                    <div className="pt-input-group">
                      <span className="pt-icon pt-icon-lock"></span>
                      <input className="pt-input" type="password" dir="auto"/>
                    </div>
                    <div className="pt-form-helper-text">This will be your password.</div>
                  </div>
                </div>
                <div className="pt-form-group">
                  <div className="pt-form-content">
                    <button className="pt-button pt-intent-success">
                      Create an account
                      <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>

        <style jsx>{`
          .sign-up-modal {
            padding-top: 60px;
            display: table;
            position: absolute;
            width: 100%;
          }

          .middle {
            display: table-cell;
            vertical-align: middle;
          }

          .modal-content {
            margin-left: auto;
            margin-right: auto; 
            width: 23%;            
          }

          .avatar {
            text-align: center;
            margin: 24px 0 12px 0;
          }

          input {
            width: 100%;
          }

          .text-center {
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}