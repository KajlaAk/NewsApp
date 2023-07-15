import React, { useEffect, useState } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import propTypes from "prop-types"
import InfiniteScroll from 'react-infinite-scroll-component';

const NewsComponent = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const CaptalizeLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const fetchData = async () => {
    const { page } = props;
    const { pageSize } = props;
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d9dc9a78ff8445bb821898cc83845327&page=${page}&pageSize=${pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const handleNextClick = async () => {
    if (page < Math.ceil(totalResults / props.pageSize)) {
      setPage(page + 1);
    }
  };

  const handlePreClick = async () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const fetchMoreData = async () => {
    setPage(page + 1);

    const { pageSize } = props;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d9dc9a78ff8445bb821898cc83845327&page=${page}&pageSize=${pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    setArticles([...articles, ...parsedData.articles]);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop:"70px" }}>Top Headlines of Social News - {CaptalizeLetter(props.category)}</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
      >
        <div className='container' style={{ padding: "30px" }}>
          <div className='row'>
            {articles.map((element, index) => (
              <div className='col-md-4' key={index}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

NewsComponent.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general',
}

NewsComponent.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
}

export default NewsComponent;
