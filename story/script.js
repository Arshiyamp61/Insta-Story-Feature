var arr = [
  {
    dp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww",
  },
];
var story = document.querySelector(".story");
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += ` <div class="story1">
          <img  id="${idx}"
            src="${elem.dp}"
            alt=""
          />
        </div>
  `;
});

story.innerHTML = clutter;

story.addEventListener("click", function (dets) {
  document.querySelector(".full-screen").style.display = "block";
  document.querySelector(".full-screen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  }`;
});
