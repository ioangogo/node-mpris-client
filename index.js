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
        this.selectedPlayer = null;
    }

    /**
     * this function allows us to emulate the player selector that is found in many mpris widgets on linux
     * @param {*} selPlayer the player to be set as the selected player
     */
    setCurrentPlayer(selPlayer) {
        if (this.players.indexOf(selPlayer) != -1 && selPlayer instanceof player){
            this.selectedPlayer = selPlayer;
        }else{
            return -1;
        }
        
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
                result.push(await bus.getProxyObject(n, MPRIS_PATH));
            }
        }
        this.players = result;
        if(!this.players.length){
            self.selectedPlayer == null;
        }else{
            if((this.selectedPlayer === null || this.players.indexOf(this.selectedPlayer) == -1)){
                this.selectedPlayer = this.players[0];
            }
        }
    }

}