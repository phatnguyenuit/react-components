import { memo } from 'react';
import { SayHello } from '@phatnguyenuit/react-components';
import Hello from 'components/hello';
import ToggleButton from 'components/toggle-button';

export const HelloPageComponent: React.FC = () => (
  <div>
    <Hello />
    <SayHello name="Fast Nguyen" />
    <ToggleButton>Toggle button</ToggleButton>
  </div>
);

const HelloPage = memo(HelloPageComponent);
HelloPage.displayName = 'HelloPage';

export default HelloPage;
