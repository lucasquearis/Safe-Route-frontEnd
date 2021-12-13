async function getAllPartners() {
  console.log("Iniciando fetch");
  try {
    const partners = await fetch(
      "https://grupo2-backend.herokuapp.com/partner"
    ).then((result) => result.json());
    console.log("concluido fetch");

    return partners;
  } catch (error) {
    throw new Error("Problemas com API");
  }
}

async function getPartnerById(id) {
  console.log("Iniciando fetch");
  try {
    const partners = await fetch(
      `https://grupo2-backend.herokuapp.com/partner/${id}`
    ).then((result) => result.json());
    console.log("concluido fetch");

    return partners;
  } catch (error) {
    throw new Error("Problemas com API");
  }
}

export { getAllPartners, getPartnerById };
