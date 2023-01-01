import React, { Dispatch, ReactElement, SetStateAction } from "react";

import { useQueryClient } from "react-query";

interface SquidRefreshButtonProps {
  setFormSuccess: Dispatch<SetStateAction<boolean>>;
}
const SquidRefreshButton = ({ setFormSuccess }: SquidRefreshButtonProps): JSX.Element => {
  const queryClient = useQueryClient();
  const refresh = () => {
    queryClient.invalidateQueries({ queryKey: ["squids"] });
    setFormSuccess(false);
  };

  return (
    <div>
      <button type="button" onClick={() => refresh()} className="form__button form__button--active">
        click to see your new Squid!
      </button>
    </div>
  );
};

export { SquidRefreshButton };
