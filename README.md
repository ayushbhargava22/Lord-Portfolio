<h1 align="center"> Software Developer Master Portfolio 🔥 </h1> 
<h3 align="center"> A clean, beautiful, responsive and 100% customizable portfolio <br /> template for Software Developers! </h3>

:star: Star us on GitHub — it helps!

# Sections 📚

✔️ About me\
✔️ What I Do \
✔️ Projects Connected with Github\
✔️ Experience\
✔️ Certifications 🏆\
✔️ Education\
✔️ Contact me

To view a live example, **[click here]()**

# Clone And Use 📋

- The website is completely built on `Vue.js` library of `javascript` and that's why we need `nodejs` and `npm` installed.
- While installing `nodejs` and `npm`, try to install versions which are equal or greater than the versions mentioned in badges above.
- In case you want to help developing it or simply saving it, you can fork the repository just by clicking the button on the top-right corner of this page.
- After the successful installation of `nodejs` and `npm`, clone the repository into your local system using below command:
  - ```bash
     git clone https://github.com/ayushbhargava22/Lord-Portfolio.git
    ```
  - This will clone the whole repository in your system.
- To download required dependencies to your system, navigate to the directory where the cloned repository resides and execute following command:
  - ```node
    npm install
    ```
- Now, the project is ready to use.
- You can check it using `npm start`, it will open the website locally on your browser.

# Customize it to make your own portfolio ✏️

In this project, there are basically 2 things that you need to change to customize this to anyone else's portfolio: **package.json**, **Personal Information**,

### package.json

Open this file, which is in the main cloned directory, choose any "name" and change "homepage " to `https://<your-github-username>.github.io`. Do not forget the `https://`, otherwise fonts will not load.

### Personal Information

You will find `src/store/index.js` file which contains the complete information about the user. The file looks something like below:

``state: {
    firstName: 'Ayush',
    lastName: 'Bhargava',
    grettings: {
      title: 'Ayush Bhargava',
      nickName: 'Aashu',
      subTitle: 'A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact',
      resumeLink: null,
      githubProfile: null,
    },

...
```

You can change the personal information, experience, education, social media, certifications, contact information etc. in `src/store/index.js` to directly reflect them in portfolio website.

## Other

 - You need to change the website title and other descriptions in `public/index.html`
 
 - You can define your own favicon in `public/icons` directory. If you don't have a favicon, you can generate favicons from [Favicon Generator](https://www.favicon-generator.org/) and [Favicon IO](https://favicon.io/)

# Deployment 📦

- Once you are done with your setup and have successfully completed all steps above, you need to put your website online!
- I highly recommend using [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) to achieve this the EASIEST WAY.
- To deploy your website, you have two options. First you need to create a github repository with the name `<your-github-username>.github.io`. Please don't give it any other name.
- Now, you need to generate a production build and deploy the website.

**Option 1:**

- Run `yarn build` to generate the production build folder.
- Enter the build folder, `git init` and push the generated code to the `master` branch of your new repository on github. That's it. It's Done.
- You may need to `git init` and force push at every new build.

Now, your website is successfully deployed and you can visit it at `<your-github-username>.github.io`.  
If you are stuck somewhere and want to observe the deployment process in depth, then please watch below video.

<p align="center"> 
    <a href="http://www.youtube.com/watch?v=IwBS39TOmpA" target="_blank">
    <img src="http://img.youtube.com/vi/IwBS39TOmpA/0.jpg"></img>
  </a>
</p>

# Technologies used 🛠️

- [Vue.js]
- [HTML]
- [CSS]

# Contributing 💡

If you can help us with these. Please don't hesitate to open an [pull request](https://github.com/ashutosh1919/masterPortfolio/pulls) or [issue](https://github.com/ashutosh1919/masterPortfolio/issues).

- Move to Gatsby
- Add Podcast Section and Video Section
- Add tests to automate review.
- Setup Travis workflow.

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
