import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchSlice, SearchSelectors } from '../Redux/SearchRedux';

type useSearchParams = {
  date: string,
};

const useSearch = ({ date }: useSearchParams) => {
  const launches = useSelector(SearchSelectors.launches);
  const isLoading = useSelector(SearchSelectors.isLoading);
  const error = useSelector(SearchSelectors.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SearchSlice.actions.searchLaunches(date));
  }, [date]);

  return { launches, isLoading, error };
};

export default useSearch;
