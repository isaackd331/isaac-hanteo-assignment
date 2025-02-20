import { setupWorker } from "msw/browser";
import { handler } from "./handler";

/**
 * CSR Mock 환경 대응 설정
 */

export const browser = setupWorker(...handler);
