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
import { useSelector, useDispatch } from 'react-redux';
import { addItemToBasket, } from '../../components/basket/basketSlice';
import {
  selectPageSize, selectProducts, selectPageIndex, setPageIndex,
  selectTotalCount, fetchNextPage, setBrandFilter,
  setTypesFilter, setSorting
} from './ProductBrowserSlice';
import { ItemTypeOptions } from '../../_constants';

/**
 * This is the main page where products are listed
 * @param {*} props no props required for now
 */
function ProductBrowser(props) {
  const productList = useSelector(selectProducts);
  const pageSize = useSelector(selectPageSize);
  const pageIndex = useSelector(selectPageIndex);
  const totalCount = useSelector(selectTotalCount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNextPage(1, pageSize))
  }, [])

  const onSortingChanged = (val) => {
    console.log('onSortingOptionChange:', val);
    dispatch(setSorting(val));
    dispatch(fetchNextPage(1, pageSize))
  };
  const onBrandSelectionChanged = (val) => {
    console.log('onBrandSelectionChanged:', val);
    dispatch(setBrandFilter(val));
    dispatch(fetchNextPage(1, pageSize))
  };

  const onTagFilterChanged = (val) => {
    console.log('onTagFilterChanged:', val);
    dispatch(fetchNextPage(1, pageSize))
  };

  const onItemTypeFilterChanged = (val) => {
    console.log('onItemTypeFilterChanged:', val);
    dispatch(setTypesFilter(val));
    dispatch(fetchNextPage(1, pageSize))
  };

  const onPaginationChange = (page, pageSize) => {
    console.log('page:', page, " pageSize:", pageSize);
    dispatch(setPageIndex(page));
    dispatch(fetchNextPage(page, pageSize))
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
            <TypeFilter types={ItemTypeOptions} onChange={onItemTypeFilterChanged} />
            <ContentBag>
              <ProductSlection products={productList} onAdd={addToBasket} />
            </ContentBag>
            <Pagination total={totalCount} pageSize={pageSize} pageIndex={pageIndex} onChange={onPaginationChange} />
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
