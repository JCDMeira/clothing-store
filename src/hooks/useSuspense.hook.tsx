import { ReactNode, Suspense } from "react";

export const useSuspense = () => {
  const wrappInSuspense = (component: ReactNode): JSX.Element => {
    return <Suspense fallback={<div>loading...</div>}>{component}</Suspense>;
  };

  return { wrappInSuspense };
};
