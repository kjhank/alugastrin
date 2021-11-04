import endpoints from '@static/endpoints';

export { mediaQueries } from '@utils/rwd';

export const isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

export const getApiData = async (endpoint, params = '?per_page=100') => {
  const url = `${process.env.GATSBY_BACKEND_URL}/${endpoint}${params}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const getPageData = async pageSlug => {
  const data = await getApiData(endpoints.pages, `?slug=${pageSlug}`);
  const globalsData = await getApiData(endpoints.globals);
  const [pageData] = data;

  return {
    globals: globalsData.acf,
    pageData,
  };
};
