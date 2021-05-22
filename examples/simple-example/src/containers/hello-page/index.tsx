import { memo } from 'react';
import { SayHello } from '@phatnguyenuit/react-components';
import Hello from 'components/hello';

export const HelloPageComponent: React.FC = () => (
  <div>
    <Hello />
    <SayHello name="Fast Nguyen" />
  </div>
);

const HelloPage = memo(HelloPageComponent);
HelloPage.displayName = 'HelloPage';

export default HelloPage;
