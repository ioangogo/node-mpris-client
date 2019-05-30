var session_dbus = require("dbus-next").sessionBus;

const MPRIS_IFACE = 'org.mpris.MediaPlayer2.Player';
const MPRIS_PATH = '/org/mpris/MediaPlayer2';
const PROPERTIES_IFACE = 'org.freedesktop.DBus.Properties';

class bus{
    constructor(){
        this.players=[];
    }

    async updatePlayerList() {
        
    }

}