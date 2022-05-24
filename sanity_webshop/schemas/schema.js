import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import banner from './banner';
import footerdata from './footerdata';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([product, banner, footerdata]),
})
