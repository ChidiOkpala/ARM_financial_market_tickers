import { ListConverter } from '../listConverter/ListConverter';
import { formatDate } from '../../helper/constants';
import './NewsCard.css';

export const NewsCard = ({
  title,
  description,
  keywords,
  url,
  image_url,
  source,
  published_at,
}) => {
  return (
    <div to={url} className="news-card-wrapper">
      <a href={url} target="__blank">
        <img alt={title} src={image_url} className="image" />
      </a>
      <div className="content">
        <h3 className="title">{title}</h3>
        <h5 className="description">{description}</h5>
        {keywords && (
          <>
            <h4>Keywords:</h4>
            <ListConverter keywords={keywords} />
          </>
        )}
        <p className="source">
          Source: <a href={`https://${source}`} target="__blank">{source}</a>
        </p>
        <p className="date">Published: {formatDate(published_at)}</p>
      </div>
    </div>
  )
};
