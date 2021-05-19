import React from 'react';

const SayHello: React.FC<SayHelloProps> = ({ name }) => (
  <div>Hey {name}, say hello to TypeScript.</div>
);

export default SayHello;

export interface SayHelloProps {
  name: string;
}
