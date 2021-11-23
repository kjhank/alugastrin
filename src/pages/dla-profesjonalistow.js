import React from 'react';
import PropTypes from 'prop-types';

import { getPageData } from '@utils/api';

import {
  MaintenanceContainer, ProfessionalsContainer,
} from '@containers';

const ProfessionalsPage = ({
  serverData: {
    maintenance, pageData: {
      acf, title: { rendered: title },
    },
  },
  ...props
}) => {
  if (maintenance.isInMaintenance) {
    return (
      <MaintenanceContainer
        background={maintenance.maintenanceBackground}
        message={maintenance.maintenanceMessage}
        title={title}
        {...props}
      />
    );
  }

  return (
    <ProfessionalsContainer
      acf={acf}
      {...props}
    />
  );
};

ProfessionalsPage.propTypes = {
  serverData: PropTypes.shape({
    maintenance: PropTypes.shape({
      isInMaintenance: PropTypes.bool,
      maintenanceBackground: PropTypes.shape({}),
      maintenanceMessage: PropTypes.string,
    }),
    pageData: PropTypes.shape({
      acf: PropTypes.shape({
        articles: PropTypes.shape({}),
        carousel: PropTypes.arrayOf(PropTypes.shape({})),
        descriptions: PropTypes.arrayOf(PropTypes.shape({})),
        video: PropTypes.shape({}),
      }),
      title: PropTypes.shape({
        rendered: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default ProfessionalsPage;

export const getServerData = async () => {
  const slug = 'dla-profesjonalistow';
  const pageData = await getPageData(slug);

  const {
    pageData: {
      acf: {
        isInMaintenance, maintenanceBackground, maintenanceMessage,
      },
    },
  } = pageData;

  if (isInMaintenance) {
    return {
      props: {
        ...pageData,
        maintenance: {
          isInMaintenance,
          maintenanceBackground,
          maintenanceMessage,
        },
      },
      status: 503,
    };
  }

  return {
    props: {
      ...pageData,
    },
    status: 200,
  };
};
