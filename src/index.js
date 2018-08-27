/* @flow */

import React, { Component } from 'react'
import shallowEqual from 'fbjs/lib/shallowEqual' // eslint-disable-line

export const shallowCompare = (
  prevProps: TProps,
  nextProps: TProps,
): boolean => !shallowEqual(prevProps, nextProps)

export function pureComponent(
  WrappedComponent: any,
  compareFn: Function = shallowCompare,
): any {
  WrappedComponent.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component' // eslint-disable-line no-param-reassign

  return class Wrapper extends Component <TProps, TState> {
    shouldComponentUpdate(nextProps: TProps) {
      return compareFn(this.props, nextProps)
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default pureComponent
