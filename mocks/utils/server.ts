import { setupServer } from "msw/node";
import { handler } from "./handler";

/**
 * SSR Mock 환경 대응 설정
 */

export const server = setupServer(...handler);
