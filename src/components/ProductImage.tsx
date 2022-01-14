import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface ProductImageProps {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

export const ProductImage = ({
  img = '',
  className,
  style,
}: ProductImageProps) => {
  const { product } = useContext(ProductContext);

  const image = () => {
    if (img) {
      return img;
    }

    if (product.img) {
      return product.img;
    }

    return noImage;
  };

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={image()}
      alt="Product"
      style={style}
    />
  );
};
