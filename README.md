# Air Quality Now

Air Quality Now is an application created with React Native that provides information about the status of the air in many cities around the world.

## Data source
Air Quality Now get's it's data from [OpenAQ API](https://docs.openaq.org/docs). Location's address comes from [Nominatim](https://nominatim.org/).

## Privacy policy
Air Quality Now does not collect any user's data. All data is stored into the user's device.

## Development
### Mapbox API token
1. Go to `~/.gradle` and create a file called `gradle.properties` if not exists.
2. Open that file and add a variable called `MAPBOX_DOWNLOADS_TOKEN_AQN`.
3. Go to the [access tokens manager](https://account.mapbox.com/access-tokens) on your Mapbox account and create a new one. Make sure to check the `DOWNLOADS:READ` option.
4. Copy the generated token and paste it as the value of `MAPBOX_DOWNLOADS_TOKEN_AQN` variable.
5. Create a .env file on the project's root directory and add a variable called `REACT_APP_MAPBOX_API_TOKEN`. Set as it's value the same API token you used before.

<br>
<br>
<br> 
<br>
<b>Created by JGeek00</b>
