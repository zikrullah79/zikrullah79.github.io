document.addEventListener("DOMContentLoaded", () => {
  testimonials = [
    {
      photo : "https://media.licdn.com/dms/image/v2/D5603AQHTiXCxx4BO9A/profile-displayphoto-shrink_100_100/B56ZWIUpCvGQAY-/0/1741748868755?e=1751500800&v=beta&t=ZmKgHVLukBWq2C3awe_3ti1G1vhtt88pwX-fd4KprmY",
      name : "Ali Abdul Wahid",
      title:"Top 3% Angular Developers Upwork",
      testimony : "You must have come across someone who has quite a distinctive way of expressing themselves, but is highly trustworthy when it comes to projects. Zikrullah is probably one of such people. He uses several unusual yet logical communication techniques. However, if you inquire about the work assigned to him, you won't need to be concerned because he will put out his best effort in that task, despite how challenging it may be for him. Zikrullah, it was a joy working with you."
    },
    {
      photo : "https://media.licdn.com/dms/image/v2/D5603AQGts1lAaMbORw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1677941087173?e=1751500800&v=beta&t=wYSCX8ib72B0Ze5SfviFwFdBMYKR1Phdv1jZi5psNvo",
      name : "Imam Muttaqin",
      title:"Backend Developer at SALT",
      testimony : "Zikrullah is a great person to work with. He has demonstrated a strong work ethic and an unwavering commitment to the success of our team. He also can manage when is the time to regroup as colleague at work, and when is the time to chat as a friend to hangout with. In addition, Zikrullah is always willing to go the extra mile to help colleagues and support the organization. Nice to have experienced your company, Zik"
    },
    {
      photo : "https://media.licdn.com/dms/image/v2/D5603AQG-HWBLF1zvow/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1729183688006?e=1751500800&v=beta&t=6t_lGnwAMHTw6U1nzTmEnkH4Nw4orFaiJqOstb2EHmY",
      name : "Shafira Ishlah Nurulita",
      title:"Managing Director at Forest Technologies",
      testimony : "I confidently endorse Zik for the roles of software engineer and project manager. Zik's outstanding communication abilities and inclination towards collaboration make working with him truly enjoyable. He exhibits a strong eagerness to learn and demonstrates great responsibility in completing tasks, consistently delivering top-notch software within designated timelines. Zik's exceptional talent for providing constructive feedback to team members contributes significantly to their growth and development. Moreover, his pleasant and laid-back demeanor contributes to a positive work atmosphere. All in all, Zik is an exceptionally skilled and dependable professional, combining technical expertise with a positive mindset, and would be a valuable asset to any team."
    },
    {
      photo : "https://media.licdn.com/dms/image/v2/C5103AQHWDUV6f0p5DA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1531058001092?e=1751500800&v=beta&t=xgnvD2RDOEJF2FZcwhxKitTqRuLqtoafeXzM__JZnsI",
      name : "Damai Yulianti Siddik",
      title:"Software Engineer at Canlah",
      testimony : "Zik is the right person to exchange ideas with, and can foster a collaborative environment, even when differences of opinion arise. He has a knack for finding common ground and helping others see the bigger picture, fostering understanding and alignment even when initial opinions may have differed. He can make other people have an open mind and be up to date with technology trends. He has broad insight, has good communication, and always does his best when working. It's a pleasure to collaborate with you, zik."
    },
    {
      photo : "https://media.licdn.com/dms/image/v2/D5603AQFMo11ssRiTcA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724671697633?e=1751500800&v=beta&t=3-kIHUFB32KW7PYsBHx8of6pOixHXIVE-TDz7RAf2yg",
      name : "Muhammad Taufiq Ramadhan",
      title:"Staff at Ministry of State Secretariat of the Republic of Indonesia",
      testimony : "Zikrullah is a hard-working person who completes tasks with diligence. He also picks up new information quickly and enjoys talking about it with others after learning it. As a result, in my opinion, Zik is more than simply a typical coworker. He is a discussion partner about software development, which aids in our further development. Let's continue to develop together in the future. I'm grateful to have met you."
    }
  ]

  // initiate testimony
  let idx = 0
  let testimonyName = document.getElementById("name_test")
  let testimonyDesc = document.getElementById("title_desc")
  let testimonyPhoto = document.getElementById("photo_test")
  let testimonyTitle = document.getElementById("title_test")
  let testimonyBox = document.getElementById("testimonyBox")
  document.getElementById("prev_test").addEventListener("click",()=>{
    idx = idx == 0 ? testimonials.length - 1 : idx - 1
    changeTestimony(testimonials[idx])
  })
  document.getElementById("next_test").addEventListener("click",()=>{
    idx = (idx + 1) % testimonials.length 
    changeTestimony(testimonials[idx])
  })
    // Initialize scroll animations
    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         entry.target.classList.add("animate-in");
    //       }
    //     });
    //   },
    //   {
    //     threshold: 0.2,
    //   },
    // );
  
    // // Observe all elements with scroll-animate class
    // document.querySelectorAll(".scroll-animate").forEach((section) => {
    //   observer.observe(section);
    // });
  
    // // Initialize project click handlers
    // document.querySelectorAll(".project-card").forEach((card) => {
    //   card.addEventListener("click", () => {
    //     // Add project click handling logic here
    //     console.log("Project clicked:", card.dataset.project);
    //   });
    // });
  
    // // Form submission handling
    // const contactForm = document.querySelector("form");
    // if (contactForm) {
    //   contactForm.addEventListener("submit", (e) => {
    //     e.preventDefault();
    //     // Add form submission logic here
    //     console.log("Form submitted");
    //   });
    // }
    function changeTestimony(t) {
      testimonyBox.classList.remove('opacity-100');
      testimonyBox.classList.add('opacity-0');

      setTimeout(() => {
        testimonyDesc.innerText = t.testimony
        testimonyName.innerText = t.name
        testimonyTitle.innerText = t.title
        testimonyPhoto.src = t.photo

        testimonyBox.classList.remove('opacity-0');
        testimonyBox.classList.add('opacity-100');
      }, 300); // match Tailwind's duration (300ms)
      
    }
  });
  