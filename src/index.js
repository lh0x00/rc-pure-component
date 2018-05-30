/* @flow */

import { Component } from 'react'
import shallowEqual from 'fbjs/lib/shallowEqual' // eslint-disable-line

export const shallowCompare = (
  prevProps: TProps,
  nextProps: TProps,
): boolean => !shallowEqual(prevProps, nextProps)

export function pureComponent(
  renderFn: Function,
  compareFn: Function = shallowCompare,
): any {
  return class Wrapper extends Component <TProps, TState> {
    shouldComponentUpdate(nextProps) {
      return compareFn(this.props, nextProps)
    }
    render() {
      return renderFn(this.props)
    }
  }
}

export default pureComponent
