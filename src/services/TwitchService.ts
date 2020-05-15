import axios from 'axios'
import * as Config from '../config';
import moment from 'moment';

export const isTclLive = async (): Promise<boolean> => {
    var tclLive = await axios.get(`https://api.twitch.tv/helix/streams?user_login=dumbdog`,
        {
            headers: {
                "Client-ID": Config.twitterClientId,
                'Authorization': `Bearer ${Config.twitterAuthToken}`
            }
        })
        .then(res => {
            if (res.data.data.length !== 0 && moment().day() === 5) {
                return true
            } else {
                return false
            }
        }).catch(() => { return false })

    return tclLive
}