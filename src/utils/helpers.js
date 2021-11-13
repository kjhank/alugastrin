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
  const data = await getApiData(endpoints.pages, `slug=${pageSlug}`);
  const globalsData = await getApiData(endpoints.globals);
  const categories = await getApiData(endpoints.categories);
  const [pageData] = data;

  return {
    categories,
    globals: globalsData.acf,
    pageData,
  };
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

export const debounceFunction = (func, delay) => {
  let timer;

  return function (...args) {
    const self = this;

    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(self, args);
    }, delay);
  };
};
