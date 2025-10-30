const cards = [
  {
    img: "./assets/grid1.svg",
    alt: "grid1",
    title: "App Redesign",
    date: "App Design - June 20, 2022",
    desc: "By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping",
  },
  {
    img: "./assets/grid2.svg",
    alt: "grid2",
    title: "Redesign channel website landng page",
    date: "App Design - June 20, 2022",
    desc: "By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping",
  },
  {
    img: "./assets/grid3.svg",
    alt: "grid3",
    title: "New Locator App For a New Company",
    date: "App Design - June 20, 2022",
    desc: "By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping",
  },
  {
    img: "./assets/grid4.svg",
    alt: "grid4",
    title: "Rental Rooms Web App Platform",
    date: "App Design - June 20, 2022",
    desc: "By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping",
  },
  {
    img: "./assets/grid5.svg",
    alt: "grid5",
    title: "Calendar App for Big SASS Company",
    date: "App Design - June 20, 2022",
    desc: "By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping",
  },
];

let users = [
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

$(document).ready(function () {
  // SERVICE LOGIC
  const $serviceList = $(".service-list");
  $serviceList.empty();

  $.each(cards, function (index, card) {
    const boxClass = `grid-${index + 1}`;
    let html = `<div class="box ${boxClass}">
                  <img src="${card.img}" alt="${card.alt}" />`;

    if (card.title && index + 1 === 1) {
      html += `<p>${card.date}</p>
               <a href="#">${card.title}</a>
               <p class="desc">${card.desc}</p>`;
    } else if (card.title) {
      html += `<p>${card.date}</p>
               <a href="#" class="small">${card.title}</a>`;
    }

    html += `</div>`;
    $serviceList.append(html);
  });

  // TESTIMONIAL LOGIC
  const $avatarList = $("#avatar-list");

  function renderAvatars() {
    $avatarList.empty();
    users.forEach((user, index) => {
      const thumb = $(`
          <div class="avatar-thumb avatar-thumb${
            index + 1
          }" data-index="${index}">
            <img src="${user.img}" alt="${user.name}">
          </div>
        `);
      $avatarList.append(thumb);
    });

    // const sizes = [50, 67, 86, 67, 50];
    // $(".avatar-thumb").each(function (i) {
    //   $(this).css({
    //     width: sizes[i] + "px",
    //     height: sizes[i] + "px",
    //   });
    // });

    const middleIndex = Math.floor(users.length / 2);
    $(".avatar-thumb").eq(middleIndex).addClass("active");
  }

  function updateMainUser(user) {
    $("#main-name").fadeOut(150, function () {
      $(this).text(user.name).fadeIn(150);
    });
    $("#main-job").fadeOut(150, function () {
      $(this).text(user.job).fadeIn(150);
    });
    $("#testimonial-text").fadeOut(200, function () {
      $(this).text(user.testimonial).fadeIn(200);
    });
  }

  function rotateUsers(clickedIndex) {
    const startIndex = (clickedIndex - 2 + users.length) % users.length;
    users = users.slice(startIndex).concat(users.slice(0, startIndex));
  }

  renderAvatars();

  const middleUser = users[Math.floor(users.length / 2)];
  updateMainUser(middleUser);

  $avatarList.on("click", ".avatar-thumb", function () {
    const index = $(this).data("index");

    rotateUsers(index);
    renderAvatars();

    const middleUser = users[Math.floor(users.length / 2)];
    updateMainUser(middleUser);
  });
});
