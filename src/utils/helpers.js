import endpoints from '@static/endpoints';

export { mediaQueries } from '@utils/rwd';

export const isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

export const getApiData = async (endpoint, params = 'per_page=100') => {
  const url = `${process.env.GATSBY_BACKEND_URL}/${endpoint}?${params}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
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

export const getProducts = async () => {
  const data = await getApiData(endpoints.products);
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
};

export const getProduct = async slug => {
  const data = await getApiData(endpoints.products, `slug=${slug}`);

  return data;
};

export const debounceFunction = (func, delay) => {
  let timer;

  function debounced(...args) {
    const self = this;

    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(self, args);
    }, delay);
  }

  return debounced;
};
