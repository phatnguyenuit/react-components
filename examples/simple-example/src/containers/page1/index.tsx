import Hello from 'components/hello';
import React, { memo } from 'react';

export const Page1Component: React.FC = () => <Hello />;

const Page1 = memo(Page1Component);
Page1.displayName = 'Page1';

export default Page1;
