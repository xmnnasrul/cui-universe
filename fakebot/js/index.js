const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders")
const container = document.getElementById("container")

let init = 0;
const botSay = (data) => {
  return [
    `Perkenalkan nama saya XBot, siapa mana kamu?`,
    `Halo ${data?.nama}, berapa usia kamu?`,
    `Ohhh ${data?.usia}, hobi kamu apa ya?`,
    `wiiihh sama dong aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
    `ohhh ${data?.pacar}, ya udah kalau gitu, udahan ya?`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
  if (jawaban.value.length < 1) return alert ("silahkan diisi dulu")
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) { 
 loaders.style.display = "block"
 container.style.filter = "blur(8px)"

  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
    loaders.style.display = "none"
    container.style.filter = "none"
  }, [1000]);
  usersData.push(jawaban.value);
  jawaban.value = ``;
}

function finishing() {
  pertanyaan.innerHTML = `Thank u ya ${usersData[0]} udah main ke XBot😁, kali-kali kita main ${usersData[2]} bareng ya!`;
  jawaban.value = `siap Thanks juga`;
}

function botEnd() {
  alert(`terimakasih ${usersData[0]} sudah berkujung😍`)
  window.location.reload();
}
