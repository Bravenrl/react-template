import { render, screen } from '@testing-library/react';

import TemplateName from './TemplateName';

describe('<TemplateName />', () => {
  test('it should mount', () => {
    render(<TemplateName />);

    const templateName = screen.getByText('TemplateName');

    expect(templateName).toBeInTheDocument();
  });
});
