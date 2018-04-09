import React from "react";
import { connect } from "react-redux";
import Message from "components/Message";
import BotIsThinking from "components/BotIsThinking";
import Conversation from "components/Conversation";
import PropTypes from "prop-types";

function getMessageGroupProps(messages, index) {
  const firstOfAllMessages = index === 0;
  const lastOfAllMessages = index === messages.length - 1;
  const inGroup =
    (!firstOfAllMessages &&
      messages[index].origin === messages[index - 1].origin) ||
    (!lastOfAllMessages &&
      messages[index].origin === messages[index + 1].origin);
  const startingGroup =
    inGroup &&
    (firstOfAllMessages ||
      messages[index].origin !== messages[index - 1].origin);
  const endingGroup =
    inGroup &&
    (lastOfAllMessages ||
      messages[index].origin !== messages[index + 1].origin);
  return {
    inGroup,
    startingGroup,
    endingGroup
  };
}

function Chat(props) {
  const { messages, botIsThinking } = props;
  return (
    <Conversation>
      {messages.map(({ text, origin, _id }, index) => {
        return (
          <Message
            text={text}
            fromUser={origin !== "bot"}
            key={_id}
            {...getMessageGroupProps(messages, index)}
          />
        );
      })}
      <BotIsThinking show={botIsThinking} />
    </Conversation>
  );
}

Chat.propTypes = {
  messages: PropTypes.array,
  botIsThinking: PropTypes.bool
};

Chat.defaultProps = {
  messages: [],
  botIsThinking: false
};

function mapStateToProps(state) {
  return {
    messages: state.chat.messages,
    botIsThinking: state.chat.botIsThinking
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);