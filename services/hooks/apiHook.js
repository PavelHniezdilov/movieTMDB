import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

export const useApi = (data, actions) => {
  const [isRestart, setIsRestart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const loadCurrentData = useCallback(async () => {
    setError(null);
    try {
      await dispatch(actions);
    } catch (err) {
      setError(err.message);
    }
  }, [dispatch, setError, isRestart]);

  useEffect(() => {
    setIsLoading(true);
    loadCurrentData().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadCurrentData]);

  const restart = () => {
    setIsRestart(prevState => !prevState);
  };

  return { data, isLoading, error, loadCurrentData, restart };
};
