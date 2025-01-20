import { onMessage } from "webext-bridge/background";

export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });

  onMessage("ACTION", runAction);
  async function runAction({ data }) {
    console.log("Received message from popup:", data);
    return {
      message: `Received message: ${data}`,
    };
  }
});
