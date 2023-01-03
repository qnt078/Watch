import React,{ useEffect, useState} from "react";
import axios from "axios";
import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";
import { UR } from "../Redux/Url";
const Product = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get(`${UR}/api/products`);
      setProducts(data);
    };
    fetchproducts();
  }, []);
  const productList = products;

  const getProducts = (count) => {
    const max = productList.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return productList.slice(start, start + count);
  };
 

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [products]);
 

  return (
    <Helmet title={props.match.params.id}>
      <Section>
        <SectionBody>
          <ProductView product={products} />
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>khác</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={5} smCol={1} gap={20}>
            {getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                id={item._id}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
                rate={item.rating}
                review={item.numReviews}
              ></ProductCard>
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
