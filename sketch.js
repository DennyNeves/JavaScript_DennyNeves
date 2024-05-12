let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatória();
}

function palavraAleatória() {
  let palavra = ["Laurinha e Laís, papai ama vcs!",
    "VCs são lindas!",
    "VCs fazem o meu dia mais feliz!",
    "Papai sempre estará ao lado de vcs!",
  ];
  return random(palavra);
}

function inicializaCores() {
  background(color(random(0, 255), random(0, 255), random(0, 255)));
  fill("darkblue");
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  inicializaCores();

  let maximo = width;
  let minimo = 0;
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);

  text(parcial, 200, 200);
}
