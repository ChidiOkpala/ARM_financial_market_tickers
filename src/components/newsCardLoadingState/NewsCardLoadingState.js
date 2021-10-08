import Skeleton from 'react-loading-skeleton';

import './NewsCardLoadingState.css';

export const NewsCardLoadingState = () => (
  <div className="skeleton-wrapper">
    <div>
      <Skeleton height={200} width="100%" />
      <div>
        <Skeleton height={20} width="100%" count={2} />
        <Skeleton height={20} width="75%" count={2} />
        <Skeleton height={20} width="50%" count={1} />
      </div>
      <div>
        <Skeleton height={20} width="100%" />
        <Skeleton height={20} width="50%" />
      </div>
    </div>
  </div>
);
