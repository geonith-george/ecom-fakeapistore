export const getPosts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const res = await response.json();
    return res;
}

export const getPost = async () => {
    const response = await fetch('https://fakestoreapi.com/products/1');
    const res = await response.json();
    return res;
}

