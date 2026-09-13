async function buscarDados(termo) {
  const area = document.getElementById("resultado");
  area.innerHTML = "Carregando...";
  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${termo}`);
    if (!resposta.ok) throw new Error("Nao encontrado");
    const dados = await resposta.json();
    area.innerHTML = `
      <h2>${dados.name}</h2>
      <img src="${dados.sprites.front_default}" alt="${dados.name}">
      <p>Altura: ${dados.height} | Peso: ${dados.weight}</p>
    `;
  } catch (erro) {
    area.innerHTML = "<p>Ops! Nada encontrado. Tente outro termo.</p>";
  }
}

document.getElementById("botao-buscar").addEventListener("click", () => {
  const termo = document.getElementById("campo-busca").value.toLowerCase().trim();
  if (termo) buscarDados(termo);
});