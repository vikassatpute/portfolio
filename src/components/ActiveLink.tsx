'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React, { ReactElement } from 'react';

interface CustomProps {
  isActive?: boolean;
  className?: string;
}

interface ActiveLinkProps {
  href: string;
  children: ReactElement<CustomProps> | ReactElement<CustomProps>[];
}

export default function ActiveLink({ href, children }: ActiveLinkProps): JSX.Element {
  const segment = useSelectedLayoutSegment();
  const isActive = href === segment;

  // Handle single or multiple children
  const clonedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement<CustomProps>(child)) {
      return React.cloneElement(child, {
        isActive,
        className: `${child.props.className || ''} ${isActive ? 'active-class' : ''}`,
      });
    }
    return child;
  });

  return (
    <Link
      href={`/${href}`}
      className="hover:color-gradient flex items-center hover:underline hover:decoration-white"
    >
      {clonedChildren}
    </Link>
  );
}

interface IconProps extends React.HTMLAttributes<HTMLSpanElement>, CustomProps {}

export const IconWithActiveClass: React.FC<IconProps> = ({ className, isActive, ...props }) => {
  return (
    <span
      className={`${className} ${isActive ? 'text-[#89a5df]' : ''} hover:text-[#89a5df]`}
      {...props}
    >
      {props.children}
    </span>
  );
};

interface TextProps extends React.HTMLAttributes<HTMLSpanElement>, CustomProps {}

export const TextWithActiveClass: React.FC<TextProps> = ({ className, isActive, ...props }) => {
  return (
    <span
      className={`${className} ${isActive ? 'color-gradient underline decoration-white' : 'hover:color-gradient'}`}
      {...props}
    >
      {props.children}
    </span>
  );
};
