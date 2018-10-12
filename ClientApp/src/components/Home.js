import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name

  constructor(props) {
    super(props);
    this.state = { luvut: [] };
  }
  componentWillMount() {

    let that = this;
    console.log("Aloitetaan datan haku.");
    fetch('/api/customers/luvut')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(JSON.stringify(myJson));
        this.setState({ luvut: myJson});
      });
  }

  render() {
    console.log("Render-metodissa.");

    return (
      <div>
        <h1>Pia's 1st Web-app</h1>
        <p>As the title says this is my first attempt to create a web-application,
           6 weeks ago I was a total novise in web-development!
           <strong>This is a Challenge with a capital "C"</strong> as at the moment I've had 25 hours of training
           in Application Development in total! In this 25 hours our brilliant lecturer
           Jani J. has had to introduce us to a huge amount of different techniques and concepts ->
           my head is spinning!</p>

           <p>That is probably why I am now doing what I know, writing this story, instead of
           trying to read about e.g. React that we are using in this project?!
           Now I also realize that this story should probably be written in a separate
           text-file and not here in the code it self, and then my magnificent code would be
           calling it! I will try that later!</p>

           <p>I will try to combine in this demo as many different features that I possibly can. 
           <strong>I wish to understand each of them myself</strong> so in the end they might not
           be that many?!
           I will use the structure and elements that were already setup in this project,
           try to modify/enhance them according to my taste/needs. I wish to style the UI,
           render some data from the database, ask for your input and do something with it and
           add some images and links on the page, we'll see how it goes!</p>
           <p>I thank you for having taken the time to read this piece and check-out what I managed
           to come-up with! Cheers, Thank you, Kiitos!
           Pia </p>
           <p>P.S. Did you notice that I already started: I added some <strong>bold</strong> font
           in my text, <strong>YaHoooo!!!</strong></p>

           <h2>Features, that I'm trying to include in this demo</h2>
           <h3> A link taking you to another page</h3>
           <p>(Well first I'll have to create that "another page"?! - Done :))</p>            
           {/* copied the Hello World.html to the same folder where the index.html is.
          And managed to get this comment here!! */}
          <p><strong>And let's go to the other page</strong><a href='AnotherPage.html'>   To the other page</a></p>

        <p>------------------------------------------------------------------------------------------</p>   
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
      </div>
    );
  }
}
