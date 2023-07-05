import { useParams } from 'react-router-dom';
import './SingleArticle.css';

const SingleArticle = ({ articles }) => {
  const params = useParams();
  
  const article = articles.find(({ id }) => id === params.id);
  
  return (
    <div className='singleArticle'>
      <h1>{article?.title}</h1>
      <img
        src={article?.imageUrl}
        alt={article?.title}
      />
      <p>
        {article?.body}
      </p>
    </div>
  );
};

export default SingleArticle;