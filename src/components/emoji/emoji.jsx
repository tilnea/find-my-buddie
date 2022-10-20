import React from "react";

import { ReactComponent as EmojiGrinningIcon } from "./emoji-grinning.svg";
import { ReactComponent as EmojiHappyIcon } from "./emoji-happy.svg";
import { ReactComponent as EmojiIndifferentIcon } from "./emoji-indifferent.svg";
import { ReactComponent as EmojiSadIcon } from "./emoji-sad.svg";

/* exports ArrowIcon & ArrowIconDown as the same image since down
was previously known as just 'ArrowIcon', to avoid introducing breaking changes. */
// eslint-disable-next-line object-shorthand
export default {
  EmojiHappyIcon,
  EmojiGrinningIcon,
  EmojiIndifferentIcon,
  EmojiSadIcon,
};
