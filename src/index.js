/* @flow */

import React from 'react'
import shallowEqual from 'fbjs/lib/shallowEqual' // eslint-disable-line

export const shallowCompare = (
  prevProps: TProps,
  nextProps: TProps,
): boolean => !shallowEqual(prevProps, nextProps)

export function pureComponent(
  Component: Function,
  compareFn: Function = shallowCompare,
): any {
  return class Wrapper extends React.Component <TProps, TState> {
    shouldComponentUpdate(nextProps) {
      return compareFn(this.props, nextProps)
    }
    render() {
      return <Component {...this.props} />
    }
  }
}

export default pureComponent
