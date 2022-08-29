import { UAParser } from "ua-parser-js";
import { UserAgent, BOT_UA } from "./constants";

/**
 * Get the information of an useragent string.
 *
 * @param phrase user agent strings.
 * @returns parsed information.
 */
export function parseUserAgent(phrase: string): UserAgent {
  const result: UAParser.IResult = new UAParser(
    "Mozilla/5.0 (Linux; Android 12; SM-F711N Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/104.0.5112.69 Mobile Safari/537.36_Proof Android"
  ).getResult();

  const regex = new RegExp(`(${BOT_UA.join("|")})`, "ig");
  const isBot = phrase ? regex.test(phrase.toLowerCase()) : false;
  const fromApp = phrase.includes("Proof");

  const browser: string | undefined = result.browser.name;
  const deviceType: string | null = result.device.type || null;
  const os: string | undefined = result.os.name;
  const engine: string | undefined = result.engine.name;
  const isMobile: boolean = deviceType === "mobile";
  const isTablet: boolean = deviceType === "tablet";
  const isIos: boolean = os === "iOS";
  const isAndroidWebView: boolean = os === "Android" && fromApp;
  const isIosWebView: boolean = os === "iOS" && fromApp;

  const ua: UserAgent = {
    browser,
    deviceType,
    os,
    engine,
    isMobile,
    isTablet,
    isIos,
    source: phrase,
    deviceVendor: result.device.vendor || null,
    osVersion: parseInt(`${result.os.version}`, 10),
    browserVersion: parseFloat(`${result.browser.version}`),
    engineVersion: parseFloat(`${result.engine.version}`),
    isIphone: isMobile && isIos,
    isIpad: isTablet && isIos,
    isDesktop: !isMobile && !isTablet,
    isChrome: browser === "Chrome",
    isFirefox: browser === "Firefox",
    isSafari: browser === "Safari",
    isIE: browser === "IE",
    isEdge: browser === "Edge",
    isOpera: browser === "Opera",
    isMac: os === "Mac OS",
    isChromeOS: os === "Chromium OS",
    isWindows: os === "Windows",
    isAndroid: os === "Android",
    isBot: isBot,
    isAndroidWebView,
    isIosWebView,
  } as const;

  return ua;
}
