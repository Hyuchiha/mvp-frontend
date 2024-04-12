"use client";

import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

type Props = {
  message: string;
  type: MessageTypes;
}

export enum MessageTypes {
  ERROR,
  ALERT,
  SUCCESS
}

function SnackMessage({ message, type }: Props) {

  const getRenderIcon = () => {
    switch (type) {
      case MessageTypes.ALERT:
        return null;
      case MessageTypes.ERROR:
        return (
          <ExclamationCircleIcon
            className="w-6 h-6"
            color="#d52a2a"
          />
        );
      case MessageTypes.SUCCESS:
      default:
        return (
          <CheckCircleIcon
            className="w-6 h-6"
            color="#004255"
          />
        );
    }
  };


  return (
    <div className="flex flex-row items-center"
    >
      {getRenderIcon()}
      <span className="ml-2 font-medium text-sm text-primaryText">
        {message}
      </span>
    </div>
  )

}

export default SnackMessage;