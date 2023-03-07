import {Container} from './App.styled'

export const App = () => {
  return (
    <Container>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
    </Container>
  );
};
