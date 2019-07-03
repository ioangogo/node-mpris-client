const session_dbus = require("dbus-next").sessionBus;
const {player} = require("./player");

const MPRIS_PATH = '/org/mpris/MediaPlayer2';


/**
 * @class
 * This bus class is used for representing a collection of players
 */
class bus
{
    constructor(){
        this.players=[];
    }

    async updatePlayerList() {
        /**
         * This has been Borrowed from the example mpris client example from the dbus-next libary
         * I personally dont think it is elegent and i am looking to see if there is a btter way to get bus nodes without itterating through every interface on the bus
         */
        let result = [];
        let bus = dbus.sessionBus();
        let obj = await bus.getProxyObject('org.freedesktop.DBus', '/org/freedesktop/DBus');
        let iface = obj.getInterface('org.freedesktop.DBus');
        let names = await iface.ListNames();
        for (let n of names) {
            if (n.startsWith('org.mpris.MediaPlayer2.')) {

            }
        }
        
    }

}