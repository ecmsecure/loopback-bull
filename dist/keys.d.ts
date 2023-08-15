import { BindingKey } from '@loopback/core';
import type { LoopbackBull } from './component';
/**
 * Binding keys used by this component.
 */
export declare namespace JobHandlerBindings {
    const COMPONENT: BindingKey<LoopbackBull<string, string>>;
    const JOB_HANDLER_OBSERVER_GROUP = "LoopbackBull";
    const JOB_HANDLER_CONSUMER_BASE_PATH = "LoopbackBull.consumers";
    const generateConsumerPathFromName: (name: string, suffix?: string | undefined) => string;
}
