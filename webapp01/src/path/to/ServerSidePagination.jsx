import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServerSidePagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('your-api-url', {
          params: {
            page: currentPage,
            limit: itemsPerPage
          }
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage, itemsPerPage]);

  // 处理页码点击事件
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        {/* 这里简单假设总页数为 10，实际需要从服务器获取 */}
        {Array.from({ length: 10 }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={index + 1 === currentPage}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServerSidePagination;