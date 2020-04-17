import React from 'react';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import CardList from './components/CardList';
import Chart from './components/Chart';
import TableByCounty from './components/TableByCounty';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="md" style={{ marginTop: '60px' }}>
        <CardList />
        <Chart />
        <TableByCounty />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
