import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Main } from '@components';
import { ArrowRight } from '@icons';

import { Header } from '@components/ProductsPage';
import {
  ArrowWrapper,
  Description,
  Image,
  List,
  Name,
  Pipe,
  Product,
  SectionHeading,
  Text,
} from '@components/ProductsPage/Products/Products.styled';
import {
  CategoryContainer,
  CategoryDescription,
  DecorationContainer,
} from '@components/ProductsPage/Categories/Categories.styled';
import sanitize from 'sanitize-html';

export const renderName = name => {
  const [
    first,
    second,
  ] = name.split('|');

  return (
    <Name>
      {first}
      <Pipe>|</Pipe>
      <span>{second}</span>
    </Name>
  );
};

export const ProductCategoryContainer = ({
  description,
  groups,
  refs,
  title,
}) => {
  const parsedDescription = sanitize(description, {
    allowedTags: [
      'strong',
      'em',
    ],
  });

  return (
    <Main refs={refs}>
      <Header title={title} />
      <CategoryContainer>
        <CategoryDescription
          dangerouslySetInnerHTML={{ __html: parsedDescription }}
        />
      </CategoryContainer>
      {groups.map(group => (
        <section key={group.groupName}>
          <CategoryContainer>
            <SectionHeading>{group.groupName}</SectionHeading>
            <List>
              {group.products.map(product => (
                <Product key={product.acf.name}>
                  <Link to={`/produkty/${product.post_name}`}>
                    <Image
                      image={product.acf.thumbnail}
                      loading="eager"
                    />
                    {renderName(product.acf.name)}
                    <Description>{product.acf.intro}</Description>
                    <Text
                      dangerouslySetInnerHTML={{
                        __html: sanitize(product.acf.listingDescription),
                      }}
                    />
                    <ArrowWrapper>
                      Zobacz produkt
                      <ArrowRight />
                    </ArrowWrapper>
                  </Link>
                </Product>
              ))}
            </List>
          </CategoryContainer>
          {group.hasDecoration && (
            <DecorationContainer
              className={`container-${group.decoration.cssClass}`}
            >
              <Image
                className={`decoration decoration-${group.decoration.cssClass}`}
                image={group.decoration.image}
              />
            </DecorationContainer>
          )}
        </section>
      ))}
    </Main>
  );
};

ProductCategoryContainer.propTypes = {
  description: PropTypes.string.isRequired,
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      decoration: PropTypes.shape({}),
      groupName: PropTypes.string,
      hasDecoration: PropTypes.bool,
      products: PropTypes.arrayOf(PropTypes.shape({})),
    })
  ).isRequired,
  refs: PropTypes.shape({}).isRequired, //
  title: PropTypes.string.isRequired,
};
