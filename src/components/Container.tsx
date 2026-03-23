import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  maxWidth = 'lg',
}) => {
  const maxWidthMap: Record<string, string> = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-4xl',
    xl: 'max-w-5xl',
    '2xl': 'max-w-6xl',
  };

  return (
    <div className={`mx-auto px-4 ${maxWidthMap[maxWidth]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
