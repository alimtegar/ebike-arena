const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchProfile = async () => {
    let res;

    res = await fetch(apiUrl + 'items/profile');
    res = await res.json();

    return res.data[0];
};

export const fetchSlider = async () => {
    let res;

    res = await fetch(apiUrl + 'items/slider?fields=image,title,url&filter[status]=published&sort=sort');
    res = await res.json();
    let slider = res.data;

    // Fetch images
    res = await Promise.all(slider.map((sliderItem) => fetch(apiUrl + 'files/' + sliderItem.image + '?fields=private_hash')));
    res = await Promise.all(res.map((resItem) => resItem.json()));

    slider.map((sliderItem, key) => sliderItem.image = apiUrl + 'assets/' + res[key].data.private_hash + '?w=1400&h=1400&q=80&f=contain');

    return slider;
}

export const fetchMenu = async () => {
    let res;

    res = await fetch(apiUrl + 'items/menu?fields=title,url,position&filter[status]=published&sort=sort');
    res = await res.json();

    return res.data;
}

export const fetchServices = async () => {
    let res;

    res = await fetch(apiUrl + 'items/services?fields=title,description,image&filter[status]=published&sort=sort');
    res = await res.json();
    let services = res.data;

    // Fetch images
    res = await Promise.all(services.map((service) => fetch(apiUrl + 'files/' + service.image + '?fields=private_hash')));
    res = await Promise.all(res.map((resItem) => resItem.json()));

    services.map((service, key) => service.image = apiUrl + 'assets/' + res[key].data.private_hash + '?w=200&h=200&q=80&f=contain');

    return services;
}

export const fetchProducts = async (recommended, limit, sort, category = false, q = false) => {
    let res;

    // Parameters
    const recommendedParam = recommended ? '&filter[recommended]=' + + recommended : '';
    const sortParam = sort ? '&sort=' + sort : '';
    const limitParam = limit ? '&limit=' + limit : '';
    const categoryParam = category ? '&filter[category]=' + category : '';
    const qParam = q ? '&q=' + q : '';

    res = await fetch(apiUrl + 'items/products?fields=id,image,title,price,discount&filter[status]=published' + recommendedParam + sortParam + limitParam + categoryParam + qParam);
    res = await res.json();
    let products = res.data;

    // Fetch images
    res = await Promise.all(products.map((product) => fetch(apiUrl + 'files/' + product.image + '?fields=private_hash')));
    res = await Promise.all(res.map((resItem) => resItem.json()));

    products.map((product, key) => product.image = apiUrl + 'assets/' + res[key].data.private_hash + '?w=600&h=600&q=80&f=contain');

    return products;
}

export const fetchPosts = async () => {
    let res;

    res = await fetch(apiUrl + 'items/posts?fields=id,created_on,image,title&filter[status]=published&sort=created_on&limit=5');
    res = await res.json();
    let posts = res.data;

    // Fetch images
    res = await Promise.all(posts.map((post) => fetch(apiUrl + 'files/' + post.image + '?fields=private_hash')));
    res = await Promise.all(res.map((resItem) => resItem.json()));

    posts.map((post, key) => post.image = apiUrl + 'assets/' + res[key].data.private_hash + '?w=600&h=600&q=80&f=contain');

    return posts;
}

export const fetchProductCategories = async () => {
    let res;

    res = await fetch(apiUrl + 'items/product_categories?fields=id,title&filter[status]=published&sort=sort');
    res = await res.json();
    const productCategories = res.data;

    return productCategories;
}