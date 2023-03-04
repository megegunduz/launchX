import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomeSlice, HomeSelectors } from '../Redux/HomeRedux';

const useLaunches = () => {
  const launches = useSelector(HomeSelectors.launches);
  const page = useSelector(HomeSelectors.page);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HomeSlice.actions.fetchLaunches());
  }, [page]);

  return { launches, page };
};

export default useLaunches;
