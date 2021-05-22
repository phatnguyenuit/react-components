import React, { memo } from 'react';

export const HelloComponent: React.FC = () => <div>Hello</div>;

const Hello = memo(HelloComponent);
Hello.displayName = 'Hello';

export default Hello;
