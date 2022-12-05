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