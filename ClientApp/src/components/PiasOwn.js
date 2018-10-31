import React, { Component } from 'react';
import './PiasOwn.css';

export class PiasOwn extends Component {
  displayName = PiasOwn.name

     render () {
     return (
       
       <div class="hero-image">

  <h1>TÄHÄN PITÄIS NYT SITTEN KEKSIÄ JOTAIN</h1>

  <p>Welcome to your new single-page application, built with:</p>
  <ul>
    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
    <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
  </ul>
  <p>To help you get started, we've also set up:</p>
  <ul>
    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
    <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
  </ul>
  <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
<p>--------------------------------------------------------</p>
  <h2>Features, that I'm trying to include in this demo</h2>
  <h3> A link taking you to another page</h3>
  <p>(Well first I'll have to create that "another page"?! - Done :))</p>
  /* copied the Hello World.html to the same folder where the index.html is.
  And managed to get this comment here!! */
  <p><strong>And let's go to the other page</strong><a href='AnotherPage.html'>   To the other page</a></p>
  <div className="alert alert-success" role="alert">
    Saako tässä lukea mitä vaan?
        </div>

  <div className="alert alert-danger" role="alert">
    Näköjään saa :)
        </div>

  <div className="alert alert-danger" role="alert">
    ja alertti linkin kanssa <a href="https://localhost:5001/AnotherPage.html" class="alert-link">
      Linkki toiselle sivulle</a> Klikkaa, jos haluat :)
      </div>

      </div>
    
    );
  }
}
