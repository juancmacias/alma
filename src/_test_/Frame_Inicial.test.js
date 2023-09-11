import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import Frame from '../Componentes/Frame';

test('Create scene principal', async () => {
  const elemento = document.createElement('Scene');
  render(<Frame/>, elemento)
});
