import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CountrySkleton = () => {
  return (
    <SkeletonTheme>
      <div className="country-information">
        <Skeleton className="img" />
        <div className="informartion-content">
          <Skeleton />
        </div>
      </div>
    </SkeletonTheme>
  );
};
