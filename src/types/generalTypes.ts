type EventHandler = <T>(data?: T) => void;

interface Events {
    [key: string]: EventHandler[]
}

interface Project {

}