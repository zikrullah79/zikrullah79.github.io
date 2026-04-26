# zikrullah79.github.io

## Description
this website is my personal website to show my portfolio, services, and blogs. all of the assets can refer to folder temp. this websites is built with Astro and Tailwind CSS. The older version of this websites is in folder temp also and almost all of the content will put to this new version. i need this websites to be very interactive with a lot of adaptive animation.

## Tabs
This websites will contain several tabs that has different functionality for each tabs.

### Tab 1 - Home/About Me
this tab contain about all things related to me. you can refer it to folder temp also. for extra context, you can go to my linkedin account also in https://www.linkedin.com/in/zikrullahali/?locale=en .

#### Sections
##### Section 1 - Hero
This section will contain a photo about me in temp/assets/img/CV5.png. add some other interactive object.
##### Section 2 - Career Story
you can refer to temp/index.html.
##### Section 3 - Portfolio
you can refer to temp/index.html.
##### Section 4 - Latest Blog
this refer to Tab 3 but just get 3 latest.
##### Section 5 - Latest Works
this refer to Tab 2 in section 3 but just get 3 latest.
##### Section 6 - Testimonials
you can refer to temp/index.html.
##### Section 7 - Footer
this section you can refer to /temp/index.html.

### Tab 2 - Services
This Tab contain about my services that i offer to clients.
#### Sections
##### Section 1 - Hero
setup some adaptive and interactive UI Hero about services.
##### Section 2 - Services
for now just list :
- website development
- ai powered application development
- Bug Tracing & Fixing
##### Section 3 - Our Works
for now just list 3 dummy works with possibility increase. make it more interactive and adaptive.

##### Section 4 - Contact Us
i need this section to be interactive and adaptive. should contain field email and message. and a button to send the message. the message will send to my email [EMAIL_ADDRESS]
##### Section 5 - Footer
this section you can refer to /temp/index.html.

### Tab 3 - Blogs
#### Sections 
##### Section 1 - List of Blogs
##### Section 2 - List Of Today I Learn (TIL)
##### Section 3 - Footer
this section you can refer to /temp/index.html.

## Blogs Mechanism
This blog has two type of blogs. first is blog and second is today i learn (TIL). the mechanism process is as follows:
- i create a md file in folder `src/content/blogs` or `src/content/til`.
- like jekyll this website will convert it as static website. using some command in make file. the command is `make build`.
- after build process is done, the website will be deployed to github pages. the command is `make deploy`.
- all design should be adaptive and related to all other tabs. 


