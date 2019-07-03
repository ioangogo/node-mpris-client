const MPRIS_IFACE = 'org.mpris.MediaPlayer2.Player';
const PROPERTIES_IFACE = 'org.freedesktop.DBus.Properties';

export class Player{
    constructor(obj){
        this.name="";
        this.playerObject = obj;
        this.playerInterface = obj.getInterface(MPRIS_IFACE);
        this.playerProps
    }
    play(){
        this.playerObject.pl
    }
}