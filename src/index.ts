const EventsObserver = (() => {
    type EventHandler = <T>(data?:T) => void;
    interface Events {
        [key: string]: EventHandler[]
    }
    const events: Events = {};

    const subscribe = (eventName:string, eventHandler:EventHandler) => {
        eventName in events ? events.eventName.push(eventHandler) : events.eventName = [];
    };
    const unsubscribe = (eventName:string, eventHandler:EventHandler) => {
        if (eventName in events) {
            events.eventName = events.eventName.filter(fn => JSON.stringify(fn) !== JSON.stringify(eventHandler));
        }
    };
    const publish = <T>(eventName:string, data:T) => {
        events.eventName.forEach(fn => fn(data));
    };

    return {
        subscribe,
        unsubscribe,
        publish
    }
})();

export default EventsObserver;