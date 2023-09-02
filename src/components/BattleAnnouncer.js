import { useTypedMessage } from "../hooks/useTypedMessage";

export const BattleAnnouncer = ({ message }) => {
  const typedMessage = useTypedMessage(message);

  return (
    <div className={"font-thin text-white font-xl"}>
      <div className={""}>{typedMessage}</div>
    </div>
  );
};