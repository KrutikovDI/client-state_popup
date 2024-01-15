const win = document.getElementById("subscribe-modal");
const close = document.querySelector(".modal__close_times");
if (!(getCookie("close") == "True")) {
      if (!win.classList.contains("modal_active")) {
      win.classList.add("modal_active");
    }
}

close.addEventListener("click", () => {
  win.classList.remove("modal_active");
  // document.cookie = "click=True";
  setCookie("click", "True")
  console.log(document.cookie);
});

function setCookie(name, value) {
  document.cookie = name + "=" + value;
}

function getCookie(name) {
  if (document.cookie) {
    const pairs = document.cookie.split(";");
    const cookie = pairs.find((p) => p.startsWith(name + "="));
    return cookie.substr(name.length + 1);
  }
}
