// const form = document.querySelector("form");

// const textREA = document.querySelector("#input");
// const msg = document.querySelector("#mg");
// let post = document.querySelector("#post");
// let para = document.querySelector(".para");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   console.log("button click");
//   formvalidation();
// });

// let formvalidation = () => {
//   if (textREA.value === "") {
//     msg.innerHTML = "post cannot be blank";
//     console.log("failure");
//   } else {
//     msg.innerHTML = "";
//     console.log("sucess");
//     acessdata();
//   }
// };

// let data = {};

// let acessdata = () => {
//   data["text"] = textREA.value;
//   // console.log(data);
//   createdPost();
// };

// let createdPost = () => {
//   post.innerHTML += `
//   <div>
//   <p class="para">${data.text}</p>
//   <span class="option">
//     <i onClick= "editpost(this)" class="bx bx-message-alt-edit"></i>
//     <i onClick ="detedpost(this)" class="bx bxs-message-alt-x"></i>
//   </span>
// </div>

//   `;
//   textREA.value = "";
// };
// document.parentElement;
// let detedpost = (e) => {
//   e.parentElement.parentElement.remove();
// };

// let editpost = (e) => {
//   textREA.value = e.parentElement.previousElementSibling.innerHTML;
//   e.parentElement.parentElement.remove();
// };
let closeplus = document.querySelector(".closeplus");
let addnew = document.querySelector(".addnew");
let form = document.querySelector(".form");
let inputtext = document.querySelector(".input");
let add = document.querySelector(".add");
let mg = document.querySelector(".mg");
let datetime = document.querySelector("#datetime");
let textREA = document.querySelector(".texta");
let task = document.querySelector("#tasks");
let body = document.querySelector("body");

addnew.addEventListener("click", () => {
  form.classList.toggle("togle");
  // body.style.filter = "blur(4px)";
  // form.style.filter = "0px";
});

// closeplus.addEventListener("click", () => {
//   form.classList.toggle("togle");
//   data.map((x, y) => {
//     return (task.innerHTML += `
//   <div id=${y}>
//   <span>${x.text}</span>
//   <span class="date">${x.data}</span>
//   <p> ${x.description}</p>
//   <span class="option">

//     <i onClick="editpost(this)"  class="fa-regular fa-pen-to-square"></i>

//     <i onClick="detetetask(this)" class="fa-solid fa-trash"></i>
//   </span>
//   </div>
//   `);
//   });
// });

// closeplus.click();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formvalidation();
});

let formvalidation = () => {
  if (inputtext.value === "") {
    mg.innerHTML = "task can not be blank..";
  } else {
    acceptdata();

    (() => {
      add.addEventListener("click", () => {
        form.classList.toggle("togle");
      });
    })();

    add.click();
  }
};

let data = [];

let acceptdata = () => {
  data.push({
    text: inputtext.value,
    data: datetime.value,
    description: textREA.value,
  });

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
  createdPost();
};
let createdPost = () => {
  task.innerHTML = "";
  data.map((x, y) => {
    return (task.innerHTML += `
<div id=${y}>
<span>${x.text}</span>
<span class="date">${x.data}</span>
<p> ${x.description}</p>
<span class="option">
  <i onClick="editpost(this)" class="bx bx-message-alt-edit"></i>
  <i onClick="detetetask(this)" class="bx bxs-message-alt-x"></i>
</span>
</div>
`);
  });

  resetform();
};
let detetetask = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement, 1);
  localStorage.setItem("data", JSON.stringify(data));
};
let editpost = (e) => {
  // e.remove();
  form.classList.remove("togle");
  let selettask = e.parentElement.parentElement;
  inputtext.value = selettask.children[0].innerHTML;
  datetime.value = selettask.children[1].innerHTML;
  textREA.value = selettask.children[2].innerHTML;
  // mg.innerHTML = selettask.children[3].innerHTML;
  selettask.remove();
  detetetask(e);
};
let resetform = () => {
  inputtext.value = "";
  datetime.value = "";
  textREA.value = "";
  mg.innerHTML = "";
};

// document.parentElement.

(() => {
  data = JSON.parse(localStorage.getItem("data"));
  // console.log(data);
})();
