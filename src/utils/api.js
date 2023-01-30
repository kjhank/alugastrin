import endpoints from '@static/endpoints';

export const getApiData = async (endpoint, params = 'per_page=100') => {
  const url = `${process.env.GATSBY_BACKEND_URL}/${endpoint}?${params}`;

  console.log(url);

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.length < 1) {
      throw new Error({
        errorCode: 404,
        message: 'Not found',
      });
    }

    return endpoint.includes('globals') ?
      data :
      data.map(item => ({
        ...item,
        yoast_head: null,
      }));
  } catch (error) {
    return error;
  }
};

export const getPageData = async pageSlug => {
  const globalsData = await getApiData(endpoints.globals);
  const categories = await getApiData(endpoints.categories);

  const globals = {
    categories,
    globals: globalsData.acf,
  };

  if (pageSlug) {
    const data = await getApiData(endpoints.pages, `slug=${pageSlug}`);

    const [pageData] = data;

    return {
      ...globals,
      pageData,
    };
  }

  return globals;
};

export const getPosts = async (numberPerPage = 23, page = 1, category) => {
  const params = new URLSearchParams(category ?
    {
      category,
      page,
      per_page: numberPerPage,
    } :
    {
      page,
      per_page: numberPerPage,
    }).toString();

  const data = await getApiData(endpoints.posts, params);

  return data;
};

export const getProducts = async (products = null) => {
  const productsString = products ? new URLSearchParams({ include: products }).toString() : null;

  try {
    const data = products ?
      await getApiData(endpoints.products, productsString) :
      await getApiData(endpoints.products);
    const [
      firstGroup,
      secondGroup,
    ] = [
        data.filter(item => !item.acf.isInSecondGroup),
        data.filter(item => item.acf.isInSecondGroup),
      ];

    return [
      firstGroup,
      secondGroup,
    ];
  } catch (error) {
    return error;
  }
};

export const getProduct = async slug => {
  const data = await getApiData(endpoints.products, `slug=${slug}`);

  return data;
};

export const getPost = async slug => {
  try {
    const [data] = await getApiData(endpoints.posts, `slug=${slug}`) || [];

    return data;
  } catch (error) {
    return error;
  }
};
