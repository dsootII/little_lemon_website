import { render, screen } from '@testing-library/react';
import App from './App';
import ReservationForm from './components/ReservationPage_Components/ReservationForm';



test('Booking form button text displays', () => {
  render(<ReservationForm/>);
  const buttonText = screen.getByText("Make your reservation");
  expect(buttonText).toBeInTheDocument();
});