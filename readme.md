# about

a higher-order component to reduce render times quickly for lazy people like me!


# install

```bash
# use npm
$ npm install rc-pure-component

# or yarn
$ yarn add rc-pure-component
```

# usage

### before

```javascript
const Component = ({ name = 'Hieu' }) => (<div>hello, {name}</div>)
```

### before

```javascript
import pure from 'rc-pure-component'

// normal
const Component = pure(({ name = 'Hieu' }) => (<div>hello, {name}</div>))

// custom
const shallowCompare = (prevProps, nextProps) => !(prevProps === nextProps)
const Component = pure(({ name = 'Hieu' }) => (<div>hello, {name}</div>), shallowCompare)
```

# compare

by default I use the calculation of fb, here:

```javascript
import shallowEqual from 'fbjs/lib/shallowEqual'

const shallowCompare = (prevProps, nextProps) => !shallowEqual(prevProps, nextProps)
```

alternatively, you can use the function of the lodash:

```javascript
import isEqual from 'lodash/isEqual'

const shallowCompare = (prevProps, nextProps) => !isEqual(prevProps, nextProps)
```
