import { render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('Skills', () => {
  const skills = ['React', 'TypeScript', 'Jest', 'React Testing Library'];

  test('renders correctly', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />);
    skills.forEach((skill) => {
      const listItemElements = screen.getAllByRole('listitem');
      expect(listItemElements).toHaveLength(skills.length);
    });
  });
});
