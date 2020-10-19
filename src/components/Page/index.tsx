import React from 'react';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay'

import { Container, Spacer } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            { id: 1, title: 'Model Y', subTitle: 'Order Online for Delivery'},
            { id: 2, title: 'Model X', subTitle: 'Order Online for Delivery'},
            { id: 3, title: 'Model 3', subTitle: 'Order Online for Delivery'},
            { id: 4, title: 'Model S', subTitle: 'Order Online for Delivery'},
            { id: 5, title: 'Only $1.49/Watt for Solar on Existing Roofs', subTitle: 'Order Online for Delivery'},
            { id: 6, title: 'Solar for New Roofs', subTitle: 'Solar Roof Costs Less Than a New Roof Plus Solar Panels'},
            { id: 7, title: 'Accessories', subTitle: 'Cable Organizer Quick Add'},
          ].map((item) => (
            <ModelSection
              key={item.id}
              className="colored"
              modelName={item.title}
              overlayNode={
                <DefaultOverlayContent
                  label={item.title}
                  description={item.subTitle}
                />
              }
            />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay></UniqueOverlay>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
