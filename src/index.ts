// Create an eventsObserver to avoid coupling
const EventsObserver = (() => {
    const events: EventsType = {};

    const subscribe = (eventName: string, eventHandler: EventHandlerType) => {
        // If the provided event name is present in events object, add the passed in
        // eventHandler to that event's list, if not create a new event and add the event handler
        if (events.eventName === undefined) {
            events.eventName = [];
        }
        events.eventName.push(eventHandler);
    };
    const unsubscribe = (eventName: string, eventHandler: EventHandlerType) => {
        if (eventName in events) {
            events.eventName = events.eventName.filter(fn => JSON.stringify(fn) !== JSON.stringify(eventHandler));
        }
    };
    const publish = <T>(eventName: string, data?: T) => {
        events.eventName.forEach(fn => fn(data));
    };

    return {
        subscribe,
        unsubscribe,
        publish
    }
})();

export default EventsObserver;