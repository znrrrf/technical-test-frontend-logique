// ===== DATA =====
const serviceCards = [
  {
    img: "./assets/grid1.svg",
    alt: "App Redesign Project",
    title: "App Redesign",
    date: "App Design - June 20, 2022",
    desc: "By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping",
  },
  {
    img: "./assets/grid2.svg",
    alt: "Channel Website Redesign",
    title: "Redesign channel website landng page",
    date: "App Design - June 20, 2022",
    desc: "By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping",
  },
  {
    img: "./assets/grid3.svg",
    alt: "Locator App",
    title: "New Locator App For a New Company",
    date: "App Design - June 20, 2022",
    desc: "By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping",
  },
  {
    img: "./assets/grid4.svg",
    alt: "Rental Platform",
    title: "Rental Rooms Web App Platform",
    date: "App Design - June 20, 2022",
    desc: "By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping",
  },
  {
    img: "./assets/grid5.svg",
    alt: "Calendar App",
    title: "Calendar App for Big SASS Company",
    date: "App Design - June 20, 2022",
    desc: "By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping",
  },
];

let testimonialUsers = [
  {
    name: "Alicia Tan",
    job: "UI/UX Designer",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at elit ut sem interdum accumsan in sit amet augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at elit ut sem interdum accumsan in sit amet augue.",
    img: "./assets/avatar1.svg",
  },
  {
    name: "James Carter",
    job: "Frontend Developer",
    testimonial:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ultricies diam in lorem iaculis posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ultricies diam in lorem iaculis posuere.",
    img: "./assets/avatar2.svg",
  },
  {
    name: "Ricky Aprilia",
    job: "Founder of Varibo",
    testimonial:
      "Vivamus vitae erat a leo volutpat ultricies. Aliquam eget sapien eget ligula facilisis feugiat ac a justo. Vivamus vitae erat a leo volutpat ultricies. Aliquam eget sapien eget ligula facilisis feugiat ac a justo.",
    img: "./assets/avatar3.svg",
  },
  {
    name: "Ravi Santoso",
    job: "Software Engineer",
    testimonial:
      "Nullam vel dolor in sapien varius faucibus. In hac habitasse platea dictumst. Donec ac lorem ut justo suscipit euismod. Nullam vel dolor in sapien varius faucibus. In hac habitasse platea dictumst. Donec ac lorem ut justo suscipit euismod.",
    img: "./assets/avatar4.svg",
  },
  {
    name: "Dina Prameswari",
    job: "Marketing Lead",
    testimonial:
      "Curabitur commodo justo a sapien accumsan, ut tristique enim tempus. Cras vel risus non lorem sagittis eleifend. Curabitur commodo justo a sapien accumsan, ut tristique enim tempus. Cras vel risus non lorem sagittis eleifend.",
    img: "./assets/avatar5.svg",
  },
];

// ===== SERVICE CARDS RENDERER =====
function renderServiceCards() {
  const $serviceList = $(".service-list");
  $serviceList.empty();

  serviceCards.forEach((card, index) => {
    const cardClass = `grid-${index + 1}`;
    const isMainCard = index === 0;

    const cardHTML = `
      <div class="box ${cardClass}">
        <img src="${card.img}" alt="${card.alt}" />
        <p>${card.date}</p>
        <a href="#" class="${isMainCard ? "" : "small"}">${card.title}</a>
        ${isMainCard ? `<p class="desc">${card.desc}</p>` : ""}
      </div>
    `;

    $serviceList.append(cardHTML);
  });
}

// ===== TESTIMONIAL FUNCTIONALITY =====
const TestimonialManager = {
  $avatarList: $("#avatar-list"),
  $testimonialText: $("#testimonial-text"),
  $mainName: $("#main-name"),
  $mainJob: $("#main-job"),

  init() {
    this.renderAvatars();
    this.updateMainUser(this.getCenterUser());
    this.attachEventListeners();
  },

  getCenterUser() {
    const centerIndex = Math.floor(testimonialUsers.length / 2);
    return testimonialUsers[centerIndex];
  },

  renderAvatars() {
    this.$avatarList.empty();

    testimonialUsers.forEach((user, index) => {
      const avatarThumb = $(`
        <div class="avatar-thumb avatar-thumb${
          index + 1
        }" data-index="${index}">
          <img src="${user.img}" alt="${user.name}">
        </div>
      `);
      this.$avatarList.append(avatarThumb);
    });

    const centerIndex = Math.floor(testimonialUsers.length / 2);
    $(".avatar-thumb").eq(centerIndex).addClass("active");
  },

  updateMainUser(user) {
    const fadeSpeed = 200;

    this.$mainName.fadeOut(fadeSpeed, function () {
      $(this).text(user.name).fadeIn(fadeSpeed);
    });

    this.$mainJob.fadeOut(fadeSpeed, function () {
      $(this).text(user.job).fadeIn(fadeSpeed);
    });

    this.$testimonialText.fadeOut(fadeSpeed, function () {
      $(this).text(user.testimonial).fadeIn(fadeSpeed);
    });
  },

  rotateUsers(clickedIndex) {
    const centerIndex = Math.floor(testimonialUsers.length / 2);
    const rotateBy = clickedIndex - centerIndex;

    if (rotateBy === 0) return;

    // Rotate array to bring clicked user to center
    if (rotateBy > 0) {
      // Rotate right
      for (let i = 0; i < rotateBy; i++) {
        const firstUser = testimonialUsers.shift();
        testimonialUsers.push(firstUser);
      }
    } else {
      // Rotate left
      for (let i = 0; i < Math.abs(rotateBy); i++) {
        const lastUser = testimonialUsers.pop();
        testimonialUsers.unshift(lastUser);
      }
    }
  },

  attachEventListeners() {
    this.$avatarList.on("click", ".avatar-thumb", (e) => {
      const clickedIndex = $(e.currentTarget).data("index");

      this.rotateUsers(clickedIndex);
      this.renderAvatars();
      this.updateMainUser(this.getCenterUser());
    });
  },
};

// ===== INITIALIZE EVERYTHING =====
$(document).ready(function () {
  renderServiceCards();

  TestimonialManager.init();

  initFormHandler();

  $("body").css("opacity", "0").animate({ opacity: 1 }, 500);
});
