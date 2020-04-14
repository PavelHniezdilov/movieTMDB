import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(null);

  return [isAuth];
};
