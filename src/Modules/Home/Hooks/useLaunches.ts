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

  const increasePage = () => {
    dispatch(HomeSlice.actions.increasePage());
  }

  return { launches, page, increasePage };
};

export default useLaunches;
