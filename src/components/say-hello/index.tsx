import React, { useEffect, useState } from 'react';

const SayHello: React.FC<SayHelloProps> = ({ name }) => {
  const [count, setCount] = useState(3);
  const [intervalId, setIntervalId] = useState<number>();

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    setIntervalId(id);
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (count === 0) {
      setIntervalId(undefined);
      clearInterval(intervalId);
    }
  }, [count]);

  const message = count === 0 ? `Hey ${name}, say hello to TypeScript.` : count;

  return <div>{message}</div>;
};

export default SayHello;

export interface SayHelloProps {
  name: string;
}
