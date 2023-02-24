import { render } from '@testing-library/react';
import Header from '../Header';

test('Logo should load on rendering header', () => {
  // Load Header
  const header = render(<Header />);
  console.log(header);

  // Check of logo is loaded
});
