import styled from 'styled-components';

import ModelY from '../../imagens/ModelY.jpeg'
import ModelX from '../../imagens/ModelX.jpeg'
import Model3 from '../../imagens/Model3.jpeg'
import ModelS from '../../imagens/ModelS.jpeg'
import SolarPanels from '../../imagens/SolarPanels.jpeg'
import SolarRoof from '../../imagens/SolarRoof.jpeg'
import Accessories from '../../imagens/Accessories.jpeg'

// export const Container = styled.div`
//   .colored:nth-child(1) {
//     background: #f1ffe7;
//   }
//   .colored:nth-child(2) {
//     background: #dfffd9;
//   }
//   .colored:nth-child(3) {
//     background: #cdfeca;
//   }
//   .colored:nth-child(4) {
//     background: #bbfebb;
//   }
//   .colored:nth-child(5) {
//     background: #a9fdac;
//   }
//   .colored:nth-child(6) {
//     background: #90f29c;
//   }
//   .colored:nth-child(7) {
//     background: #77e68c;
//   }
// `;

export const Container = styled.div`
  .colored:nth-child(1) {
    background-image: url(${ModelY});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .colored:nth-child(2) {
    background-image: url(${ModelX});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .colored:nth-child(3) {
    background-image: url(${Model3});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .colored:nth-child(4) {
    background-image: url(${ModelS});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .colored:nth-child(5) {
    background-image: url(${SolarPanels});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .colored:nth-child(6) {
    background-image: url(${SolarRoof});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .colored:nth-child(7) {
    background-image: url(${Accessories});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #77e68c;
`;