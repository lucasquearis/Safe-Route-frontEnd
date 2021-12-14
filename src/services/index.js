async function getAllPartners() {
  try {
    const partners = await fetch(
      "https://grupo2-backend.herokuapp.com/partner"
    ).then((result) => result.json());

    return partners;
  } catch (error) {
    throw new Error("Problemas com API");
  }
}

async function getPartnerById(id) {
  try {
    const partners = await fetch(
      `https://grupo2-backend.herokuapp.com/partner/${id}`
    ).then((result) => result.json());

    return partners;
  } catch (error) {
    throw new Error("Problemas com API");
  }
}

async function loginUser(body) {

  const config = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const partners = await fetch(
      "https://grupo2-backend.herokuapp.com/login",
      config
    ).then((result) => result.json());

    return partners;
  } catch (error) {
    throw new Error("Problemas com API");
  }
}

export { getAllPartners, getPartnerById, loginUser };
