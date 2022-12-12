const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchQuery = async (path) => {
  try {
    const res = await fetch(`${baseURL}/${path}`)
    const data = await res.json();
    
    return data;
  } catch(err) {
    throw new Error(err)
  }
}

export const calculateTotalCost = items => {
  return items.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2)
}