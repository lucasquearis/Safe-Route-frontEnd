async function getAllPartners() {
  console.log("Iniciando fetch");
  try {
    const partners = await fetch(
        "https://grupo2-backend.herokuapp.com/partner"
      ).then((result) => result.json());
      console.log('concluido fetch')
    
      return partners;
  } catch (error) {
      throw new Error('Deu pau na API /partner')
  }
}

export default getAllPartners;

