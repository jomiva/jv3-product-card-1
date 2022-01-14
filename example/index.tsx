import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

const product1 = {
  id: '1',
  title: 'Coffee Mug - card',
};

const App = () => {
  return (
    <ProductCard
      product={product1}
      initialValues={{
        count: 2,
        maxCount: 12,
      }}
    >
      {({ reset, increaseBy, count, isMaxCountReached }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
