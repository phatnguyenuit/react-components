import React, { memo } from 'react';
import { useToggle } from '@phatnguyenuit/react-components';

export const ToggleButtonComponent: React.FC<ToggleButtonProps> = ({
  children,
}) => {
  const [isNight, toggle] = useToggle(false);

  return (
    <button type="button" onClick={toggle}>
      {children}
      <span style={{ marginLeft: 8 }}>{isNight ? '🌛' : '🌞'}</span>
    </button>
  );
};

const ToggleButton = memo(ToggleButtonComponent);
ToggleButton.displayName = 'ToggleButton';

export default ToggleButton;

export interface ToggleButtonProps {
  children?: React.ReactNode;
}
