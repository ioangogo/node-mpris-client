const MPRIS_IFACE = 'org.mpris.MediaPlayer2.Player';
const PROPERTIES_IFACE = 'org.freedesktop.DBus.Properties';


/**
 * @class
 * This Class is a representation of
 * 
 * 
 */
class Player{
    constructor(obj){
        this.name="";
        this.playerObject = obj;
        this.playerInterface = obj.getInterface(MPRIS_IFACE);
        this.playerProps
    }

    Play(){
        this.playerInterface.Play();
    }

    Pause(){
        this.playerInterface.Pause();
    }

    Stop(){
        this.playerInterface.Stop();
    }

    Seek(offset){
        this.playerInterface.Seek(offset);
    }
    
    SetPosition(TrackID, Position){
        this.playerInterface.SetPosition(TrackID, Position);
    }

    OpenUri(uri){
        this.playerInterface.OpenUri(uri);
    }

}