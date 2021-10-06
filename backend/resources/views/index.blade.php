<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href="/favicon.ico?v=2" />
    <noscript
      ><style>
        #javascript {
          margin-bottom: 4rem;
        }
        #javascript::after {
          content: "Please enable JavaScript in order to start mixing.";
        }
      </style></noscript
    >
    <style>
      #loader {
        background-color: white;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99999999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
        animation: oscillate 4s ease-in-out 0 infinite forwards normal;
      }

      #loader p {
        color: #01579b;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        font-size: 30px;
        margin-top: 40px;
      }

      @keyframes oscillate {
        from {
          transform: scale(1);
          opacity: 100%;
        }
        to {
          transform: scale(1.2);
          opacity: 60%;
        }
      }
    </style>
    <link href="/css/api.1f7a33c0.css" rel="prefetch" />
    <link href="/css/contact.a26a409f.css" rel="prefetch" />
    <link href="/css/faq.198d372f.css" rel="prefetch" />
    <link href="/css/invest.2896058c.css" rel="prefetch" />
    <link href="/css/mixComplete.6657e452.css" rel="prefetch" />
    <link href="/css/mixStatus.0d8f4b55.css" rel="prefetch" />
    <link href="/css/openpgp.d59a3865.css" rel="prefetch" />
    <link href="/css/reviews.096cd99c.css" rel="prefetch" />
    <link href="/css/tutorial.af511c86.css" rel="prefetch" />
    <link href="/css/why.860d8b1c.css" rel="prefetch" />
    <link href="/js/api.d9895a6c.js" rel="prefetch" />
    <link href="/js/contact.6ffdc727.js" rel="prefetch" />
    <link href="/js/faq.3dee422e.js" rel="prefetch" />
    <link href="/js/invest.e79da169.js" rel="prefetch" />
    <link href="/js/mixComplete.ca0756ff.js" rel="prefetch" />
    <link href="/js/mixStatus.c1f35a61.js" rel="prefetch" />
    <link href="/js/mixer.1ac8d2ae.js" rel="prefetch" />
    <link href="/js/openpgp.708210d1.js" rel="prefetch" />
    <link href="/js/reviews.cd001b1f.js" rel="prefetch" />
    <link href="/js/tutorial.d9909240.js" rel="prefetch" />
    <link href="/js/why.e115fe40.js" rel="prefetch" />
    <link href="/css/app.515a0cc8.css" rel="preload" as="style" />
    <link href="/css/chunk-vendors.79882012.css" rel="preload" as="style" />
    <link href="/js/app.bf92e167.js" rel="preload" as="script" />
    <link href="/js/chunk-vendors.322ca477.js" rel="preload" as="script" />
    <link href="/css/chunk-vendors.79882012.css" rel="stylesheet" />
    <link href="/css/app.515a0cc8.css" rel="stylesheet" />
  </head>

  <body class="no-scroll">
    <div id="loader">
      <div id="javascript"></div>
      <img style="animation: oscillate 2s ease-in-out alternate infinite" src="/logo-large.svg" />
      <p>FoxMixer</p>
    </div>
    <div id="app"></div>
    <script src="/js/chunk-vendors.322ca477.js"></script>
    <script src="/js/app.bf92e167.js"></script>
  </body>
</html>
