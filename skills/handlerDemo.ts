export async function getCurrentTime() {
  return { currentTime: new Date().toISOString() };
}

export async function handleMessage(message: string) {
  if (message.toLowerCase().includes("time")) {
    return await getCurrentTime();
  }

  if (message.toLowerCase().includes("listing")) {
    return {
      response: "I can show you some listings.",
    };
  }

  if (message.toLowerCase().includes("market")) {
    return {
      response: "Checking the current market...",
    };
  }

  return { response: "I could not understand the request." };
}

async function main() {
  console.log(await handleMessage("What time is it?"));
  console.log(await handleMessage("Show me some listings"));
  console.log(await handleMessage("How is the market?"));
}

main();
