import React from 'react';
import { CURRENT } from './renderAuthorize'; // eslint-disable-next-line import/no-cycle

import PromiseRender from './PromiseRender';

/**
 * Common permission check method
 * Common check permissions method
 * @param { permission judgment | Permission judgment } authority
 * @param { Your permission | Your permission description } currentAuthority
 * @param { passed components | Passing components } target
 * @param { failed components | no pass components } Exception
 */
const checkPermissions = (authority, currentAuthority, target, Exception) => {
  // No decision permission. View all by default
  // Retirement authority, return target;
  if (!authority) {
    return target;
  } // Array processing

  if (Array.isArray(authority)) {
    if (Array.isArray(currentAuthority)) {
      if (currentAuthority.some(item => authority.includes(item))) {
        return target;
      }
    } else if (authority.includes(currentAuthority)) {
      return target;
    }

    return Exception;
  } // string deal with

  if (typeof authority === 'string') {
    if (Array.isArray(currentAuthority)) {
      if (currentAuthority.some(item => authority === item)) {
        return target;
      }
    } else if (authority === currentAuthority) {
      return target;
    }

    return Exception;
  } // Promise deal with

  if (authority instanceof Promise) {
    return <PromiseRender ok={target} error={Exception} promise={authority}/>;
  } // Function deal with

  if (typeof authority === 'function') {
    try {
      const bool = authority(currentAuthority);
      // The return value after the function is executed is Promise

      if (bool instanceof Promise) {
        return <PromiseRender ok={target} error={Exception} promise={bool}/>;
      }

      if (bool) {
        return target;
      }

      return Exception;
    } catch (error) {
      throw error;
    }
  }

  throw new Error('unsupported parameters');
};

export { checkPermissions };

function check(authority, target, Exception) {
  return checkPermissions(authority, CURRENT, target, Exception);
}

export default check;
