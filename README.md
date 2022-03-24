# Praxisruf Admin UI

## Description

This service is part of the Praxisruf system.
The Admin UI directly connects to the REST API of the Praxisruf Cloud Service.
It provides CRUD operations for all configuration items that are used in the system.

More detailed information on the system can be found in the project reports [Cloudbasiertes Praxisrufsystem](https://github.com/IP5-Cloudbasiertes-Praxisrufsystem/IP5-documentation/blob/main/out/cloudbasiertes_praxisrufsystem.pdf) and [Peer-to-Peer Kommunikation für Sprachübertragung in einem Praxisrufsystem](https://github.com/jsvilling/IP6_Bachelorarbeit_Bericht_Cloudbasiertes_Praxisrufsystem/blob/master/out/p2p_sprachubertragung_in_praxisrufsystem.pdf). 

## Development Setup

* Make sure the [Praxisruf Cloud Service](https://github.com/jsvilling/praxisruf-cloud-service) is up and running.
* Define an environment variable "REACT_APP_BACKEND_BASE_URI". Use the address of the Praxisruf Cloud Service as its value. 
* If starting for the first time run `npm install` in the project root directory
* Run `npm start` in the project root directory
* Consult the [Installation Manual](https://github.com/jsvilling/IP6_Bachelorarbeit_Bericht_Cloudbasiertes_Praxisrufsystem/blob/master/out/p2p_sprachubertragung_in_praxisrufsystem.pdf) (Appendix D) for more information on initial setup. 

---

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Make sure to set the environment variable REACT_APP_BACKEND_BASE_URI to the base url of the cloud service before running the build.  

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
