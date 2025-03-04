'use client';

import { Button, Input } from 'antd';
import '../assets/BlogDetail.css';
import '@/../../assets/root.css';

const { Search } = Input;

export default function BlogDetailSection() {
  return (
    <div className="detail-section ">
      <div className="title-and-search">
        <h3 className="blog-title">Blog Page</h3>
        <Search
          placeholder="Find Article by title"
          onSearch={() => console.log('hello')}
          className="blog-search"
        />
      </div>
      <p className="date-time">june 24,2024</p>
      <h4 className="blog-title">This is blog title question?</h4>
      <div className="blog-description">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. It is a long established fact that a
          reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
        </p>
        <Button block className="blog-button">
          Read more
        </Button>
      </div>
      <p className="date-time">june 24,2024</p>
      <h4 className="blog-title">This is blog title question?</h4>
      <div className="blog-description">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. It is a long established fact that a
          reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
        </p>
        <Button block className="blog-button">
          Read more
        </Button>
      </div>
      <p className="date-time">june 24,2024</p>
      <h4 className="blog-title">This is blog title question?</h4>
      <div className="blog-description">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. It is a long established fact that a
          reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
        </p>
        <Button block className="blog-button">
          Read more
        </Button>
      </div>
      <p className="date-time">june 24,2024</p>
      <h4 className="blog-title">This is blog title question?</h4>
      <div className="blog-description">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. It is a long established fact that a
          reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
        </p>
        <Button block className="blog-button">
          Read more
        </Button>
      </div>
    </div>
  );
}
