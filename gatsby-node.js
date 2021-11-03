/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

require('dotenv').config({ GATSBY_BACKEND_URL: `.env.${process.env.GATSBY_BACKEND_URL}` });

const fetch = require('node-fetch');
const path = require('path');

const ENDPOINTS = require('./src/static/endpoints.json');

const templates = {
  homePage: path.resolve('./src/containers/Homepage.js'),
};

exports.createPages = async ({
  actions: { createPage },
}) => {
  const getCategories = async () => {
    const categoriesResponse = await fetch(`${process.env.GATSBY_BACKEND_URL}/${ENDPOINTS.categories}`);
    const categoriesData = await categoriesResponse.json();
    const categories = categoriesData.reduce((result, current) => ({
      ...result,
      [current.id]: current.slug,
    }), {});

    return categories;
  };

  const categoriesById = await getCategories();

  const getContext = page => {
    const {
      id, slug, type, yoast_head_json: seo,
    } = page;

    const global = {
      id,
      seo,
      slug,
      type,
    };

    return global;
  };

  const getTemplate = page => {
    const {
      slug, type,
    } = page;

    console.log(type, slug);

    return templates.homePage;
  };

  const getPath = page => {
    const {
      categories, slug, type,
    } = page;

    if (slug === 'strona-glowna') {
      const pageSlug = '/';

      return pageSlug;
    }

    if (type === 'products') {
      const pageSlug = `/produkty/${slug}`;

      return pageSlug;
    }

    if (type === 'page') {
      return slug;
    }

    if (type === 'post') {
      const [category] = categories;

      return `/baza-wiedzy/${categoriesById[category]}/slug`;
    }

    return '/';
  };

  const getData = async endpoint => {
    const url = `${process.env.GATSBY_BACKEND_URL}/${endpoint}?per_page=100`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  };

  const getPages = async endpoints => {
    const data = await Promise.all(endpoints.map(async endpoint => getData(endpoint)));

    return data.flat();
  };

  const pages = await getPages([
    ENDPOINTS.pages,
    ENDPOINTS.posts,
    ENDPOINTS.products,
  ]);

  pages.forEach(page => {
    const pageConfig = {
      component: getTemplate(page),
      context: getContext(page),
      path: getPath(page),
    };

    createPage(pageConfig);
  });
};
