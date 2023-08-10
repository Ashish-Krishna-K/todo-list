type EventHandler = <T>(data?: T) => void;

interface Events {
    [eventName: string]: EventHandler[];
}

interface Project {

}