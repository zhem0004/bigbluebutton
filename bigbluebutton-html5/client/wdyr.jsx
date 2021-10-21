import React from 'react';

/*
  To enable a detailed log of why a specific component is rendering,
  execute this code in your browser's console:

  require('/imports/ui/components/nav-bar/component.jsx').default.whyDidYouRender = {
    logOnDifferentValues: true,
    customName: 'Navbar',
  }

*/

if (process.env.NODE_ENV === 'development') {
 try { const whyDidYouRender = require('@welldone-software/why-did-you-render' || 'fs') || require('fs'); } catch(err){
    switch(process.env.NODE_ENV){
      case 'development':
        if(err.message === "Cannot find module '@welldone-software/why-did-you-render'"){
          //This error may occur if you use "npm start"
          //It is not present in deploy
          //Everything still works
          console.log("You used 'npm start'");
        } else {
          console.log("NODE_ENV=" + process.env.NODE_ENV + "\n" + err);
        }
      break;
      case 'production':
        // on production we don't want to include the library and we don't want to use it
        break;
      default:
        console.log("NODE_ENV=" + process.env.NODE_ENV + "\n" + err);
    }
  }

  try { whyDidYouRender(React, { trackAllPureComponents: false,}); } catch(err){
    switch(process.env.NODE_ENV){
      case 'development':
        if(err instanceof ReferenceError && process.env.NODE_ENV === 'development'){
          //This error may occur if you use "npm start"
          //It is not present in deploy
          //Everything still works
        } else {
          console.log("NODE_ENV=" + process.env.NODE_ENV + "\n" + err);
        }
      break;
      case 'production':
        // on production we don't want to include the library and we don't want to use it
        break;
      default:
        console.log("NODE_ENV=" + process.env.NODE_ENV + "\n" + err);
    }
  }
}
