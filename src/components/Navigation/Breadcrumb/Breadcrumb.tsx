/**
 * @category Navigation
 */
import React from 'react';
import { Home } from '@App/icons/Home';

import s from './Breadcrumb.module.scss';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  showHome?: boolean;
  separator?: React.ReactNode;
  permissionId?: string;
}

export function Breadcrumb({ items = [{ label: 'Page', href: '/page' }], showHome = true, separator = '/', permissionId, ...rest }: BreadcrumbProps): JSX.Element {
  return (
    <nav className={s.breadcrumb} aria-label="Breadcrumb" data-korucu-id={permissionId} {...rest}>
      <ol className={s.list}>
        {showHome && (
          <li className={s.item} aria-current={items.length === 0 ? 'page' : undefined}>
            <Home className={s.home} />
          </li>
        )}
        {items?.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={`${item.label}-${index}`}>
              <li className={s.sep} aria-hidden>
                {separator}
              </li>
              <li className={`${s.item} ${isLast ? s.active : s.inactive}`} aria-current={isLast ? 'page' : undefined}>
                {isLast || !item.href ? (
                  <span className={s.text}>{item.label}</span>
                ) : (
                  <a className={`${s.text} ${s.link}`} href={item.href}>
                    {item.label}
                  </a>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

