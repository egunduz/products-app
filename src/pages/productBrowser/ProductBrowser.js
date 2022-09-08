import React, { useState, useEffect, } from 'react'
import './ProductBrowser.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import CoreLayout from '../../containers/coreLayout/CoreLayout';
import ContentBag from "../../containers/contentBag/ContentBag";
import Basket from '../../components/basket/Basket';
import { Col, Row } from 'antd'
import SortingOption from './sortingOptions';
import BrandFilter from './brandFilter';
import TagFilter from './tagFilter';
import ProductSlection from '../../components/product/products';
import TypeFilter from './typeFilter';
import Pagination from '../../components/pagenation/Pagination';
import productApi from '../../api/productApi';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToBasket, } from '../../components/basket/basketSlice';

const types = [
  { name: "mug", value: "mug", },
  { name: "shirt", value: "shirt", },
];

/**
 * This is the main page where products are listed
 * @param {*} props no props required for now
 */
function ProductBrowser(props) {
  const [fetching, setFetching] = useState(false);
  const [productList, setProductList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, [])

  useEffect(() => {
    fetchProducts();
  }, [pageIndex])
  
  const fetchProducts = ()=> {
    setFetching(true);
    const filter = { page: pageIndex, limit: 16}
    productApi.getProducts(filter).then(res =>{
      const total = res.headers.get('X-Total-Count');
      setTotalCount(new Number(total));
      setFetching(false);
      res.json().then(data=>{
        setProductList(data);
      })
    }, (err)=>{ 
      setFetching(false);
    })
  }

  const onSortingChanged = (val) => {
    console.log('onSortingOptionChange:', val);

  };
  const onBrandSelectionChanged = (val) => {
    console.log('onBrandSelectionChanged:', val);

  };

  const onTagFilterChanged = (val) => {
    console.log('onTagFilterChanged:', val);

  };

  const onItemTypeFilterChanged = (val) => {
    console.log('onItemTypeFilterChanged:', val);

  };

  const onPaginationChange = (page, pageSize) => {
    console.log('page:', page, " pageSize:", pageSize);
    setPageIndex(page);
  };

  const addToBasket = (item) => {
    console.log("item:", item);
    dispatch(addItemToBasket(item));
  };

  return (
    <CoreLayout id='ProductBrowser'>
      <Header />
      <Row className={"content-row"}>
        <Col className='content-col' id='filter-col' >
          <ContentBag title={"Sorging"}>
            <SortingOption onChange={onSortingChanged} />
          </ContentBag>
          <ContentBag title={"Brands"}>
            <BrandFilter onChange={onBrandSelectionChanged} />
          </ContentBag>
          <ContentBag title={"Tags"}>
            <TagFilter onChange={onTagFilterChanged} />
          </ContentBag>
        </Col>
        <Col className='content-col' id='prod-col'>
          <>
            <h4 className="title">{"Products"}</h4>
            <TypeFilter types={types} onChange={onItemTypeFilterChanged} />
            <ContentBag>
              <ProductSlection products={productList} onAdd={addToBasket} />
            </ContentBag>
            <Pagination total={totalCount} onChange={onPaginationChange}/>
          </>
        </Col>
        <Col className='content-col' id='basket-col'>
          <Basket />
        </Col>
      </Row>
      <Footer />
    </CoreLayout>
  )
}

ProductBrowser.propTypes = {}

export default ProductBrowser
