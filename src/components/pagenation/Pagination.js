import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as AntPagination } from 'antd';
import './Pagination.css';

/**
 * to simplify paging ui I used and.design's pagination component
 * for more info about ant paging component visit https://ant.design/components/pagination/
 */
export default function Pagination(props) {

  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>{"Prev"}</a>;
    }

    if (type === 'next') {
      return <a>{"Nex"}</a>;
    }

    return originalElement;
  }

  return (<div id='Pagination'>
    <AntPagination itemRender={itemRender} {...props} />
  </div>
  );
}

Pagination.propTypes = {
  total: PropTypes.number,
  pageSize: PropTypes.number,
  defaultPageSize: PropTypes.number,
  hideOnSinglePage: PropTypes.bool,
  showSizeChanger: PropTypes.bool,
  responsive: PropTypes.bool,
  onChange: PropTypes.func,
}

Pagination.defaultProps = {
  total: PropTypes.number,
  defaultPageSize: 16,
  hideOnSinglePage: false,
  showSizeChanger: false,
  responsive: true,
}