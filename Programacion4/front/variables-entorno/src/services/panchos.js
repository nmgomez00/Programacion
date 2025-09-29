const { VITE_API_URL: apiUrl } = import.meta.env;

export const getAllPanchos = async () => {
  const response = await fetch(`${apiUrl}/panchos`);
  const data = await response.json();
  return data;
};

export const createPancho = async (pancho) => {
  const response = await fetch(`${apiUrl}/panchos `, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pancho),
  });
  const data = await response.json();
  return data;
};
