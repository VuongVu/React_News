import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta charSet="utf-8"/>
      <link rel="shortcut icon" href="/static/images/favicon.ico"/>

      <link href="https://unpkg.com/normalize.css@^4.1.1" rel="stylesheet"/>
      <link href="https://unpkg.com/@blueprintjs/core@^1.21.0/dist/blueprint.css" rel="stylesheet"/>
    </Head>

    <style jsx global>{`
      /* loading progress bar styles */
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: #C23030;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #C23030, 0 0 5px #C23030;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}</style>
  </div>
);
