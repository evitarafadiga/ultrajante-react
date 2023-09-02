import { useTypedMessage } from "../hooks/useTypedMessage";

export const BattleAnnouncer = ({ message }) => {
  const typedMessage = useTypedMessage(message);

  return (
    <div className={"text-white font-xl"}>
      <div className={""}>{typedMessage}</div>
    </div>
  );
};