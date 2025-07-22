import Container from './Container/Container';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';

export const App = () => {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
};
