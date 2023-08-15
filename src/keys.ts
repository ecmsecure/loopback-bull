import { BindingKey, CoreBindings } from '@loopback/core';
import type { LoopbackBull } from './component';

/**
 * Binding keys used by this component.
 */
export namespace JobHandlerBindings {
  export const COMPONENT = BindingKey.create<LoopbackBull<string>>(
    `${CoreBindings.COMPONENTS}.LoopbackBull`,
  );

  export const JOB_HANDLER_OBSERVER_GROUP = 'LoopbackBull'

  export const JOB_HANDLER_CONSUMER_BASE_PATH = 'LoopbackBull.consumers'

  export const generateConsumerPathFromName =
    (name: string, suffix?: string) => `${JOB_HANDLER_CONSUMER_BASE_PATH}.${name}${suffix ?? ''}`
}
