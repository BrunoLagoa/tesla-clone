import React from 'react';
import { useTransform } from 'framer-motion';

import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';

import LogoSVG from '../../imagens/tesla.svg'

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo src={LogoSVG} alt="React Logo" />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Tesla © 2020</a>
          </li>
          <li>
            <a href="#">Privacy & Legal</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Get Newsletter</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Forums</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
          <li>
            <a href="https://brunocastro.dev">by Bruno Castro</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
