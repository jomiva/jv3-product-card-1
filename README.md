# ESTO ES UN README

## Ejemplo

```
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from 'jv3-product-card-1';
```

```
<ProductCard
        product={product}
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
```
